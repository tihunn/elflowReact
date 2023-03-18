import React from "react";
import {Button, Col, Container, Image} from "react-bootstrap";
import OrderItemContainer from "../../Components/OrderItem/OrderItemContainer";
import css from "../../style/OrderItem.module.css";
import trash from "../../ico/trash.svg"
import {useNavigate} from "react-router-dom";
import {ORDER_HISTORY_ROUTE} from "../../Components/AppRouter/const";
import OrderHistoryItemContainer from "../../Components/OrderHistoryItem/OrderHistoryItemContainer";


const Order = (props) => {
    const navigate = useNavigate();
    let orders = () => {
        if (props.orders && props.orders.length !== 0) {
            return props.orders.map(order => <OrderItemContainer key={order.id} order={order}/>)
        }
    }

    return (
        <Container>
            <Button className="m-2" onClick={ () => navigate(ORDER_HISTORY_ROUTE) }>
                История заказов
            </Button>

            <OrderHistoryItemContainer order={props.draftOrder} deleteAllOrders={props.deleteAllOrders}/>

            {props.orders.length === 0
                ? <h1> Сделайте заказ, выбрав цветы в левом верхнем уголу страницы! Или проверьте историю заказов </h1>
                : <Col>
                    <div className={css.delAll} onClick={props.deleteAllOrders}>
                        Очистить весь заказ
                        <Image src={trash} className={css.trash} title="Удалить из заказа"/>
                    </div>

                    {orders()}

                    <Button className="m-2" onClick={props.postOrders}>Отправить собирать</Button>
                </Col>
            }
        </Container>
    )
}

export default Order;