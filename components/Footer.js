import React from 'react'
import { Paper } from '@material-ui/core'

const getStyle = {
    position: 'fixed', bottom: 0, padding: '1px', width: '100%', textAlign: 'center'
}

function Footer() {
    return (
        <Paper variant="outlined" square style={getStyle}>
            @copyright
        </Paper>
    )
}

export default Footer
