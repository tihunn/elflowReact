import React from "react";
import {Button, Col, Container, Image} from "react-bootstrap";
import OrderItemContainer from "../../Components/OrderItem/OrderItemContainer";
import css from "../../style/OrderItem.module.css";
import trash from "../../ico/trash.svg"


const Order = (props) => {
    let orders = () => {
        return props.orders.map(order => <OrderItemContainer key={order.id} order={order}/>)
    }

    if (props.orders.length === 0) {
        return <Container><h1> Заказа пока нет. Сделайте его, выбрав цветы в левом верхнем уголу страницы! </h1>
        </Container>
    }

    return (
        <Container>

            {props.role === "admin" ?
                <div>
                    <Button className="m-2" variant="danger" onClick={() => props.listOrders("ordered")}>
                        {"заказаные"}
                    </Button>
                    <Button className="m-2" variant="success" onClick={() => props.listOrders("Assembled")}>
                        {"собраные"}
                    </Button>
                    <Button className="m-2" variant="secondary" onClick={() => props.listOrders("notOrdered")}>
                        {"не заказаные (черновики)"}
                    </Button>
                </div>
                : null
            }


            <Col>
                <div className={css.delAll} onClick={props.deleteAllOrders}>
                    Очистить весь заказ
                    <Image src={trash} className={css.trash} title="Удалить из заказа"/>
                </div>

                {orders()}

                <Button className="m-2" onClick={props.postOrders}>отправить собирать</Button>
            </Col>
        </Container>
    )
}

export default Order;