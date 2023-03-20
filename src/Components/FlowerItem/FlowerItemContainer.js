import React from 'react';
import {connect} from 'react-redux';
import FlowerItem from "./FlowerItem";
import {addOrder} from "../../store/orderReducer";
import {cleanSearchData} from "../../store/FilterReduser";


function mapStateToProps(state) {
    return {
        role: state.user.user.role,
        isAuth: state.user.isAuth
    };
}


export default connect(
    mapStateToProps, {
        addOrder,
        cleanSearchData
    }
)(FlowerItem);