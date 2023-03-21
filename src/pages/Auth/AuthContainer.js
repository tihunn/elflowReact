import React from "react";
import { useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../../Components/AppRouter/const";
import {connect} from "react-redux";
import Auth from "./Auth";
import {loginOrReg, setError, updateUser} from "../../store/userReducer";



const AuthContainer = (props) => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    return <Auth isLogin={isLogin}
        {...props}
    />
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth,
        auth: state.user.user,
        error: state.user.error,
    }
}

export default connect(mapStateToProps, {
    loginOrReg,
    updateUser,
    setError
})(AuthContainer)