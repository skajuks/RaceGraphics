
// React imports
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Button, Box } from "@mui/material";

// Custom imports
import Topbar from './scenes/bars/Topbar';
import { ColorModeContext, useMode } from '../theme'
import { WeatherAdmin } from './scenes/graphicsWidgets/Weather/Weather'
import { HashtagAdmin } from './scenes/graphicsWidgets/Hashtag/Hashtag'

// Admin panel
const Admin = (props) => {

    // Sponsors
    const [sponsorValue, setSponsorValue] = useState(false);
    const toggleSponsors = () => {
        props.sock.emit("toggle_sponsors", {value: sponsorValue});
    };
    // Weather
    const [weatherValue, setWeatherValue] = useState(false);
    const toggleWeather = () => {
        props.sock.emit("toggle_weather", {value: weatherValue});
    };
    // Hashtag
    const [hashtagValue, setHashtagValue] = useState(false);
    const toggleHashtag = () => {
        props.sock.emit("toggle_hashtag", {value: hashtagValue});
    };

    // Hooks
    const [theme, colorMode] = useMode();                   // Light/Dark mode hook
    const [isSidebar, setIsSidebar] = useState(true);       // Sidebar toggle hook

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="admin">
                    <main className="Content">
                        <Topbar setIsSidebar={setIsSidebar} data={props.api_data}/>
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
                    <Button
                        variant="contained"
                        color={weatherValue ? "success" : "error"}
                        style={{marginLeft: '0.8rem'}}
                        onClick={() => {
                                setWeatherValue((prev) => (prev === false ? true : false));
                                toggleWeather();
                        }}
                    >
                    Show Weather
                    </Button>
                    <WeatherAdmin data={props.api_data} toggle={weatherValue}></WeatherAdmin>
                    <Button
                        variant="contained"
                        color={hashtagValue ? "success" : "error"}
                        style={{marginLeft: '0.8rem'}}
                        onClick={() => {
                                setHashtagValue((prev) => (prev === false ? true : false));
                                toggleHashtag();
                        }}
                    >
                    Show Hashtag
                    </Button>
                    {<HashtagAdmin toggle={hashtagValue}></HashtagAdmin>}

                    <div>{

                    }</div>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Admin;