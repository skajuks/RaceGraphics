import { Button, Box, TextField } from "@mui/material";
import { useState } from "react";

export const Hashtag = () => {

    return (
            <h1>Hashtag placeholder</h1>
    );
};

export const HashtagAdmin = (props) => {
    const [value, setValue] = useState();

    const changeHandler = e => {
        setValue(e.target.value);
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
