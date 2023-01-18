import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";
import SendFlower from "../../Shop/SendFlower/SendFlower";
import AddFlowerContainer from "../../Shop/SendFlower/AddFlowerContainer";

const Admin = () => {
    const [addFlowerVisible, setAddFlowerVisible] = useState(false)


    return (
        <Container className={"flex-column d-flex"}>
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setAddFlowerVisible(true)}
            >
                Добавить растение
            </Button>
            <AddFlowerContainer show={addFlowerVisible} onHide={() => setAddFlowerVisible(false)}/>
        </Container>

    );
};

export default Admin;