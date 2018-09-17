import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'mango' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label> */}
                {/* <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label> */}
                <label>
                    pick your favorite flavour:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grape">grape</option>
                        <option value="apple">apple</option>
                        <option value="banana">banana</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;