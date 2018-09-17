import React, { Component } from 'react';

export class Form1 extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    updateState(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit() {
       
       alert(this.state.name + " you have successfully submitted form");
    }

    render() {
        console.log("state", this.state)
        return (
            <form >
                <input type="text" name="name" required value={this.state.name} onChange={(e) => this.updateState(e)} placeholder="Name" />
                <input type="email" name="email" value={this.state.email} onChange={(e) => this.updateState(e)} placeholder="Email" />
                <input type="password" name="password" required value={this.state.password} onChange={(e) => this.updateState(e)} placeholder="password" />
                <button onClick={(e) => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }

}
export default Form1;