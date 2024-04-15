import { Link } from "react-router-dom"

interface ErrorPageProps {
    mensajeerror: string
}

export const ErrorPage = ({ mensajeerror } : ErrorPageProps) => {
    return (
        <section className="grid h-screen place-content-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>
                <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">Uh-oh!</p>
                <p className="mt-4 text-gray-500">{mensajeerror}</p>
                <Link to="/" className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring">
                    Vuelve al Inicio
                </Link>
            </div>
        </section>
    )
}
