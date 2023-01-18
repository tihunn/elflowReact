import React from "react"
import {Button, Container, Nav, Navbar} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {ORDER_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../AppRouter/const"
import css from "./NavBar.module.css"



const NavBar = (props) => {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavLink to={SHOP_ROUTE} className={css.elFlower}>elFlower: Сделайте заказ!</NavLink>
                        {props.isAuth ?
                            <Nav className="ml-auto" style={{color: "white"}}>
                                <Button variant={"outline-light"} ><NavLink to={ORDER_ROUTE}>Заказы</NavLink></Button>
                                <Button variant={"outline-light"} onClick={props.logOut}>Выйти</Button>
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