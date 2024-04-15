import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorPage, Jugador, JugadorId } from './pages'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<ErrorPage mensajeerror='Cuidado al Navegar.' />} />
                    <Route path="/" element={<Jugador />} />
                    <Route path="/jugador/:id" element={<JugadorId />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
