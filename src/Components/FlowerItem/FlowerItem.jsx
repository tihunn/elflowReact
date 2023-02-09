import React from "react";
import {Button, Card, Dropdown, DropdownButton, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {FLOWER_ROUTE} from "../AppRouter/const";
import css from "../../style/FlowerItem.module.css"
import CatalogItemContainer from "../CatalogItem/CatalogItemContainer";
import {addFlowerInCatalog} from "../../store/catalogsReduser";
import CatalogsSelectionContainer from "../CatalogsSelection/CatalogsSelectionContainer";


const FlowerItem = (props) => {
    const navigate = useNavigate()

    // const catalogSelectionButton = () => {
    //     return props.catalogs.map(catalog =>
    //         <Button
    //             className="m-2"
    //             onClick={() => props.addFlowerInCatalog(catalog.id, props.flower.id)}
    //             key={catalog.id}
    //         > {catalog.nameCatalog} </Button>
    //     )
    // }

    return (
        <Row className={"mt-2"}>
            <Card>
                <div onClick={() => navigate(FLOWER_ROUTE + `/${props.flower.id}`)}>
                    {props.flower.image && props.flower.image[0] ?
                        <img className={css.img} src={process.env.REACT_APP_API_URL + props.flower.image[0]}
                             alt="картинка цветка"/>
                        : null}
                    <h2 className={css.nameFlower}>{props.flower.nameFlower}</h2>
                    <div>Высота: {props.flower.height}</div>
                    <div>Цена: {props.flower.price}</div>
                    <div>В наличии: {props.flower.available}</div>
                </div>

                <Button variant="success" className="m-2 "
                        onClick={() => props.addOrder(props.flower.id)}>Заказать</Button>
                {props.role === "admin" ? <CatalogsSelectionContainer flowerId={props.flower.id}/> : null
                    // <DropdownButton title={"Добавить в каталог"}>
                    //     {catalogSelectionButton()}
                    // </DropdownButton> : null
                }
            </Card>
        </Row>
    )
}

export default FlowerItem;