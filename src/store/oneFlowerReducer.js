import {flowerAPI} from "../http/flowerAPI";
import {toggleIsFetching} from "./preloaderReducer";

const initialState = {
    id: -1,
    nameFlower: "",
    height: 0,
    bloomTime: "",
    sunOrShadow: true,
    isSunAndShadow: true,
    price: 200,
    wholesale: 100,
    available: 0,
    description: "",
    alternativeNames: "",
    image: [],
    arrFiles: [],
    messageServer: "",
}

export let oneFlowerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setFlower":
            return {
                ...action.flower,
                arrFiles: []
            }
        case "updateNameFlower":
            return {
                ...state,
                nameFlower: action.nameFlower
            }
        case "updateHeight":
            return {
                ...state,
                height: action.height
            }
        case "updatePrice":
            return {
                ...state,
                price: action.price
            }
        case "updateWholesale":
            return {
                ...state,
                wholesale: action.wholesale
            }
        case "updateAvailable":
            return {
                ...state,
                available: action.available
            }
        case "updateDescription":
            return {
                ...state,
                description: action.description
            }
        case "updateAlternativeNames":
            return {
                ...state,
                alternativeNames: action.alternativeNames
            }
        case "addFile":
            return {
                ...state,
                arrFiles: [...state.arrFiles, action.file]
            }
        case "delFile":
            return {
                delFile: state.arrFiles.splice(action.index, 1),
                ...state,
            }
        case "setMessageServer":
            return {
                ...state,
                messageServer: action.messageServer
            }
        case "cleanMessageServer":
            return {
                ...state,
                messageServer: ""
            }

    }
    return state
}

const setFlower = (flower) => ({type: "setFlower", flower})
export const updateNameFlower = (nameFlower) => ({type: "updateNameFlower", nameFlower})
export const updateHeight = (height) => ({type: "updateHeight", height})
export const updatePrice = (price) => ({type: "updatePrice", price})
export const updateWholesale = (wholesale) => ({type: "updateWholesale", wholesale})
export const updateAvailable = (available) => ({type: "updateAvailable", available})
export const updateDescription = (description) => ({type: "updateDescription", description})
export const updateAlternativeNames = (alternativeNames) => ({type: "updateAlternativeNames", alternativeNames})
export const addFile = (file) => ({type: "addFile", file})
export const delFile = (index) => ({type: "delFile", index})
export const setMessageServer = (messageServer) => ({type: "setMessageServer", messageServer})
export const cleanMessageServer = () => ({type: "cleanMessageServer"})


export const getFlower = (id) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    flowerAPI.getOneFlower(id).then(data => {
        if (data.rows.length !== 0) {
            dispatch(setFlower(data.rows[0]))
        }
        dispatch(toggleIsFetching(false))
    })
}
export const deleteFlower = (id) => (dispatch) => {
    flowerAPI.deleteFlower(id).then(() => {
        dispatch(setFlower(initialState))
    })
}
export const updateFlower = (formData) => (dispatch) => {
    flowerAPI.updateFlower(formData).then(() => {
        let id = formData.get("id")
        dispatch(getFlower(id))
    })
}
export const addImg = (formData) => (dispatch) => {
    flowerAPI.addImg(formData).then((data) => {
        if (data === "Запрос успешно обработан") {
            let id = formData.get("id")
            dispatch(getFlower(id))
        }
    })
}
export const createFlower = (formData) => (dispatch) => {
    flowerAPI.createFlower(formData).then(data => {
        dispatch( setMessageServer(data) )
    })
}
export const delImg = (id, nameImg) => (dispatch) => {
    flowerAPI.delImg(nameImg).then(data => {
        if (data === "Запрос на удаление успешно обработан") {
            dispatch(getFlower(id))
        }
    })
}