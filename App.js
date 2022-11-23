import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Graphics from './pages/Graphics';
import Admin from './pages/Admin';
import io from "socket.io-client";

// Connect to our socket server
const socket = io.connect("http://localhost:3001");
const api_socket = io.connect("http://localhost:3003");
function App() {

    return (
        <Routes>
            <Route path="/" element={<Admin sock={socket}/>} />
            <Route path="/graphics" element={<Graphics sock={socket}/>} />
        </Routes>
    );
}

export default App;