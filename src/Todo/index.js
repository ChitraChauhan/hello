import React, { Component } from 'react';
import TodoForm from './form';
import TodoList from './list';

//stateless
const List = (props) => {
    return (
        <h1>{props.data}</h1>
    )
}

//stateful
export class Todo extends Component {
    render() {
        return (
            <div>
                <h1> Todo App </h1>
                <TodoForm />
                <TodoList />
                <List data={[1, 2, 3, 4, 5]} />
            </div>
        )
    }
}

export default Todo;