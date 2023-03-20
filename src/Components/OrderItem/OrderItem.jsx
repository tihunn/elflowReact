import React from "react";
import {Card, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {FLOWER_ROUTE} from "../AppRouter/const";
import css from "../../style/OrderItem.module.css"
import trash from "../../ico/trash.svg"
import CarouselComponent from "../Carousel/Carousel";
import ButtonNumberFlowersContainer from "./ButtonNumberFlowers/ButtonNumberFlowersContainer";



const OrderItem = (props) => {
    const navigate = useNavigate()
    const onClick = () => navigate(FLOWER_ROUTE + `/${props.order.id}`)

    return (
        <Row className={"mt-2"}>
            <Card className={css.main_orderItem_wrapper}>
                <div className={css.img} >
                    <CarouselComponent image={props.order.image} css={css} compressed={true} onClick={onClick}/>
                </div>
                <div className={css.text}>
                    <h1>
                        {props.order.nameFlower}
                    </h1>

                    <div>
                        Высота: {props.order.height} см. <br/>
                        Светочуствительность: {props.order.lightSensitivity}. <br/>
                        Время цветения: {props.order.bloomTime}. <br/>
                    </div>
                </div>
                <div className={css.numbers}>
                    <div>
                         <ButtonNumberFlowersContainer number={props.order.numberFlowers} id={props.order.id} />
                        <br/>
                    </div>

                    {props.order.available < 0 ? < div > Нет в наличии </div> : null}

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