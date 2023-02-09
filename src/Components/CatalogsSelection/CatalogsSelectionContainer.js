import React from 'react';
import {Button, DropdownButton} from "react-bootstrap";

const CatalogsSelection = (props) => {
    const catalogSelectionButton = () => {
        if (props.catalogs)
        return props.catalogs.map(catalog =>
            <Button
                className="m-2"
                onClick={() => props.addFlowerInCatalog(catalog.id, props.flower.id)}
                key={catalog.id}
            > {catalog.nameCatalog} </Button>
        )
    }

    return (
            <DropdownButton title={"Добавить в каталог"}>
                {catalogSelectionButton()}
            </DropdownButton>
    );
};

export default CatalogsSelection;