import {userAPI} from "../http/userAPI";
import {addOrder} from "./orderReducer";


const initialState = {
    user: {
        email: "",
        role: "",
        name: "",
        number: ""
    },
    isAuth: false,
    error: ""
}

export let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setUser":
            return {
                ...state,
                user: {...action.user}
            }
        case "setIsAuth":
            return {
                ...state,
                isAuth: action.isAuth
            }
        case "setError":
            return {
                ...state,
                error: action.error
            }
    }
    return state
}

const setUser = (user) => ({type: "setUser", user})
const setIsAuth = (isAuth) => ({type: "setIsAuth", isAuth})
export const setError = (error) => ({type: "setError", error})


export const checkUser = () => (dispatch) => {
    userAPI.checkAuth().then(userDecoded => {
        dispatch(setUser(userDecoded))
        dispatch(setIsAuth(true))
    })
}
export const loginOrReg = (email, password, isLogin, idOrder, name, number) => (dispatch) => {
    userAPI.loginOrReg(email, password, isLogin, name, number)
        .then(userDecoded => {
            dispatch(setUser(userDecoded))
            dispatch(setIsAuth(true))
            if (idOrder) {
                dispatch(addOrder(idOrder, true))
            }
        })
        .catch((error) => {
            dispatch( setError(error.response.data.message) )
        })
}
export const logOut = () => (dispatch) => {
    localStorage.removeItem("token")
    dispatch(setUser(initialState.user))
    dispatch(setIsAuth(false))
}
export const updateUser = (oldEmail, email, password, name, number) => (dispatch) => {
    userAPI.updateAuth(oldEmail, email, password, name, number).then(userDecoded => {
        dispatch(setUser(userDecoded))
        dispatch(setIsAuth(true))
    })
}
