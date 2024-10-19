import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Cart from "./pages/cart"
import Notebooks from "./pages/products/notebooks"
import SmartHome from "./pages/products/smart-home"
import SmartphonesTablets from "./pages/products/smartphones-tablets"
import PerifericosGame from "./pages/products/games-perifericos"
import EqupamentosAudio from "./pages/products/equipamento-audio"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/notebooks" element={<Notebooks />}/>
                <Route path="/equipamento-audio" element={<SmartHome />}/>
                <Route path="/perifericos-game" element={<SmartphonesTablets />}/>
                <Route path="/smart-home" element={<PerifericosGame />}/>
                <Route path="/smartphones-tablets" element={<EqupamentosAudio />}/>
            </Routes>
        </Router>
    )
}

export default App