import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoutes'
import Dashboard from './user/UserDashboard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Home exact path="/" component={Home}/>
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />                
                <PrivateRoute path="/dashboard" exact component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes