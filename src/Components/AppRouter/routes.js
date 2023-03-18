import {
    ADMIN_ROUTE,
    ORDER_ROUTE,
    FLOWER_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    All_FLOWER_ROUTE,
    CATALOGS_ROUTE,
    CATALOG_ROUTE,
    ORDER_HISTORY_ROUTE
} from "./const";
import FlowerPageContainer from "../../pages/AllFLowers/FlowerPage/FlowerPageContainer";
import AuthContainer from "../../pages/Auth/AuthContainer";
import OrderContainer from "../../pages/Order/OrderContainer";
import AdminContainer from "../../pages/Admin/AdminContainer";
import ListFlowersContainer from "../ListFlowers/ListFlowersContainer";
import FlowersContainer from "../../pages/AllFLowers/AllFlowersContainer";
import CatalogsContainer from "../../pages/Catalogs (index)/CatalogsContainer";
import OrderHistoryContainer from "../../pages/OrderHistory/OrderHistoryContainer";


export const authRoute = [
    {
        path: ADMIN_ROUTE,
        Component: AdminContainer
    },
    {
        path: ORDER_ROUTE,
        Component: OrderContainer
    },
    {
        path: ORDER_HISTORY_ROUTE,
        Component: OrderHistoryContainer
    },
]

export const publicRote = [
    {
        path: All_FLOWER_ROUTE,
        Component: FlowersContainer
    },
    {
        path: CATALOGS_ROUTE,
        Component: CatalogsContainer
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
    {
        path: CATALOG_ROUTE + "/:idCatalog",
        Component: ListFlowersContainer
    },

]