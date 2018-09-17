import React, { Component } from 'react';


//using push and pop
export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            items: []
        }
    }
    handledataChange(e) {
        this.setState({
            data: e.target.value
        });
    }
    addTodo() {
        const { data, items } = this.state;
        items.push(data)
        console.log(items);
        this.setState({
            data: '',
            items
        });
    }
    removeTodo() {
        const { data, items } = this.state;
        items.pop(data)
        console.log(items);
        this.setState({
            items
        });
    }
    render() {
        const { data, items } = this.state;
        return (
            <div>
                <h1>TodoList:</h1>
                <input type="text" value={data} onChange={(e) => this.handledataChange(e)} />
                <button onClick={() => this.addTodo()}>Add</button>
                <button onClick={() => this.removeTodo()}>Remove</button>
                <ul>{items.map((item, index) =>
                    <li key={index}>{item}</li>)}
                </ul>
            </div>

        );
    }
}
export default TodoList
