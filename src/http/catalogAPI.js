import {$authHost} from "./axios";

export const adminAPI = {
    async addCategory(nameCatalog) {
        const {data} = await $authHost.post("/catalog", {nameCatalog}, )
        return data
    },
}