import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoutes'
import Dashboard from './user/UserDashboard'

import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './admin/AddCategory'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Home exact path="/" component={Home}/>
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />                
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute
                    path="/admin/dashboard"
                    exact component={AdminDashboard}
                />
                <AdminRoute
                    path="/create/category"
                    exact component={AddCategory}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes