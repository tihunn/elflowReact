import React from "react";
import {Card, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {FLOWER_ROUTE} from "../AppRouter/const";
import css from "../../style/OrderItem.module.css"
import ButtonNumberFlowers from "./ButtonNumberFlowers";
import trash from "../../ico/trash.svg"
import CarouselComponent from "../Carousel/Carousel";



const OrderItem = (props) => {
    const navigate = useNavigate()

    return (
        <Row className={"mt-2"}>
            <Card className={css.main_orderItem_wrapper}>
                <div className={css.img} onClick={() => navigate(FLOWER_ROUTE + `/${props.order.id}`)}>
                    <CarouselComponent image={props.order.image} css={css}/>
                </div>
                <div className={css.text}>
                    <h1>
                        {props.order.nameFlower}
                    </h1>

                    <div>
                        Высота: {props.order.height}.
                        Светочуствительность: {props.order.lightSensitivity}.
                        Время цветения: {props.order.bloomTime}.
                    </div>
                </div>
                <div className={css.numbers}>
                    <div>
                         <ButtonNumberFlowers number={props.order.numberFlowers}/> <br/>
                    </div>
                    <div>
                        В наличии: {props.order.available} <br/>
                    </div>
                </div>
                <div className={css.price}>
                    {props.order.price} Руб.
                </div>
                <div className={css.del} onClick={() => props.delOrder(props.order.id)}>
                    <Image src={trash} className={css.trash} title="Удалить из заказа"/>

                </div>

            </Card>
        </Row>
    )
}

export default OrderItem;