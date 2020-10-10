import React from 'react'
import { Paper, Typography} from '@material-ui/core'

const getStyle = {
    position: 'fixed', bottom: 0, padding: '1px', width: '100%', textAlign: 'center'
}

function Footer() {
    return (
        <Paper square style={getStyle}>
            <Typography variant="caption">@copyright</Typography>
        </Paper>
    )
}

export default Footer
