import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/roster' component={Roster} />
                <Route path='/schedule' component={Schedule} />
            </Switch>
        )
    }

}
export default Main