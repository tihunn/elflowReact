import Admin from "../NavBar/Admin/Admin";
import {ADMIN_ROUTE, ORDER_ROUTE, FLOWER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./const";
import FlowerPageContainer from "../FlowerPage/FlowerPageContainer";
import AuthContainer from "../NavBar/Auth/AuthContainer";
import Shop from "../Shop/Shop";
import OrderContainer from "../Basket/OrderContainer";

export const authRoute = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ORDER_ROUTE,
        Component: OrderContainer
    },
]

export const publicRote = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthContainer
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthContainer
    },
    {
        path: FLOWER_ROUTE + "/:id",
        Component: FlowerPageContainer
    },
]