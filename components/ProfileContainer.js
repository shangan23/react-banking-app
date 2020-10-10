import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    }
});

export default function ProfileContainer(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.k}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.v}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
}
