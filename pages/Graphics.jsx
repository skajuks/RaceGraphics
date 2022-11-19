import fetchData from "../fetchAPI"
import React, { useEffect, useState, useContext } from "react";
import { useQuery } from 'react-query'
import { getApiData } from '../fetchAPI'
import { Sponsors} from './scenes/graphicsWidgets/Sponsors/Sponsors'

const Graphics = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        setUsers(getApiData());
    }, []);
    return (
        <div className="">
            {users ? <Sponsors /> : null}
        </div>

    );
}

export default Graphics;