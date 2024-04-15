import { Loader } from "../components/ui/Loader"
import { useFutbolista } from "../hooks/useFutbolista"
import DataTable from "react-data-table-component"
import { useNavigate } from "react-router-dom"

export const Jugador = () => {

    const { futbolistas, loading, error } = useFutbolista()
    const navigate = useNavigate()

    const headerFutbolistas = [
        {
            name: 'Nombres',
            selector: (row: { nombres: string }) => row.nombres,
            sortable: true
        },
        {
            name: 'Apellidos',
            selector: (row: { apellidos: string }) => row.apellidos,
            sortable: true
        },
        {
            name: 'Fecha de nacimiento',
            selector: (row: { fechaNacimiento: string }) => row.fechaNacimiento,
            sortable: true
        },
        {
            name: 'Caracteristicas',
            selector: (row: { caracteristicas: string }) => row.caracteristicas,
            sortable: true
        },
        {
            name: 'Posición',
            selector: (row: { posicion : {position : string } }) => row.posicion.position,
            sortable: true
        }
    ]

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    }

    const handleNavigate = (id: number) => {
        navigate(`/jugador/${id}`)
    }

    return (
        <div className="container px-3 lg:px-0">
            <h2 className="py-10 text-4xl text-primary font-bold text-center tracking-tight">Lista de futbolistas</h2>
            {error && <p className="text-white bg-red-500 text-center py-5">{error.message}</p>}
            {loading && <Loader />}
            {futbolistas && !loading && !error && (
            <>
                <DataTable
                    columns={headerFutbolistas}
                    data={futbolistas}
                    fixedHeader
                    pagination
                    onRowClicked={(row) => handleNavigate(row.id)}
                    paginationComponentOptions={paginationComponentOptions}
                    customStyles={{
                        headRow: {
                            style: {
                                background: '#BAE6FD',
                                padding: '10px 0',
                                fontWeight: "bold"
                            }
                        },
                        rows: {
                            style: {
                                '&:hover': {
                                    cursor: "pointer",
                                    backgroundColor: '#F0F9FF',
                                }
                            }
                        }
                    }}
                    paginationPerPage={10}
                />
            </>
            )}

        </div>
    )
}
