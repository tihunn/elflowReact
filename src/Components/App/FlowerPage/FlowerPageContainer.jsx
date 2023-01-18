import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {SHOP_ROUTE} from "../AppRouter/const";
import {connect} from "react-redux";
import FlowerPage from "./FlowerPage";
import {toggleIsFetching} from "../../../store/preloaderReducer";
import {
    deleteFlower,
    getFlower,
    updateAvailable,
    updateDescription,
    updateHeight,
    updateNameFlower,
    updatePrice,
    updateWholesale,
} from "../../../store/oneFlowerReducer";
import {setFile} from "../../../store/FilterReduser";
import {addOrder} from "../../../store/orderReducer";


const FlowerPageContainer = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        props.getFlower(id)
    }, [])

    const delFlower = () => {
        props.deleteFlower(id)
        navigate(SHOP_ROUTE)
    }

    return <FlowerPage {...props} delFlower={delFlower}/>
}
let mapStateToProps = (state) => {
    return {
        role: state.user.user.role,
        flower: state.oneFlower,
    }
}

export default connect(mapStateToProps, {
    setFile,
    deleteFlower,
    getFlower,
    toggleIsFetching,
    updateNameFlower,
    updateHeight,
    updatePrice,
    updateWholesale,
    updateAvailable,
    updateDescription,
    addOrder
})(FlowerPageContainer)