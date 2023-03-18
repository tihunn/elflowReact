import React from 'react';
import {Card, Image, Row} from "react-bootstrap";
import css from "../../style/OrderItem.module.css";



const OrderHistoryItem = ({order, role, showCreated}) => {
    const statusRu = () => {
        switch (order.status) {
            case "assemble": {
                return "Собирается"
            }
            case "draft": {
                return "Черновик"
            }
            case "assembled": {
                return "Собран"
            }
            case "canceled": {
                return "Отменён"
            }
            case "partially": {
                return "Собран частично (что-то отсутствовало)"
            }
            default:
                return order.status
        }
    }

    const userStat = () => {
        if (order.user && role === "admin") {
            return <div className={css.img}>
                email: {order.user.email} <br/>
                Имя: {order.user.name} <br/>
                Номер: {order.user.number} <br/>
                Роль: {order.user.role} <br/>
                <span hidden={showCreated}> Создан: {timeRu( order.user.createdAt )} </span>
            </div>
        }
    }

    const timeRu = (time) => {
        if (time.length) {
            const dateAndTime = time.split("T")
            dateAndTime[1] = dateAndTime[1].split(".").shift()
            return dateAndTime[0] + " " + dateAndTime[1]
        }
    }

    if (!order || order.length === 0) {
        return <div></div>
    }

    return (
        <Row className={"mt-2"}>
            <Card className={css.main_orderItem_wrapper}>

                {userStat()}

                <div className={css.text}>
                    <h1>
                        Заказ номер № {order.id}
                    </h1>

                    <div>
                        Статус заказа: {statusRu()}. <br/>
                        Время обновление статуса: {timeRu(order.updatedAt)}.
                    </div>
                </div>
                <div className={css.numbers}>
                    <div>
                        Кол-во растений: <br/>
                        {order.sumFlowers} <br/>
                    </div>
                </div>
                <div className={css.price}>
                    Общяя сумма заказа: <br/>
                    {order.sumPrice} Руб. <br/>
                </div>
            </Card>
        </Row>
    );
};

export default OrderHistoryItem;