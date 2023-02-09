import React, {Component} from 'react';
import {connect} from 'react-redux';
import Flowers from "./Flowers";

function mapStateToProps(state) {
    return {};
}


export default connect(
    mapStateToProps,
)(Flowers);