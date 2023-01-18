import {$host, $authHost} from "./axios";
import jwtDecode from "jwt-decode";

export const flowerAPI = {
    async createFlower(formData) {
        const {data} = await $authHost.post("/flower/add", formData)
        return data
    },
    async deleteFlower(id) {
        const {data} = await $authHost.delete(`/flower/del/${id}`)
        return jwtDecode(data)
    },
    async updateFlower(formData) {
        const {data} = await $authHost.put(`/flower/update/`, formData)
        return jwtDecode(data.token)
    },
    async getFlowers(page = 1, limit = 12) {
        const {data} = await $host.get("/flower", {params: {page, limit}} )
        window.data = data
        return data
    },
    async getOneFlower(id) {
        const {data} = await $host.get(`/flower/${id}`)
        return data
    },
    async searchFlowers(paramsData, page = 1, limit = 12) {
        const {data} = await $host.get(`/flower/`, {params: {...paramsData, page, limit}})
        return data
    },
}




