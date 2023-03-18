import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import Admin from "./Admin";
import {addCatalog, getCatalogs, toggleSuccessAdd} from "../../store/catalogsReduser";

function mapStateToProps(state) {
    return {
        isSuccessAdd: state.catalogs.isSuccessAdd
    };
}

const AdminContainer = (props) => {
    useEffect(() => {
        props.getCatalogs()
    }, [])

  return <Admin {...props}/>
}

export default connect(
    mapStateToProps, {
        addCatalog,
        toggleSuccessAdd,
        getCatalogs
    }
)(AdminContainer);

