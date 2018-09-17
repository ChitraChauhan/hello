import React, { Component } from 'react';

export class SinglePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPassed: false
        }
    }

    componentWillMount() {
        // Mark it as 'Pass' if score >= 60
        this.setState({
            isPassed: this.props.score >= 60
        });

        console.log('componentWillMount => ' + this.props.name);
       // alert('componentWillMount => ' + this.props.name);
    }

    componentDidMount() {
        console.log('componentDidMount => ' + this.props.name);
        //alert('componentDidMount => ' + this.props.name);
    }

    componentWillReceiveProps(nextProps) {
        // Calculate state according to props changes
        this.setState({
            isPassed: nextProps.score >= 60
        });

        console.log('componentWillReceiveProps => ' + this.props.name + ': ' + nextProps.score);
        // alert('componentWillReceiveProps => ' + this.props.name + ': ' + nextProps.score);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Don't rerender if score doesn't change,
        if (nextProps.score === this.props.score) {
            console.log('shouldComponentUpdate => ' + this.props.name + '? false');
            alert('shouldComponentUpdate => ' + this.props.name + '? false');
            return false;
        }
        console.log('shouldComponentUpdate => ' + this.props.name + '? true');
        alert('shouldComponentUpdate => ' + this.props.name + '? true');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate => ' + this.props.name);
        // alert('componentWillUpdate => ' + this.props.name);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate => ' + this.props.name);
        // alert('componentDidUpdate => ' + this.props.name);
    }
    componentWillUnmount() {
        console.log('componentDidUpdate => ' + this.props.name);
        // alert('componentDidUpdate => ' + this.props.name);
    }

    render() {
        console.log("render => " + this.props.name);
        return (
            <div>
                <h5><span>Name: </span>{this.props.name}</h5>
                <p><span>Score: </span><em>{this.props.score}</em></p>
                <p><span>Pass: </span><input type="checkbox" defaultChecked={this.state.isPassed} disabled={true} /></p>
            </div>
        )
    }
}
export default SinglePlayer
