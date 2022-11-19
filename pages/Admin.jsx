
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/bars/Topbar';
import { useState, useContext } from "react";
import { ColorModeContext, useMode } from '../theme'
import { ToggleButton } from "@mui/material";
import { useStatus, SponsorContext, Sponsors } from './scenes/graphicsWidgets/Sponsors/Sponsors'

const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
  };

const Admin = () => {
    const [theme, colorMode] = useMode();
    const {sponsorValue, setSponsorValue} = useContext(SponsorContext);
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="admin">
                    <main className="Content">
                        <Topbar setIsSidebar={setIsSidebar}/>
                    </main>
                    <ToggleButton
                        onClick={() => setSponsorValue((prev) => (prev === false ? true : false))}
                        //sx={sponsorValue ? "color:'green'" : "color:'red'"}
                        value=""
                    >
                    Show Sponsors
                    </ToggleButton>
                    {sponsorValue ? <Sponsors /> : null}
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Admin;