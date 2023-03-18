import React from 'react';
import {connect} from 'react-redux';
import FlowerItem from "./FlowerItem";
import {addOrder} from "../../store/orderReducer";


function mapStateToProps(state) {
    return {
        role: state.user.user.role,
        isAuth: state.user.isAuth
    };
}


export default connect(
    mapStateToProps, {
        addOrder
    }
)(FlowerItem);