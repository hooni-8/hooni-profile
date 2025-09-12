import React from "react";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Email, GitHub, LinkedIn} from "@mui/icons-material";

import * as profileData from "@data/ProfileData"
import Logo from '@assets/imgs/Hooni_logo.png';
// import * as profileData from "../data/ProfileData"

export default function Header() {

    return (
        <AppBar position="static" color="transparent" elevation={1} sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt="logo" style={{ height: 40, width: 'auto', cursor: 'pointer' }} />
                </Box>

                <Box sx={{display: 'flex', gap: 2}}>
                    <Button href="#about">About</Button>
                    <Button href="#skills">Skills</Button>
                    <Button href="#experience">Experience</Button>
                    <Button href="#projects">Projects</Button>
                    <Button href="#contact">Contact</Button>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button href={profileData.PROFILE.socials.github}><GitHub /></Button>
                    <Button href={profileData.PROFILE.socials.mail}><Email /></Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}