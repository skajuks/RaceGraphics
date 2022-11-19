import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Graphics from './pages/Graphics';
import Admin from './pages/Admin';
import { SponsorContext } from './pages/scenes/graphicsWidgets/Sponsors/Sponsors'

function App() {
    const [sponsorValue, setSponsorValue] = useState();
    return (
        <SponsorContext.Provider value={{ sponsorValue, setSponsorValue }}>
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/graphics" element={<Graphics />} />
            </Routes>
        </SponsorContext.Provider>
    );
}

export default App;