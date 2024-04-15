import { useEffect, useState } from "react"
import { Futbolista } from "../types"
import { getFubolistas } from "../service/fubolista"

export const useFutbolista = () => {

    const [futbolistas, setFutbolistas] = useState<Futbolista[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const fetchFutbolistas = async () => {
            try {
                const data = await getFubolistas()
                setFutbolistas(data)
                setLoading(false)
            } catch (error : any) {
                setError(error)
                setLoading(false)
            }
        }
        fetchFutbolistas()
    },[])

    return {futbolistas, loading, error}
}
