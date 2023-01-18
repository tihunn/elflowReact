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
        description: " ",
        img: "null"
}

export let oneFlowerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setFlower":
            return {
                ...action.flower
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
    }
    return state
}

const setFlower = (flower) => ( {type: "setFlower", flower} )
export const updateNameFlower = (nameFlower) => ( {type: "updateNameFlower", nameFlower} )
export const updateHeight = (height) => ( {type: "updateHeight", height} )
export const updatePrice = (price) => ( {type: "updatePrice", price} )
export const updateWholesale = (wholesale) => ( {type: "updateWholesale", wholesale} )
export const updateAvailable = (available) => ( {type: "updateAvailable", available} )
export const updateDescription = (description) => ( {type: "updateDescription", description} )


export const getFlower = (id) => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    flowerAPI.getOneFlower(id).then(data => {
        dispatch( setFlower(data.rows[0]) )
        dispatch( toggleIsFetching(false) )
    })
}
export const deleteFlower = (id) => (dispatch) => {
    flowerAPI.deleteFlower(id).then( () => {
        dispatch( setFlower({}) )
    })
}
export const updateFlower = (formData) => (dispatch) => {
    flowerAPI.updateFlower(formData).then(() => {})
}