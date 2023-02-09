import React from "react";
import {Button, Card, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {FLOWER_ROUTE} from "../../AppRouter/const";
import css from "../../../style/FlowerItem.module.css"


const FlowerItem = (props) => {
    const navigate = useNavigate()

    return (
        <Row className={"mt-2"}>
            <Card>
                <div onClick={() => navigate(FLOWER_ROUTE + `/${props.flower.id}`)}>
                    <img className={css.img} src={process.env.REACT_APP_API_URL + "/" + props.flower.img} alt="картинка цветка"/>

                    <h2 className={css.nameFlower}>{props.flower.nameFlower}</h2>
                    <div>Высота: {props.flower.height}</div>
                    <div>Цена: {props.flower.price}</div>
                    <div>В наличии: {props.flower.available}</div>
                </div>

                <Button variant="success" className="m-2 "
                        onClick={() => props.addOrder(props.flower.id)}>Заказать</Button>
            </Card>
        </Row>
    )
}

export default FlowerItem;