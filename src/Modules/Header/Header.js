import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './header.css'

const Header = ({backgroundColor, color}) => {

    return (
        <Box sx={{ flexGrow: 1, backgroundColor, color }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link className='link' to='./dashboard'>Dashboard</Link>
                    </Typography>
                    <Button color="inherit"><Link className='link' to='./score'>Score</Link></Button>
                    <Button color="inherit"><Link className='link' to='./players'>Players</Link></Button>
                    <Button color="inherit"><Link className='link' to='./contact'>Contact</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header