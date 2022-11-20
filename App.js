import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Graphics from './pages/Graphics';
import Admin from './pages/Admin';
import { SponsorContext } from './pages/scenes/graphicsWidgets/Sponsors/Sponsors'

function App() {
    return (
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/graphics" element={<Graphics />} />
            </Routes>
    );
}

export default App;