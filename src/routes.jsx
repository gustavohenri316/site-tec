import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Carreiras } from "./pages/Carreiras";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Sobre } from "./pages/Sobre";

export const Rotas = () => {
    return(
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Produtos" element={<Produtos/>}/>
                <Route path="/Carreiras" element={<Carreiras/>}/>
                <Route path="/Contato" element={<Contato/>}/>
            </Routes>
        </Router>
    )
}