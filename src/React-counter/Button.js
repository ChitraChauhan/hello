import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        this.props.increment(this.props.incrementValue);
    }
    render() {
        return (
            <button
                onClick={this.handleClick}>Counter
            </button>
        )
    }
}
export default Button