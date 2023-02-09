import React, {useState} from 'react';
import {Button, Container, DropdownButton, Modal, ModalDialog, ModalTitle} from "react-bootstrap";
import css from "../../style/admin.module.css"
import {toggleSuccessAdd} from "../../store/catalogsReduser";
import CatalogsSelectionContainer from "../../Components/CatalogsSelection/CatalogsSelectionContainer";


const Admin = (props) => {
    const [catalog, setCatalog] = useState("")

    const onChange = (e) => {
        setCatalog(e.target.value)
    }

    return (
        <Container className="text-center">

            <Modal show={props.isSuccessAdd} onHide={() => props.toggleSuccessAdd(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Каталог успешно добавлен, удалён или обновлён</Modal.Title>
                </Modal.Header>
                <Modal.Body>Чтобы добавить в существующий каталог растения выберете нужные из списка всех
                    цветов, можете воспользоваться поиском</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.toggleSuccessAdd(false)}>
                        Хорошо
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
                <input className={css.input_category} type="text" value={catalog} onChange={onChange}
                       placeholder="Введите название нового каталога"/>
            </div>
            <div>
                <Button className="m-2" onClick={() => props.addCatalog(catalog)}>
                    Добавить каталог
                </Button>
            </div>
            <div>
                <Button className="m-2" > Добавить растение </Button>
            </div>
            <div>
                <CatalogsSelectionContainer/>
            </div>

        </Container>
    );
};

export default Admin;