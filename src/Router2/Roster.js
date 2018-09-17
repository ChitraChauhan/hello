import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Player from './Player'

class Roster extends Component {
    render() {
        return (
            <Switch>
                <Route path='/roster/:number' component={Player} />
            </Switch>
        )
    }
}
export default Roster