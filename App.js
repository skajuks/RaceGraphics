import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Graphics from './pages/Graphics';
import Admin from './pages/Admin';
import io from "socket.io-client";

// Connect to our socket server
const socket = io.connect("http://localhost:3001");

function App() {
    const [state, setState] = useState({
    });

    // Update data from API every 0.5 seconds (500 milisec)
    useEffect(() => {
        const intervalCall = setInterval(() => {
            socket.emit("fetch_api");
        }, 1000);
        return () => {
            clearInterval(intervalCall);
        };
    }, []);
    useEffect(() => {
        socket.on("get_api", (data) => {
            setState(data);
        });
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Admin sock={socket} api_data={state}/>} />
            <Route path="/graphics" element={<Graphics sock={socket} />} />
        </Routes>
    );
}

export default App;