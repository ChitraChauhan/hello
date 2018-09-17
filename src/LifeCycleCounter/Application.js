import React, { Component } from 'react'
import Counter from './Counter'

export class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            isCounterHidden: true
        }
    }

    toggleCounter() {
        this.setState({
            isCounterHidden: !this.state.isCounterHidden
        });
    }

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        let style = {
            marginTop: '40px',
            marginBottom: '0px'
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <div className="btn-group btn-group-lg" style={style}>
                            <button type="button" className="btn btn-default" onClick={() => this.toggleCounter()}>{this.state.isCounterHidden ? 'Show' : 'Hide'}</button>
                            <button type="button" className="btn btn-success" onClick={() => this.incrementCounter()}>Increment</button>
                        </div>
                        {this.state.isCounterHidden ? null : <Counter counter={this.state.counter} />}
                    </div>
                </div>
            </div>
        )
    }
}