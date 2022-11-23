
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
    // Main Timer
    const [maintimerValue, setMaintimerValue] = useState(false);
    const toggleMaintimer = () => {
        props.sock.emit("toggle_maintimer", {value: maintimerValue});
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
                        variant="contained"
                        color={sponsorValue ? "success" : "error"}
                        onClick={() => {
                                setSponsorValue(sponsorValue => !sponsorValue);
                                toggleSponsors();
                        }}
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
                    {<HashtagAdmin toggle={hashtagValue} sock={props.sock}></HashtagAdmin>}
                    <Button
                        variant="contained"
                        color={maintimerValue ? "success" : "error"}
                        style={{marginLeft: '0.8rem'}}
                        onClick={() => {
                                setMaintimerValue((prev) => (prev === false ? true : false));
                                toggleMaintimer();
                        }}
                    >
                    Show Main Timer
                    </Button>
                    <div>
                        <iframe src="http://localhost:3000/graphics"></iframe>
                    </div>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Admin;