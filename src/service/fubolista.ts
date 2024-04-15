import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL

export const getFubolistas = async () => {
    try {
        const response = await axios(`${API_URL}/futbolista`)
        return response.data
    } catch (error : any) {
        throw new Error('Error al obtener los fubolistas')
    }
}

export const getFubolistaById = async (id : number | null) => {
    try {
        const response = await axios(`${API_URL}/futbolista/${id}`)
        return response.data
    } catch (error : any) {
        throw new Error('Error al Id de obtener el fubolista')
    }
}
