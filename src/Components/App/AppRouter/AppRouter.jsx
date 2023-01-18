import React from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import {authRoute, publicRote} from "./routes"
import {SHOP_ROUTE} from "./const";


const AppRouter = (props) => {
    return (
        <Routes>
            {props.isAuth && authRoute.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRote.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;