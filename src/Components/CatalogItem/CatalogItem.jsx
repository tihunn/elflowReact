import React from "react";
import {Card, Row} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE} from "../AppRouter/const";
import css from "../../style/catalog.module.css";
import CarouselComponent from "../Carousel/Carousel";
import cssFlowerItem from "../../style/FlowerItem.module.css";
import {getCatalog, getFlowers} from "../../store/flowersReducer";


const CatalogItem = (props) => {
    const navigate = useNavigate()

    const onClick = () => {
        props.getFlowers(1, props.catalog.id)
        navigate(CATALOG_ROUTE + "/" + props.catalog.id)
    }

    return (
        <Row className={"mt-2"}>
            <Card>
                <CarouselComponent image={props.catalog.image} css={cssFlowerItem} onClick={onClick}/>

                <h2>
                <NavLink to={CATALOG_ROUTE + "/" + props.catalog.nameCatalog} className={css.link} onClick={onClick} >
                    {props.catalog.nameCatalog}
                </NavLink>
                </h2>
            </Card>
        </Row>
    )
}

export default CatalogItem;