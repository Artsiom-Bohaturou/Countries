import ThemeContext from "../context/ThemeContext";
import { createTheme, ThemeProvider } from '@mui/material';
import { useState, useMemo } from 'react';
import App from "./App";

type modeList = 'light' | 'dark';

const ToggleColorMode = () => {
    // @ts-ignore
    const loadMode: modeList = localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light';
    const [mode, setMode] = useState<modeList>(loadMode);
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const currentMode = prevMode === 'light' ? 'dark' : 'light';
                    localStorage.setItem('mode', currentMode);
                    return currentMode;
                });
            },
        }),
        [],
    );

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode,
                ...(mode === 'light' ? {
                    primary: {
                        main: 'hsl(0, 0%, 100%)',
                        dark: 'hsl(0, 0%, 98%)',
                    }
                } : {
                    primary: {
                        main: 'hsl(209, 23%, 22%)',
                        dark: 'hsl(207, 26%, 17%)',
                    }
                })
            },
        }),
        [mode]);
    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ToggleColorMode;