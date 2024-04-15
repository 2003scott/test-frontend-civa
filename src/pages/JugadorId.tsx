import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getFubolistaById } from "../service/fubolista"
import { InputForm } from "../components/custom/inputForm"
import { ErrorPage } from "./ErrorPage"
import { Futbolista } from "../types"
import { FaArrowLeftLong } from "react-icons/fa6"

export const JugadorId = () => {

    const params = useParams()
    const [futbolista, setFutbolista] = useState<Futbolista | null>(null)

    useEffect(() => {
        getFubolistaById(Number(params.id) || null).then(futbolista => setFutbolista(futbolista))
    }, [params.id])

    return (
        <section className="container px-3 lg:px-0">
            {futbolista !== null ? (
                <div className="py-10">
                    <Link to={"/"} className="flex items-center justify-start gap-5 hover:text-primary max-w-xs">
                        <FaArrowLeftLong />
                        <p>Volver</p>
                    </Link>
                    <h2 className="py-10 text-4xl text-primary font-bold text-center tracking-tight">Detalles del Jugador</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
                        <InputForm
                            title="Nombres"
                            id="nombres"
                            value={futbolista.nombres}
                            disabled
                        />
                        <InputForm
                            title="Apellidos"
                            id="apellidos"
                            value={futbolista.apellidos}
                            disabled
                        />
                        <InputForm
                            title="Nacimiento"
                            id="nacimiento"
                            value={futbolista.fechaNacimiento}
                            disabled
                        />
                        <InputForm
                            title="Caracteristica"
                            id="caracteristica"
                            value={futbolista.caracteristicas}
                            disabled
                        />
                        <InputForm
                            title="IdPosicion"
                            id="IdPosicion"
                            value={futbolista.posicion.codPos}
                            disabled
                        />
                        <InputForm
                            title="Posicion"
                            id="posicion"
                            value={futbolista.posicion.position}
                            disabled
                        />
                    </div>
                </div>
            ) : (
                <ErrorPage mensajeerror="Id No Encontrado" />
            )}
        </section>
    )
}
