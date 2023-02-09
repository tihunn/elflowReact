import React, {useEffect} from "react";
import {getFlowers} from "../../../store/flowersReducer";
import {connect} from "react-redux";
import ListFlowers from "./ListFlowers";
import Preload from "../../Preload/Preload";
import {addOrder} from "../../../store/orderReducer";


const ListFlowersContainer = (props) => {
    useEffect(()=> {
        props.getFlowers(props.activePage)
    }, [])

    if (props.isFetching) {return <Preload/>}
    return <>
        <ListFlowers role={props.role} flowers={props.flowers} addOrder={props.addOrder}/>
    </>
}

let mapStateToProps = (state) => {
    return {
        role: state.user.role,
        flowers: state.flowers.flowers,
        activePage: state.flowers.activePage,
        isFetching: state.preloader.isFetching
    }
}

export default connect(mapStateToProps, {getFlowers, addOrder})(ListFlowersContainer)