import React from 'react'
import Navigation from './Navigation'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">React Bank</Typography>
                <div style={{ flexGrow: 1 }} />
                <Navigation />
            </Toolbar>
        </AppBar>
    )
}
export default Header;