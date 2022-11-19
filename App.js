import { Routes, Route, UNSAFE_RouteContext } from "react-router-dom";
import Graphics from './pages/Graphics';
import Admin from './pages/Admin';
import { SponsorContext } from './pages/scenes/graphicsWidgets/Sponsors/Sponsors'

function App() {
    return (
        <Routes>
            <SponsorContext.Provider>
                <Route path="/" element={<Admin />} />
                <Route path="/graphics" element={<Graphics />} />
            </SponsorContext.Provider>
        </Routes>
    );
}

export default App;