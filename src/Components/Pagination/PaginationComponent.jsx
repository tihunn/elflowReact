import React from 'react';
import {Pagination} from 'react-bootstrap';
import {useLocation} from "react-router-dom";


const PaginationComponent = (props) => {
    const location = useLocation()
    let idCatalog

    const path = location.pathname.split("/")
    if (path[1] === "catalog") {
        idCatalog = path[2]
    }


    let items = []
    let pageCount = Math.ceil(props.totalCount / 12)
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === props.activePage}
                onClick={() => props.getFlowers(number, idCatalog, props.paramsData)}
            >
                {number}
            </Pagination.Item>
        )
    }

    return (
        <Pagination>{items}</Pagination>
    )
}

export default PaginationComponent;