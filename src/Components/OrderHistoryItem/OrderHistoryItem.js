import React from 'react';
import css from "../../style/OrderHistory.module.css";

const InfoItem = ({label, value}) => {
    return <div className={css.info_item}>
        <span className={css.label}> {label}: </span>
        <span className={css.value}> {value} </span>
    </div>
}


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
                <span hidden={showCreated}> Создан: {timeRu(order.user.createdAt)} </span>
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

            <div className={css.container}>
                <div className={css.info}>

                    <InfoItem label="Заказ №" value={order.id}/>

                    {/*<InfoItem label="email" value={order.user.email}/>*/}
                    {/*<InfoItem label="Имя" value={order.user.email}/>*/}
                    {/*<InfoItem label="Номер" value={order.user.number}/>*/}
                    {/*<InfoItem label="Роль" value={order.user.role}/>*/}
                    {/*<InfoItem label="Создан" value={order.user.createdAt}/>*/}
                    {/*<InfoItem label="Статус заказа" value={statusRu()}/>*/}
                    {/*<InfoItem label="Время обновление статуса" value={timeRu(order.updatedAt)}/>*/}
                    <InfoItem label="Кол-во растений" value={order.sumFlowers}/>
                    <InfoItem label="Общяя сумма" value={order.sumPrice}/>

                </div>
            </div>

    );
};

export default OrderHistoryItem;