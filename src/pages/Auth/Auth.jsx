import React, {useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../Components/AppRouter/const";
import css from "../../style/auth.module.css"


const Auth = (props) => {
    const oldEmail = props.auth.email
    const [email, setEmail] = useState(props.auth.email)
    const [password, setPassword] = useState("")
    const [name, setName] = useState(props.auth.name)
    const [number, setNumber] = useState("")
    const [isBadEmail, setIsBadEmail] = useState(false)
    const [isBadNumber, setIsBadNumber] = useState(false)
    const [isName, setIsName] = useState(true)
    const navigate = useNavigate()

    const namePassPlaceHolder = () => {
        return props.isAuth ? "Новый пароль?" : "Введите пароль"
    }
    const nameForm = () => {
        return props.isAuth
            ? "Изменения контактных данных"
            : props.isLogin ? "Авторизация" : "Регистрация"
    }
    const nameButtonSend = () => {
        return props.isAuth
            ? "Изменить Данные"
            : props.isLogin ? "Войти" : "Регистрация"
    }
    const onClickButton = () => {
        if (checkRegexpEmail() && checkRegexpNumber() && checkName()) {
            props.isAuth
                ? props.updateUser(oldEmail, email, password, name, number)
                : props.loginOrReg(email, password, props.isLogin, undefined, name, number)
            setNumber("")
        }
    }


    const checkRegexpEmail = () => {
        const regexp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]/
        let result = email.match(regexp)
        result
            ? setIsBadEmail(false)
            : setIsBadEmail(true)
        props.setError("")
        return result
    }
    const checkRegexpNumber = () => {
        const regexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
        let result = number.match(regexp)
        result
            ? setIsBadNumber(false)
            : setIsBadNumber(true)
        return result
    }
    const checkName = () => {
        if (name) {
            setIsName(true)
            return true
        } else {
            setIsName(false)
            return false
        }
    }


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">

                <h2 className="m-auto"> {nameForm()} </h2>

                {props.error &&
                    <div className={css.error}> Ошибка: {props.error} </div>}

                <Form className="d-flex flex-column">
                    <Form.Control
                        className={!isBadEmail ? css.norm : css.error }
                        placeholder={"Введите email"}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onBlur={checkRegexpEmail}
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder={namePassPlaceHolder()}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {!props.isLogin &&
                    <h5 className="mt-3">
                        Введите имя и номер, мы свяжемся когда ваш заказ будет отправлен.
                        А иначе нам не для кого собирать.
                    </h5>}

                    {!props.isLogin &&
                        <Form.Control
                            className={isName ? "mb-3" : css.error_b}
                            placeholder={"Введите как вас зовут"}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            onBlur={checkName}
                        />}

                    {props.auth.number &&
                        <div>Ваш номер: {props.auth.number}</div>}

                    {!props.isLogin &&
                        <Form.Control
                            className={!isBadNumber ? "mb-3" : css.error_b}
                            placeholder={props.auth.number ? "Нет? Введите новый номер" : "Введите номер телефона"}
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            onBlur={checkRegexpNumber}
                        />}

                    <div className="d-flex justify-content-between mt-3">
                        {!props.isAuth
                            ? props.isLogin
                                ? <div> Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь </NavLink></div>
                                : <div> Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите </NavLink></div>
                            : null}
                        <Button
                            variant={"outline-success"}
                            onClick={onClickButton}
                        >
                            {nameButtonSend()}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;