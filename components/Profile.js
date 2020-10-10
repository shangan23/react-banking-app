import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { profileFailure, profileFetch, profileSuccess } from '../redux/profile/profileActions';
import ProfileContainer from './ProfileContainer'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

function Profile(props) {
    const classes = useStyles();
    const { user, isLoggedIn, profile, profileLoading } = props

    if (!isLoggedIn)
        return <Redirect to="/react-banking-app/" />

    useEffect(() => {
        props.profileFetch()
        fetch(`https://my-json-server.typicode.com/shangan23/banking-api/users?user_name=${user.user_name}`)
            .then(res => res.json())
            .then(data => props.profileSuccess(data[0]))
            .catch(error => props.profileFailure(error))
    }, [])

    if (!profileLoading) {
        return <Card className={classes.root}>
            {Object.keys(profile).map((item, index) => {
            return <ProfileContainer key={index} v={profile[item]} k={item} />})}
        </Card>
    } else {
        return <div>loading...</div>
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.isLoggedIn,
        user: state.login.user,
        profile: state.profile.data,
        profileLoading: state.profile.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        profileFetch: () => dispatch(profileFetch),
        profileSuccess: data => dispatch(profileSuccess(data)),
        profileFailure: error => dispatch(profileFailure(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);