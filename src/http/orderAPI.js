import {$authHost} from "./axios";


export const orderAPI = {
    async addOrder(id, numberFlower) {
        const {data} = await $authHost.post(`/order/${id}`, {numberFlower})
        return data
    },
    async postOrders(id) {
            const {data} = await $authHost.post(`/order/`)
            return data
    },
    async getOrders() {
        const {data} = await $authHost.get(`/order/`, )
        return data
    },
    async getAllOrders(statusSend) {
        const {data} = await $authHost.get(`/order/all`, {params: {statusSend}})
        return data
    },
    async delOrder(id) {
        const {data} = await $authHost.delete(`/order/${id}`)
        return data
    },
    async delOrders() {
        const {data} = await $authHost.delete(`/order/`)
        return data
    },
    async orderHistory() {
        const {data} = await $authHost.get(`/order/history`)
        return data
    },

}