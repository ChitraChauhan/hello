import React, { Component } from 'react';

export class LifeCycle extends Component {
    constructor(props) {
        super();
        this.state = {
            data: 0
        }
        this.setNumber = this.setNumber.bind(this)
    };
    setNumber() {
        this.setState({ data: this.state.data + 1 })
        // this.setState(function(prevState) {
        //     return {
        //       data: prevState.data + 1
        //     };
        //   });
    }
    render() {
        return (
            <div>
                <button onClick={this.setNumber}>Increment</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}
class Content extends Component {
    componentWillMount() {
        console.log("component will mount!")
    }
    componentDidMount() {
        console.log("component did mount!")
    }
    componentWillReceiveProps(newProps) {
        console.log("component will recieve props")
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("component will update")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("component did update")
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }

}

export default LifeCycle;