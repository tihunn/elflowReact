import React from "react"
import {Button, Container, Nav, Navbar} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {
    ORDER_ROUTE,
    LOGIN_ROUTE,
    ADMIN_ROUTE,
    CATALOGS_ROUTE,
    All_FLOWER_ROUTE,
    ADMIN_ORDER_ROUTE
} from "../AppRouter/const"
import css from "../../style/admin.module.css"


const NavBar = ({role, isAuth, logOut}) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to={CATALOGS_ROUTE} className={css.link_logo}>elFlower: Каталоги!</NavLink>
                    <NavLink to={All_FLOWER_ROUTE} className={css.link_logo}>Все цветы</NavLink>

                    {role === "admin" ?
                        <NavLink to={ADMIN_ROUTE} className="ml-auto" style={{color: "white"}}>
                            <Button variant={"outline-light"}>Админ панель</Button>
                        </NavLink> : null}

                    {isAuth ?
                        <Nav className="ml-auto" style={{color: "white"}}>
                            {role === "admin" ?
                                <Button variant={"outline-light"}>
                                    <NavLink to={ADMIN_ORDER_ROUTE}> Сделанные заказы </NavLink>
                                </Button> : null}
                            <Button variant={"outline-light"}><NavLink to={ORDER_ROUTE}> Заказы </NavLink></Button>
                            <Button variant={"outline-light"} onClick={logOut}>Выйти</Button>
                        </Nav>
                        :
                        <NavLink to={LOGIN_ROUTE} className="ml-auto" style={{color: "white"}}>
                            <Button variant={"outline-light"}>Авторизация</Button>
                        </NavLink>}
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;