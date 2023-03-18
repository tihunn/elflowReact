import {orderAPI} from "../http/orderAPI";
import {toggleIsFetching} from "./preloaderReducer";
import {loginOrReg} from "./userReducer";


const initialState = {
    orders: [],
    draftOrder: [],
    listOrder: []
}


export let orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setOrders":
            return {
                ...state,
                orders: action.orders
            }
        case "cleanOrders":
            return {
                ...initialState
            }
        case "delOrder":
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.id)
            }
        case "setDraftOrder":
            return {
                ...state,
                draftOrder: action.draftOrder
            }
        case "setListOrder":
            return {
                ...state,
                listOrder: action.listOrder
            }
        case "setNumberFlowers":
            return {
                ...state,
                orders: state.orders.map(order => {
                    if (order.id === action.id) {
                        order.numberFlowers = action.newNum
                    }
                    return order
                }),
            }
    }
    return state
}


const setOrders = (orders) => ({type: "setOrders", orders})
const cleanOrders = () => ({type: "cleanOrders",})
const deleteOrder = (id) => ({type: "delOrder", id})
const setDraftOrder = (draftOrder) => ({type: "setDraftOrder", draftOrder})
const setListOrder = (listOrder) => ({type: "setListOrder", listOrder})
export const setNumberFlowers = (id, newNum) => ({type: "setNumberFlowers", id, newNum})


export const addOrder = (id, isAuth = true, numberFlower) => (dispatch) => {
    if (!isAuth) {
        let random = new Date()
        dispatch(loginOrReg(random, random, false, id))
    } else {
        orderAPI.addOrder(id, numberFlower).then((data) => {
            dispatch(setDraftOrder(data))
        })
    }

}
export const getOrders = () => (dispatch) => {
    dispatch(toggleIsFetching(true))
    orderAPI.getOrders().then((data) => {
        if (data !== "Закажите цветы!") {
            dispatch(setOrders(data.rows))
            dispatch(setDraftOrder(data.order))
        }
        dispatch(toggleIsFetching(false))
    })
}
export const postOrders = () => (dispatch) => {
    dispatch(toggleIsFetching(true))
    orderAPI.postOrders().then((data) => {
        dispatch(cleanOrders())
        dispatch(toggleIsFetching(false))
    })
}
export const delOrder = (id) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    orderAPI.delOrder(id).then((data) => {
        dispatch(deleteOrder(id))
        dispatch(toggleIsFetching(false))
    })
}
export const deleteAllOrders = (id) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    orderAPI.delOrders().then((data) => {
        dispatch(cleanOrders())
        dispatch(toggleIsFetching(false))
    })
}
export const getAllOrders = (statusSend) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    orderAPI.getAllOrders(statusSend).then((data) => {
        dispatch(setListOrder(data))
        dispatch(toggleIsFetching(false))
    })
}
export const orderHistory = () => (dispatch) => {
    dispatch(toggleIsFetching(true))
    orderAPI.orderHistory().then((data) => {
        if (data.length !== 0) {
            dispatch(setListOrder(data))
        }
        dispatch(toggleIsFetching(false))
    })
}

