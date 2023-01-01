'use client'

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

type ColorMode = {
    toggleColorMode: Function;
}

type Props = {
    colorMode: ColorMode
}

const DefaultColorMode =  { toggleColorMode: () => {} };

export default function SwitchThemeButton(props:Props) {

    const theme = useTheme();
    const [colorMode, setColorMode] = React.useState<ColorMode>(DefaultColorMode)
    const [ThemeIcon, setThemeIcon] = React.useState<Brightness7Icon | Brightness4Icon>(Brightness4Icon)
    
    React.useEffect(() => {
        setColorMode(props.colorMode)
    }, [props])

    React.useEffect(() => {
        setThemeIcon(theme.palette.mode === 'dark' ? Brightness7Icon : Brightness4Icon)
    }, [theme])

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                <ThemeIcon />
            </IconButton>
        </Box>
    );
}