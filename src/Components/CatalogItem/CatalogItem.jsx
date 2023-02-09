import React from "react";
import {Card, Row} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE} from "../AppRouter/const";
import css from "../../style/catalog.module.css";


const CatalogItem = (props) => {
    const navigate = useNavigate()

    const onClick = () => {
        props.getCatalog(props.catalog.id)
        navigate(CATALOG_ROUTE + "/" + props.catalog.nameCatalog)
    }

    return (
        <Row className={"mt-2"}>
            <Card>
                <h2>
                <NavLink to={CATALOG_ROUTE + "/" + props.catalog.nameCatalog} className={css.link} onClick={onClick} >
                    {props.catalog.nameCatalog}
                </NavLink>
                </h2>
                {/*    {props.flower.image[0] ?*/}
                {/*        <img className={css.img} src={process.env.REACT_APP_API_URL + props.flower.image[0]} alt="картинка цветка"/>*/}
                {/*        : null}*/}
            </Card>
        </Row>
    )
}

export default CatalogItem;