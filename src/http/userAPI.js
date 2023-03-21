import {$host, $authHost} from "./axios";
import jwtDecode from "jwt-decode";
import {setError} from "../store/userReducer";

export const userAPI = {
    async loginOrReg(email, password, isLogin, name, number) {
        const url = isLogin ? "/Auth/login" : "/Auth/reg"
        const {data} = await $host.post(url, {email, password, name, number})
        localStorage.setItem("token", data.token)
        return jwtDecode(data.token)
    },
    async checkAuth() {
        const {data} = await $authHost.get("/auth/check")
        localStorage.setItem("token", data.token)
        return jwtDecode(data.token)
    },
    async updateAuth(oldEmail, email, password, name, number) {
        const {data} = await $authHost.put("/auth", {oldEmail, email, password, name, number})
        localStorage.setItem("token", data.token)
        return jwtDecode(data.token)
    },
}