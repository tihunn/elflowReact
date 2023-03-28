import React from "react";
import {Container} from "react-bootstrap";
import FilterContainer from "../Filter/FilterContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import CatalogItemContainer from "../CatalogItem/CatalogItemContainer";
import {useLocation} from "react-router-dom";
import FlowerItemContainer from "../FlowerItem/FlowerItemContainer";
import css from "../../style/item.module.css"



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
            <div>
                {location.pathname !== "/"
                    ? <div  >
                        <FilterContainer/>
                    </div>
                    : null}
                <div className={css.grid}>

                    {catalogsOrFlowers()}

                    {location.pathname !== "/" ? <PaginationContainer/> : null}
                </div>
            </div>
        </Container>
    )
}

export default ListFlowers;