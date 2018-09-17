import React, { Component } from 'react';
import Button from './Button'

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            incrementValue: 1
        }

    }
    increment(value) {
        // this.setState((prevState) => {
        //     const {counter} = prevState;
        //     return {counter: counter + value}
        // });
        this.setState({
            counter: this.state.counter + value
        });
    }

    render() {
        return (
            <div>
                <Button increment={() => this.increment(this.state.incrementValue)} />
                {/* <Button incrementValue={2} increment={this.increment} />
                <Button incrementValue={100} increment={this.increment} />
                <Button incrementValue={1000} increment={this.increment} />  */}
                <Result counter={this.state.counter} />
            </div>
        )
    }
}

export default Counter