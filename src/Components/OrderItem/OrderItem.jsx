import React from "react";
import {Card, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {FLOWER_ROUTE} from "../AppRouter/const";
import css from "../../style/item.module.css"
import trash from "../../ico/trash.svg"
import CarouselComponent from "../Carousel/Carousel";
import ButtonNumberFlowersContainer from "./ButtonNumberFlowers/ButtonNumberFlowersContainer";


export default function OrderItem(props) {
    const navigate = useNavigate()
    const onClick = () => navigate(FLOWER_ROUTE + `/${props.order.id}`)

    return (
        <div className={css.item + " " + css.flex_row}>
            <div className={css.picture}>
                <CarouselComponent image={props.order.image} css={css} compressed={true} onClick={onClick}/>
            </div>

            <div className={css.text}>

                <div className={css.name}> {props.order.nameFlower} </div>

                <div className={css.characteristics}>
                    Высота: {props.order.height} см. |
                    Светочуствительность: {props.order.lightSensitivity} |
                    Время цветения: {props.order.bloomTime}
                </div>

                <div className={css.quantity}>
                    <div className={css.quantity_label}>
                        <ButtonNumberFlowersContainer number={props.order.numberFlowers} id={props.order.id}/>
                    </div>
                </div>

                {props.order.available < 0 ? < div> Нет в наличии </div> : null}

                <div className={css.price}>
                    {props.order.price} <span className={css.currency}>Руб.</span>
                </div>

                <div className={css.del} onClick={() => props.delOrder(props.order.id)}>
                    <Image src={trash} className={css.trash} title="Удалить из заказа"/>
                </div>

            </div>


        </div>
    )
}