import React from 'react';
import {connect} from 'react-redux';
import CatalogItem from "./CatalogItem";
import {getFlowers} from "../../store/flowersReducer";

function mapStateToProps(state) {
    return {};
}


export default connect(
    mapStateToProps, {getFlowers}
)(CatalogItem);