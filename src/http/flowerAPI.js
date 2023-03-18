import {$host, $authHost} from "./axios";
import jwtDecode from "jwt-decode";

export const flowerAPI = {
    async createFlower(formData) {
        const {data} = await $authHost.post("/flower/", formData)
        return data
    },
    async deleteFlower(id) {
        const {data} = await $authHost.delete(`/flower/${id}`)
        return data
    },
    async updateFlower(formData) {
         await $authHost.put(`/flower/`, formData)

    },
    async getOneFlower(id) {
        const {data} = await $host.get(`/flower/${id}`)
        return data
    },
    async searchFlowers(page = 1, limit = 12, paramsData) {
        const {data} = await $host.get(`/flower/`, {params: {page, limit, ...paramsData}})
        return data
    },
    async addImg(formData) {
        const {data} = await $authHost.post(`/flower/img`, formData)
        return data
    },
    async delImg(nameImage) {
        const {data} = await $authHost.delete(`/flower/img`, {params: {nameImage}})
        return data
    },
}




