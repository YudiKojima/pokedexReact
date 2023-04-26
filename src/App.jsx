import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {

    const [pokemonData, setPokemonData] = useState();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
                <Route path="/profile" element={<Profile pokemonData={pokemonData} />} />
            </Routes>
        </Router>
    );
}

export default App;
