'use client'

import React from 'react'
import { Button, Grid, Stack } from '@mui/material';

export default function Home() {
    return (
        <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
            <h1 className="text-blue-500">Test theme</h1>
            <a href='/examples/mui'>back</a>
        </Grid>
    );
}