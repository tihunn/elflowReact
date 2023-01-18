import React from "react";
import {connect} from "react-redux";
import AppRouter from "./AppRouter";


let mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, {})(AppRouter)
