import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0e0e10',
            paper: '#18181b',
        },
    },
});

export default function AppTheme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
