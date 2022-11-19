import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"

const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <h1>API status : {}</h1>
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