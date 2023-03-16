import React from 'react';
import {connect} from 'react-redux';
import AdminOrder from "./AdminOrder";
import {listOrders} from "../../store/orderReducer";

function mapStateToProps(state) {
    return {};
}


export default connect(
    mapStateToProps,
    {
        listOrders
    }
)(AdminOrder);