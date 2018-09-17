import React, { Component } from "react";
const TodoEditor = ({ todo, onChange, todoList }) => {
  return (
    <div>
      <input
        type="text"
        name="title"
        value={todo && todo.title}
        onChange={onChange}
      />
      <button style={{ marginLeft: 5 }} onClick={todoList}>
        Add
      </button>
    </div>
  );
};
const TodoList = ({ todos, onChange }) => {
  return todos.map(todo => {
    return (
      <li key={Math.random()}>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => onChange(todo)}
        />
        {todo.title}
      </li>
    );
  });
};
export class TodoWithState extends Component {
  constructor() {
    super();
    this.state = {
      todo: { title: "", id: Math.random(), status: false },
      todos: []
    };
  }
  addTodo(e) {
    this.setState({
      todo: {
        title: e.target.value,
        id: Math.random(),
        status: false
      }
    });
  }
  todoList() {
    const { todos, todo } = this.state;
    todos.push({ ...todo });
    this.setState({ todos: [...todos], todo: { title: " " } });
  }
  checkStatus = todo => {
    todo.status = !todo.status;
    this.setState({ todo });
  };
  render() {
    return (
      <div>
        <TodoEditor
          todo={this.state.todo}
          onChange={e => this.addTodo(e)}
          todoList={() => this.todoList()}
        />
        <TodoList
          todos={this.state.todos}
          onChange={todo => this.checkStatus(todo)}
        />
      </div>
    );
  }
}
export default TodoWithState;
