import React from "react";
import {Card, Row} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE} from "../AppRouter/const";
import css from "../../style/item.module.css";
import CarouselComponent from "../Carousel/Carousel";



const CatalogItem = (props) => {
    const navigate = useNavigate()

    const onClick = () => {
        props.getFlowers(1, props.catalog.id)
        navigate(CATALOG_ROUTE + "/" + props.catalog.id)
    }


    return (
        <>
            <div className={css.item + " " + css.flex_col}>
                <CarouselComponent image={props.catalog.image} css={css.middleImg} onClick={onClick} compressed={true}/>

                <h2 className={css.name}>
                <NavLink to={CATALOG_ROUTE + "/" + props.catalog.nameCatalog} className={css.link} onClick={onClick} >
                    {props.catalog.nameCatalog}
                </NavLink>
                </h2>
            </div>
        </>
    )
}

export default CatalogItem;