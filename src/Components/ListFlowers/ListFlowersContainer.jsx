import React from "react";
import {connect} from "react-redux";
import ListFlowers from "./ListFlowers";
import Preload from "../Preload/Preload";


const ListFlowersContainer = (props) => {

    if (props.isFetching) {return <Preload/>}
    return <>
        <ListFlowers flowers={props.flowers} addOrder={props.addOrder} catalogs={props.catalogs}/>
    </>
}

let mapStateToProps = (state) => {
    return {
        flowers: state.flowers.flowers,
        activePage: state.flowers.activePage,
        isFetching: state.preloader.isFetching,
        catalogs: state.catalogs.arrCatalogs
    }
}

export default connect(mapStateToProps, {})(ListFlowersContainer)