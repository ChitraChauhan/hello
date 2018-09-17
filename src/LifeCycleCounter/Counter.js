import React, { Component } from 'react';

export class Counter extends Component {

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        if(this.props.counter >= 10) {
           return false
        }
        else return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log("render")
        return (
            <div>
                <h1>Counter: {this.props.counter}</h1>
            </div>
        )
    }

}
export default Counter