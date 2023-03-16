import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {checkUser} from "../../store/userReducer";
import {deleteAllOrders, getOrders, listOrders, postOrders} from "../../store/orderReducer";
import Order from "./Order";
import Preload from "../../Components/Preload/Preload";


const OrderContainer = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        props.checkUser()
        props.getOrders()
        setLoading(false)
    }, [])

    if (loading) {
        return <Preload/>
    }
    return <Order orders={props.orders}
                  postOrders={props.postOrders}
                  deleteAllOrders={props.deleteAllOrders}
                  role={props.role}/>
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.preloader.isFetching,
        orders: state.orders.orders,
        role: state.user.user.role
    }
}

export default connect(mapStateToProps, {
    checkUser,
    getOrders,
    postOrders,
    deleteAllOrders,
    listOrders
})(OrderContainer);
