import fetchData from "../fetchAPI"
import React, { useEffect, useState, useContext } from "react";
import { useQuery } from 'react-query'
import { getApiData } from '../fetchAPI'
import { SponsorContext, Sponsors } from './scenes/graphicsWidgets/Sponsors/Sponsors'

const Graphics = () => {
    const [users, setUsers] = useState();
    const {sponsorValue, setSponsorValue} = useContext(SponsorContext);

    useEffect(() => {
        setUsers(getApiData());
    }, []);
    return (
        <div className="">
            {sponsorValue ? <Sponsors /> : null}
        </div>

    );
}

export default Graphics;