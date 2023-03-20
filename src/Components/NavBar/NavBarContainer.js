import React from "react";
import {connect} from "react-redux";
import {logOut} from "../../store/userReducer";
import NavBar from "./NavBar";
import {cleanSearchData} from "../../store/FilterReduser";


let mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth,
        role: state.user.user.role
    }
}

export default connect(mapStateToProps, {
    logOut,
    cleanSearchData
})(NavBar)
