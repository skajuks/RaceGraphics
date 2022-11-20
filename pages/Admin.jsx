
import { CssBaseline, ThemeProvider } from "@mui/material";
import io from "socket.io-client";
import Topbar from './scenes/bars/Topbar';
import { useState, useContext } from "react";
import { ColorModeContext, useMode } from '../theme'
import { Button } from "@mui/material";
import { Sponsors } from './scenes/graphicsWidgets/Sponsors/Sponsors'

const socket = io.connect("http://localhost:3001"); // Connect to our socket server

const Admin = () => {

    // Sponsors
    const [sponsorValue, setSponsorValue] = useState(false);
    const toggleSponsors = () => {
        socket.emit("toggle_sponsors", {value: sponsorValue});
    };

    const [theme, colorMode] = useMode();

    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="admin">
                    <main className="Content">
                        <Topbar setIsSidebar={setIsSidebar}/>
                    </main>
                    <Button
                        onClick={() => {
                                setSponsorValue((prev) => (prev === false ? true : false));
                                toggleSponsors();
                        }}
                        variant="contained"
                        color={sponsorValue ? "error" : "success"}
                    >
                    Show Sponsors
                    </Button>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Admin;