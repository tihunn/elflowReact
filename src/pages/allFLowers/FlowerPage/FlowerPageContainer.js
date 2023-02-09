import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {CATALOGS_ROUTE} from "../../../Components/AppRouter/const";
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
import Preload from "../../../Components/Preload/Preload";


const FlowerPageContainer = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        props.getFlower(id)
    }, [])

    const delFlower = () => {
        props.deleteFlower(id)
        navigate(CATALOGS_ROUTE)
    }


    if (props.isFetching) {return <Preload/>}
    return <FlowerPage {...props} delFlower={delFlower}/>
}
let mapStateToProps = (state) => {
    return {
        role: state.user.user.role,
        flower: state.oneFlower,
        isFetching: state.preloader.isFetching
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