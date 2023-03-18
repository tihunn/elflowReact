import React from 'react';
import {connect} from 'react-redux';
import ButtonNumberFlowers from "./ButtonNumberFlowers";
import {addOrder, setNumberFlowers} from "../../../store/orderReducer";

function mapStateToProps(state) {
    return {};
}


export default connect(
    mapStateToProps, {
        setNumberFlowers,
        addOrder
    }
)(ButtonNumberFlowers);