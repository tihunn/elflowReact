import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";

const Admin = (props) => {
    const [category, setCategory] = useState("")

    const onChange = (e) => {
        setCategory(e.target.value)
    }

    return (
        <Container>
            <input type="text" value={category} onChange={onChange} placeholder="Введите название новой категории"/>
           <Button onClick={props.addCategory(category)}> Добавить категорию </Button>
            <Button> Добавить растение </Button>
        </Container>
    );
};

export default Admin;