import React, {useEffect, useState} from "react";
import {checkUser} from "../../store/userReducer";
import App from "./App";
import {connect} from "react-redux";
import {getFlowers} from "../../store/flowersReducer";
import Preload from "../Preload/Preload";


const AppContainer = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        props.checkUser()
        props.getFlowers()
        setLoading(false)
    }, [])

    if (loading) {return <Preload/>}
    return <App/>
}

let mapStateToProps = (state) => {
    return {
        role: state.user.role,
        isFetching: state.preloader.isFetching,
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, {checkUser, getFlowers})(AppContainer);
