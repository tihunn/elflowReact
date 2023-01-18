import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ListFlowersContainer from "./ListFlowersContainer";
import PaginationContainer from "./Pagination/PaginationContainer";
import FilterContainer from "./Filter/FilterContainer";


const Shop = () => {
    return (
        <Container>
            <Row >
                <Col md={3} xl={2} >
                    <FilterContainer/>
                </Col>
                <Col md={9} xl={10}>
                    <ListFlowersContainer/>
                    <PaginationContainer/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;