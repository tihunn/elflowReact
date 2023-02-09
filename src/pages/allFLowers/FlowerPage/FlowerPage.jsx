import React from "react";
import {Button, Container, Form, Image} from "react-bootstrap";
import css from "../../../style/FlowerPage.module.css"
import Editable from "../../../Components/FlowerPage/Editable";
import UpdateFlowerContainer from "../../../Components/FlowerPage/UpdateFlowerContainer";
import LightSensitivityContainer from "../../../Components/LightSensitivity/LightSensitivityContainer";
import VariantsBloomTimeContainer from "../../../Components/VariantsBloomTime/VariantsBloomTimeContainer";


const FlowerPage = (props) => {
    let isAdmin
    props.role === "admin" ? isAdmin = true : isAdmin = false

    return (
        <Container>
            {props.flower.image[0] ?
            <Image className={css.width} src={ process.env.REACT_APP_API_URL + props.flower.image[0] }/>
            : null}

            {isAdmin ? <Form.Control type="file" onChange={(e) => props.setFile(e.target.files[0])}/> : null}


            < h2 style={{fontSize: "4vmax"}} > <Editable value={props.flower.nameFlower} dispatch={props.updateNameFlower}/> </h2>

            Высота: <Editable value={props.flower.height} type={"number"} dispatch={props.updateHeight}/> cм.

            <div>Время цветения: {props.flower.bloomTime}</div>
            {isAdmin ? <VariantsBloomTimeContainer/> : null}

            <div>Световосприимчивость: {props.flower.lightSensitivity}</div>
            {isAdmin ? <LightSensitivityContainer/> : null}

            <div> Цена: <Editable value={props.flower.price} type={"number"} dispatch={props.updatePrice}/> </div>

            {isAdmin || props.role === "wholesale" ?
                <div>Оптовая цена: <Editable value={props.flower.wholesale} type={"number"} dispatch={props.updateWholesale}/></div> :
                null}

            В наличии: <Editable value={props.flower.available} type={"number"} dispatch={props.updateAvailable}/>

            {isAdmin || props.flower.description ? <div>Описание: <Editable value={props.flower.description} dispatch={props.updateDescription}/></div> : null}

            {isAdmin ? <UpdateFlowerContainer/> : null}
            {isAdmin ? <Button onClick={props.delFlower} variant="danger" className="mx-5 mt-2">Удалить растение</Button> : null}

            <Button variant="success" className="m-2 "
                    onClick={() => props.addOrder(props.flower.id)}>Заказать</Button>

        </Container>
    )
}

export default FlowerPage;