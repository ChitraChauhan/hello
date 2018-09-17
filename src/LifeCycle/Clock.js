import React, { Component } from 'react';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        console.log("component did mount!!")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        console.log("component will unmount!!")
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}
//This is commonly called a “top-down” or “unidirectional” data flow. 
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default Clock;