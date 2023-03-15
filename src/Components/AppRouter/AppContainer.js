import React, {useEffect, useState} from "react";
import {checkUser} from "../../store/userReducer";
import {connect} from "react-redux";
import Preload from "../Preload/Preload";
import AppRouter from "./AppRouter";


const AppContainer = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        props.checkUser()
        setLoading(false)
    }, [])

    if (loading) {return <Preload/>}
    return <AppRouter isAuth={props.isAuth}/>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, {checkUser})(AppContainer);
