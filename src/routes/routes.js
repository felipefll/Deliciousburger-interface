import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/home'
import Login from '../containers/login'
import Register from '../containers/register'
import PrivateRoute from './private-route'

function Routes () {
  return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoute exact component={Home} path="/" />
            </Switch>
        </Router>
  )
}

export default Routes
