import React, { useEffect, useState } from "react";
import { Sponsors } from './scenes/graphicsWidgets/Sponsors/Sponsors'
import { Hashtag } from './scenes/graphicsWidgets/Hashtag/Hashtag'
import { Weather } from './scenes/graphicsWidgets/Weather/Weather'
import { MainTimer } from './scenes/graphicsWidgets/MainTimer/MainTimer'


const Graphics = (props) => {
    const [toggleSponsor, setToggleSponsor] = useState(false);
    const [toggleHashtag, setToggleHashtag] = useState(false);
    const [toggleWeather, setToggleWeather] = useState(false);
    const [toggleMainTimer, setToggleMainTimer] = useState(false);

    const [hashtagValue, setHashtagValue] = useState();

    useEffect(() => {
        props.sock.on("receive_sponsors", (data) => {
            setToggleSponsor(data);
        });
        props.sock.on("receive_hashtag", (data) => {
            setToggleHashtag(data);
        });
        props.sock.on("receive_weather", (data) => {
            setToggleWeather(data);
        })
        props.sock.on("get_hashtag_value", (data) => {
            setHashtagValue(data);
        });
        props.sock.on("receive_toggle_maintimer", (data) => {
            setToggleMainTimer(data);
        });
    }, [props.sock]);
    return (
        {
            props.api_data ?
            <div className="mainRenderScreen">
                {toggleSponsor ? <Sponsors /> : null}
                {toggleHashtag ? <Hashtag value={hashtagValue}/> : null}
                {toggleWeather ? <Weather /> : null}
                {toggleMainTimer ? <MainTimer data={props.api_data}/> : null}
            </div>
            :
            null
        }


    );
}

export default Graphics;