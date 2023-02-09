import React from 'react';
import {DropdownButton} from "react-bootstrap";

const CatalogsSelection = (props) => {


    return (

            <DropdownButton title={"Добавить в каталог"}>
                {catalogSelectionButton()}
            </DropdownButton> : null

    );
};

export default CatalogsSelection;