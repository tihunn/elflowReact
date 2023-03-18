import React, {useState} from "react";
import {Button, Col, Container} from "react-bootstrap";
import OrderHistoryItemContainer from "../../Components/OrderHistoryItem/OrderHistoryItemContainer";
import {useNavigate} from "react-router-dom";
import {ORDER_ROUTE} from "../../Components/AppRouter/const";


const OrderHistory = ({listOrder, role, getAllOrders}) => {
    const [showCreated, setShowCreated] = useState(false)
    const navigate = useNavigate()

    const toggleHideCreated = () => {
        setShowCreated(!showCreated)
    }

    let orders = () => {
        if (listOrder.length !== 0) {
            return listOrder.map(order => <OrderHistoryItemContainer key={order.id} order={order} showCreated={showCreated}/>)
        }
    }


    return (
        <Container>
            <Button className="m-2" onClick={ () => navigate(ORDER_ROUTE) }>
                Заказ (черновик)
            </Button>

            {role === "admin" ?
                <div>
                    <Button className="m-2" variant="danger" onClick={() => getAllOrders("assemble")}>
                        {"Заказаные на сборку"}
                    </Button>
                    <Button className="m-2" variant="success" onClick={() => getAllOrders("assembled")}>
                        {"Собраные"}
                    </Button>
                    <Button className="m-2" variant="success" onClick={() => getAllOrders("partially")}>
                        {"Собраные не полностью"}
                    </Button>
                    <Button className="m-2" variant="secondary" onClick={() => getAllOrders("draft")}>
                        {"Не заказаные (черновики)"}
                    </Button>
                    <Button className="m-2" variant="danger" onClick={() => getAllOrders("canceled")}>
                        {"Отменёные"}
                    </Button>
                    <Button className="m-2" onClick={() => toggleHideCreated()}>
                        {"показать время создания пользователей"}
                    </Button>
                </div>
                : null
            }

            <Col>
                {orders()}

                {listOrder.length === 0 ? <h1> История заказов пуста </h1> : null}
            </Col>
        </Container>
    )
}

export default OrderHistory;