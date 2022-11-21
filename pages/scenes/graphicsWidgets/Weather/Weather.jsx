import { Button, Box, TextField } from "@mui/material";
import { useState } from "react";

// Icons imports
import { WiDaySunny, WiDaySnow, WiCelsius, WiStrongWind, WiWindDeg } from "weather-icons-react";

export const WeatherAdmin = (props) => {
    const [values, setValues] = useState({
        lat: "",
        lng: ""
    });
    const [weather, setWeather] = useState({
        current: "",
        error: "",
        reason: ""
    });

    const weatherIconsMap = {
        0:  <WiDaySunny size={48} color='#00' />,
        71: <WiDaySnow size={48} color='#00' />,
    };

    const getWeatherData = async () => {
        console.log(values);
        try {
            const response = fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${values.lat}&longitude=${values.lng}&current_weather=true`).then(
                    (response) => response.json()
                ).then(
                    (json) => setWeather({
                        current: json.current_weather,
                        error: json.error,
                        reason: json.reason
                    })
                );
                console.log(weather.error)
        } catch (err) {
            setWeather({
                error: err.message
            })
        }
    };
    const changeHandler = e => {
        setValues({...values, [e.target.name]: e.target.value});
    }
    // #0b0026 #420275
    // #0f1524
    return (
        <Box sx={{
        width: '30%',
        margin: '0.8rem',
        padding: '0.8rem',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center'
        }}
        style={{backgroundColor: '#0f1524'}}>
            <Box style={{alignItems: 'center', justifyContent: 'center',display: 'flex',}}>
                <TextField
                    id="outlined-basic"
                    name="lat"
                    label="Latitude"
                    variant="outlined"
                    onChange={changeHandler}
                    style={{marginLeft: '0.8rem', width: '20%'}}
                />
                <TextField
                    id="outlined-basic"
                    name="lng"
                    label="Longitude"
                    variant="outlined"
                    onChange={changeHandler}
                    style={{marginLeft: '0.8rem', width: '20%'}}
                />
                <Button
                    disabled={(values.lat === "") || (values.lng === "") ? true : false}
                    onClick={() => {getWeatherData()}}
                    variant="contained"
                    color={weather.error ? "error" : "success"}
                    style={{marginLeft: '0.8rem', marginTop: '0.6rem', marginRight: '0.8rem'}}
                >
                Search
                </Button>
                <Box>{weather.error ? `Error: ${weather.reason}` : ""}</Box>
            </Box>

            {weather.error ? null :
                <Box sx={{ width: '95%',
                height: '100%',
                margin: '0.8rem',
                padding: '0.8rem',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                clear: 'both'
                }} style={{backgroundColor: '#420275', float: 'right', display: 'inline'}}>
                    <h1>Weather in {props.data.api_data ? props.data.api_data.race_details.track_name : null}</h1>
                    <Box style={{float: 'left', display: 'inline'}}
                        sx={{paddingRight: '0.8rem', paddingLeft: '0.4rem', backgroundColor: '#380263'}}>
                        {weatherIconsMap[weather.current.weathercode]}
                        <h1>{weather.current.temperature}</h1>
                        <WiCelsius size={48}/>
                    </Box>
                    <Box style={{float: 'left', display: 'inline'}}
                    sx={{paddingRight: '0.8rem', paddingLeft: '0.4rem', backgroundColor: '#380263'}}>
                        <WiStrongWind size={48}></WiStrongWind>
                        <h2>{`${weather.current.windspeed} km/h`}</h2>
                    </Box>
                    <Box style={{float: 'left', display: 'inline'}}
                    sx={{paddingRight: '0.8rem', paddingLeft: '0.4rem', backgroundColor: '#380263'}}>
                        <WiWindDeg size={48} />
                        <h2>{`${weather.current.winddirection} °`}</h2>
                    </Box>
                </Box>}
        </Box>
    );
};