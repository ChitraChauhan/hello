import React, { Component } from 'react';
import SinglePlayer from './SinglePlayer';

export class ScoreBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: 'Tom',
                    score: 55
                },
                {
                    name: 'Jerry',
                    score: 80
                }
            ]
        }
    }

    changeScore(amount) {
        let players = this.state.players;
        let tom = players[0];
        tom.score = tom.score + amount;

        tom.score = (tom.score > 60) ? 60 : tom.score;
        tom.score = (tom.score < 0) ? 0 : tom.score;

        players[0] = tom;
        this.setState({ players: players });
    }
    render() {
        return (
            <div>
                <h4>Score Board</h4>
                <div>
                    <button onClick={(amount) => this.changeScore(5)}>Score of Tom: +5</button>
                    <button onClick={(amount) => this.changeScore(-5)}>Score of Tom: -5</button>
                </div>
                {
                    this.state.players.map((value, index) => {
                        return <SinglePlayer key={index} name={value.name} score={value.score} />
                    })
                }
            </div>
        )
    }
}

export default ScoreBoard