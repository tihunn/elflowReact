import {toggleIsFetching} from "./preloaderReducer";
import {catalogAPI} from "../http/catalogAPI";

let initialState = {
    catalogs: [
        {id: 0, nameCatalog: ""}
    ],

}

export let adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggleIsFetching":
            return {
                ...state,
                isFetching:  action.isFetching,
            }
    }
    return state
}


export const addCategory = (nameCategory) => (dispatch) => {
    dispatch( toggleIsFetching(true) )
    catalogAPI.addCategory(nameCategory).then( () => {
        dispatch( toggleIsFetching(false) )
    })
}