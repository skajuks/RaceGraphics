
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/bars/Topbar';
import { useState, useContext } from "react";
import { ColorModeContext, useMode } from '../theme'
import { ToggleButton } from "@mui/material";
import { useStatus, SponsorContext } from './scenes/graphicsWidgets/Sponsors/Sponsors'

const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
  };

const Admin = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const sponsorStatus = useContext(SponsorContext);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="admin">
                    <main className="Content">
                        <Topbar setIsSidebar={setIsSidebar}/>
                    </main>
                    <ToggleButton
                        variant="contained"
                        onClick={sponsorStatus.toggleSponsor}
                        color={true ? "primary" : "secondary"}
                    >
                        Show Sponsors
                    </ToggleButton>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Admin;