import React from "react";
import {Button, Container, DropdownButton, Modal} from "react-bootstrap";
import css from "../../../style/FlowerPage.module.css"
import EditableContainer from "../../../Components/Editable/EditableContainer";
import LightSensitivityContainer from "../../../Components/LightSensitivity/LightSensitivityContainer";
import VariantsBloomTimeContainer from "../../../Components/VariantsBloomTime/VariantsBloomTimeContainer";
import CarouselComponent from "../../../Components/Carousel/Carousel";
import FileUpload from "../../../Components/FileUpload/FileUpload";
import SendFlowerContainer from "../../../Components/SendFlower/SendFlowerContainer";
import trash from "../../../ico/trash.svg"



const FlowerPage = (props) => {
    let isAdmin
    props.role === "admin" ? isAdmin = true : isAdmin = false

    const uploadedFile = () => {
        return props.flower.arrFiles.map((file, index) => {
            return <div className={css.upload_text} key={index}>
                {file.name}
                <img className={css.trash}
                     alt="Удалить файл"
                     onClick={() => props.delFile(index)}
                     src={trash}
                />
            </div>
        })
    }

    const arrImg = () => {
        if (props.flower.image) {
            return props.flower.image.map((el, index) => {
                return <div className={css.upload_text} key={index}>
                    удалить изображение № {index + 1}
                    <img className={css.trash}
                         alt="Удалить файл"
                         onClick={() => props.delImg(props.flower.id, el)}
                         src={trash}
                    />
                </div>
            })
        }
    }



    const adminModal = () => {
        return <Modal show={props.flower.messageServer} onHide={() => props.setMessageServer("")}>
            <Modal.Header closeButton>
                <Modal.Title>Ответ сервера</Modal.Title>
            </Modal.Header>
            <Modal.Body> {props.flower.messageServer} </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setMessageServer("")}>
                    Хорошо
                </Button>
            </Modal.Footer>
        </Modal>
    }


    return (
        <Container>
            {adminModal()}

            <CarouselComponent image={props.flower.image} css={css}/>

            {isAdmin ?
                <div className={css.uploadFile}>
                    Загруженые файлы:
                    {uploadedFile()}
                </div> : null}

            {isAdmin ?
                <FileUpload setFile={props.addFile} accept="image/*">
                    <Button className="mt-2">Загрузить Изображение</Button>
                </FileUpload> : null}


            < h2 className={css.name}><EditableContainer value={props.flower.nameFlower}
                                                                dispatch={props.updateNameFlower}/></h2>
            <span className={css.charac}> Высота: </span>
            <EditableContainer value={props.flower.height} type={"number"} dispatch={props.updateHeight}/> cм.

            <div>
                <span className={css.charac}> Время цветения: </span>
                {props.flower.bloomTime}
            </div>
            {isAdmin ? <VariantsBloomTimeContainer/> : null}

            <div>
                <span className={css.charac}> Световосприимчивость: </span>
                {props.flower.lightSensitivity}
            </div>
            {isAdmin ? <LightSensitivityContainer/> : null}

            <div>
                <span className={css.charac}> Цена: </span>
                <EditableContainer value={props.flower.price} type={"number"} dispatch={props.updatePrice}/>
            </div>

            {isAdmin || props.role === "wholesale" ?
                <div>
                    <span className={css.charac}> Оптовая цена: </span>
                    <EditableContainer value={props.flower.wholesale} type={"number"}
                                                      dispatch={props.updateWholesale}/>
                </div> : null}

            {isAdmin
                ? <div title={' Если написать отрицательное число то будет отображатся что товара `нет в налии" '}>
                    <span className={css.charac}>В наличии: </span>
                    <EditableContainer value={props.flower.available} type={"number"} dispatch={props.updateAvailable}/>
                </div>
                : null}
            {!isAdmin && props.flower.available < 0 ? <div className={css.off}>Нет в наличии</div> : null}

            {isAdmin || props.flower.alternativeNames
                ? <div> <span className={css.charac}> Альтернативные названия: </span>
                    <EditableContainer value={props.flower.alternativeNames} dispatch={props.updateAlternativeNames}/>
                </div>
                : null}

            {isAdmin || props.flower.description
                ? <div>
                    <span className={css.charac}> Описание: </span>
                    <EditableContainer value={props.flower.description} dispatch={props.updateDescription}/>
                </div>
                : null}

            {isAdmin ? <SendFlowerContainer methodSend={props.updateFlower} title={"Обновить растение"}/> : null}
            {isAdmin ? <SendFlowerContainer methodSend={props.createFlower} title={"Создать новое растение"}/> : null}
            {isAdmin ? <SendFlowerContainer methodSend={props.addImg} title={"Добавить изображений"}/> : null}
            {isAdmin ?
                <Button onClick={props.delFlower} variant="danger" className="m-2">
                    Удалить растение
                </Button> : null}
            {isAdmin ?
                <DropdownButton title="Удалить изображение" variant="danger" className="m-2">
                    {arrImg()}
                </DropdownButton> : null}
            <br/>
            <Button variant="success"
                    className="m-2 "
                    onClick={() => props.addOrder(props.flower.id, props.isAuth)}
            >
                Заказать
            </Button>

        </Container>
    )
}

export default FlowerPage;