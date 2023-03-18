import React from 'react';
import {connect} from 'react-redux';
import OrderHistoryItem from "./OrderHistoryItem";


function mapStateToProps(state) {
    return {
        role: state.user.user.role,
    };
}


export default connect(
    mapStateToProps,
    {

    }
)(OrderHistoryItem);