import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Player extends Component {
    render() {
        const { player } = this.props;
        if (!player) {
            return <div>Sorry, but the player was not found</div>
        }
        return (
            <div>
                <h1>{player.name} (#{player.number})</h1>
                <h2>Position: {player.position}</h2>
                <Link to='/roster'>Back</Link>
            </div>
        )
    }
}
export default Player