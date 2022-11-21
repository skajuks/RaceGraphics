import React, { useEffect, useState } from "react";
import { Sponsors } from './scenes/graphicsWidgets/Sponsors/Sponsors'


const Graphics = ({sock},{api_data}) => {
    const [users, setUsers] = useState();
    const [toggleSponsor, setToggleSponsor] = useState();

    useEffect(() => {
        sock.on("receive_sponsors", (data) => {
            setToggleSponsor(data);
        });
    }, [sock]);
    return (
        <div className="">
            {toggleSponsor ? <Sponsors /> : null}
        </div>

    );
}

export default Graphics;