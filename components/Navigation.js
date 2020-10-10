import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/login/loginAction'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Navigation(props) {

    const [value, setValue] = React.useState(0);
    const history = useHistory()

    const menuList = [
        "/react-banking-app/dashboard",
        "/react-banking-app/accounts",
        "/react-banking-app/transactions",
        "/react-banking-app/profile",
        "/react-banking-app/logout"
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(menuList[newValue])
    };

    return (
        <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Dashboard" />
            <Tab label="Accounts" />
            <Tab label="Transaction" />
            <Tab label="Profile" />
            <Tab label="Logout" onClick={(e) => {
                e.preventDefault()
                props.logout()
            }} />
        </Tabs>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Navigation);