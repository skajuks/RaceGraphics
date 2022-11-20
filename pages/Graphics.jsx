import fetchData from "../fetchAPI"
import io from "socket.io-client";
import React, { useEffect, useState, useContext } from "react";
import { useQuery } from 'react-query'
import { getApiData } from '../fetchAPI'
import { SponsorContext, Sponsors } from './scenes/graphicsWidgets/Sponsors/Sponsors'

const socket = io.connect("http://localhost:3001"); // Connect to our socket server

const Graphics = () => {
    const [users, setUsers] = useState();
    const [toggleSponsor, setToggleSponsor] = useState();

    useEffect(() => {
        socket.on("receive_sponsors", (data) => {
            console.log("Received msg : " + data + toggleSponsor);
            setToggleSponsor(data);
        });
    }, [socket]);
    return (
        <div className="">
            {toggleSponsor ? <Sponsors /> : null}
        </div>

    );
}

export default Graphics;