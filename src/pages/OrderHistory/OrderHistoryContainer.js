import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Preload from "../../Components/Preload/Preload";
import OrderHistory from "./OrderHistory";
import {getAllOrders, orderHistory} from "../../store/orderReducer";



const OrderHistoryContainer = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        props.orderHistory()
        setLoading(false)
    }, [])

    if (loading) {
        return <Preload/>
    }
    return <OrderHistory listOrder={props.listOrder}
                  role={props.role}
                  orderHistory={props.orderHistory}
                  getAllOrders={props.getAllOrders}
    />
}

let mapStateToProps = (state) => {
    return {
        role: state.user.user.role,
        listOrder: state.orders.listOrder
    }
}

export default connect(mapStateToProps, {
    orderHistory,
    getAllOrders
})(OrderHistoryContainer);
