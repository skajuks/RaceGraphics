import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"

const Topbar = (props) => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex">
                <h1 style={{marginRight: '0.5rem'}}>API status : </h1>
                {props.data.api_data ? <h2 style={{color: "green"}}>Active</h2> : <h2 style={{color: "red"}}>Inactive</h2>}
            </Box>

            {/* ICONS */}
            <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode} size="large">
                {theme.palette.mode === "dark" ? (
                <LightModeOutlinedIcon />
                ) : (
                <DarkModeOutlinedIcon />
                )}
            </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;