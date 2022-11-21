
// React imports
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Button, Box } from "@mui/material";

// Custom imports
import Topbar from './scenes/bars/Topbar';
import { ColorModeContext, useMode } from '../theme'


// Admin panel
const Admin = ({sock},{api_data}) => {

    // Sponsors
    const [sponsorValue, setSponsorValue] = useState(false);
    const toggleSponsors = () => {
        sock.emit("toggle_sponsors", {value: sponsorValue});
    };
    // Weather
    const [weatherValue, setWeatherValue] = useState(false);
    const toggleWeather = () => {
        sock.emit("toggle_weather", {value: weatherValue});
    };
    //


    // Hooks
    const [theme, colorMode] = useMode();                   // Light/Dark mode hook
    const [isSidebar, setIsSidebar] = useState(true);       // Sidebar toggle hook

    console.log(api_data);
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
                    <Button>Show weather</Button>
                    <div>{
                        api_data
                    }</div>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Admin;