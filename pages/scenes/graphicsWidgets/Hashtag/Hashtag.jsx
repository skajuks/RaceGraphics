import { Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";


export const Hashtag = ({ value }) => {
    return (
        <div style={{right: "0",
                     top: "30%",
                     position: "absolute",
                     maxHeight: "10%",
                     maxWidth: "20%",
                     marginRight: "30px"}}>
            <h1 style={{color: "white", fontSize: "40px"}}>{`#${value}`}</h1>
        </div>
    );
};

export const HashtagAdmin = (props) => {
    const [value, setValue] = useState();

    const changeHandler = e => {
        setValue(e.target.value);
        props.sock.emit("set_hashtag_value", {value: e.target.value});
    }

    return (
        <Box>
            <TextField
            id="outlined-basic"
            name="hash"
            label="Enter Hashtag"
            variant="outlined"
            onChange={changeHandler}
            style={{marginLeft: '0.8rem', visibility: props.toggle ? "visible" : "hidden"}}
            />
            <h1>{`#${value}`}</h1>
        </Box>

    );
};
