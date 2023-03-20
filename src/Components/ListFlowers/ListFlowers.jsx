import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import FilterContainer from "../Filter/FilterContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import CatalogItemContainer from "../CatalogItem/CatalogItemContainer";
import {useLocation} from "react-router-dom";
import FlowerItemContainer from "../FlowerItem/FlowerItemContainer";


const ListFlowers = (props) => {
    const location = useLocation()

    const catalogsOrFlowers = () => {
        if (location.pathname === "/") {
            if (props.catalogs) {
                return props.catalogs.map(catalog =>
                    <CatalogItemContainer
                        key={catalog.id}
                        catalog={catalog}
                    />)
            }
        } else if (props.flowers.length !== 0 && props.flowers[0].id) {
            return props.flowers.map(flower =>
                <FlowerItemContainer
                    key={flower.id}
                    flower={flower}
                />)
        } else {
            return <h1 className={"mt-2 text-center"}> Ничего не найдено </h1>
        }
    }


    return (
        <Container>
            <Row>
                {location.pathname !== "/"
                    ? <Col md={3} xl={2}>
                        <FilterContainer/>
                    </Col>
                    : null}
                <Col md={9} xl={10}>
                    <Row sm={1} md={2} lg={2} xl={3} xxl={4}>
                        {catalogsOrFlowers()}
                    </Row>
                    {location.pathname !== "/" ? <PaginationContainer/> : null}
                </Col>
            </Row>
        </Container>
    )
}

export default ListFlowers;