import React from 'react'
import { Route } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import Logout from '../components/Logout';

function Router() {
    const router = <React.Fragment>
        <Route exact path='/react-banking-app/' component={Login}></Route>
        <Route path='/react-banking-app/dashboard' component={Dashboard}></Route>
        <Route path='/react-banking-app/profile' component={Profile}></Route>
        <Route path='/react-banking-app/logout' component={Logout}></Route>
    </React.Fragment>

    return router;
}

export default Router;

