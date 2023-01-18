import React from "react";
import {Row} from "react-bootstrap";
import FlowerItem from "./FlowerItem/FlowerItem";




const ListFlowers = (props) => {
    const flowers = () => {
        if (Object.keys(props.flowers).length > 0) {
            return props.flowers.map(flower => <FlowerItem key={flower.id} flower={flower} addOrder={props.addOrder}/>)
        }
    }

    return (
        <Row sm={3} md={3} lg={4} xl={5} xxl={6}>
            {flowers()}
        </Row>
    )
}

export default ListFlowers;