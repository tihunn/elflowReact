import React from 'react';
import {Button, DropdownButton} from "react-bootstrap";


const CatalogsSelection = (props) => {
    const AddOrDel = (catalogId) => {
        if (props.flowerId) {
            return () => props.addFlowerInCatalog(catalogId, props.flowerId)
        } else {
            return () => props.delCatalog(catalogId)
        }
    }

    const catalogSelectionButton = () => {
        if (props.catalog && props.catalog[0].nameCatalog) {
            props.getCatalogs()
        } else {
            return props.catalogs.map(catalog =>
                <Button
                    className="m-2 d-block"
                    onClick={AddOrDel(catalog.id)}
                    key={catalog.id}
                >
                    {catalog.nameCatalog}
                </Button>
            )
        }
    }


    return (
        <DropdownButton title={props.flowerId ? "Добавить в каталог" : "Удалить каталог"}>
            {catalogSelectionButton()}
        </DropdownButton>
    );
};

export default CatalogsSelection;