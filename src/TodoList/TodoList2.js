import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

/**
 * TaskApp
 * state = {
 *   form: {
 *     name: '',
 *     date: '',
 *     details: '',
 *     duration: '',
 *     status: 'pending',
 *   },
 *   list: [],
 * }
 * 
 */

const TodoListComponent = (props) => (
    <ul>{props.items.map((item, index) => {
        return <li onClick={
            () => { props.removeItem(item, index) }
        }
            key={index}>{item}
        </li>
    })}
    </ul>
)

export class TodoList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            items: []
        }
        this.removeItem = this.removeItem.bind(this);
    }
    handleDataChange(e) {
        this.setState({
            data: e.target.value
        });
    }
    addItem() {
        this.setState({
            items: [...this.state.items, this.state.data],
            //items: [  this.state.data ],
            data: ''
        });
    }
    removeItem(item, i) {
        const { items } = this.state;
        items.splice(i, 1);
        console.log("items after splice", items)
        this.setState({
            items
        });
    }
    render() {
        const { data, items } = this.state;
        return (
            <div>
                <h1>List of Items:</h1>
                <input type="text" class="form-control" value={data} onChange={(e) => this.handleDataChange(e)} />
                <Button onClick={() => this.addItem()}>Add</Button>
                {/* on click of Button */}
                {/*<ul>{items.map((item, index) =>
                    <li key={index}>{item}
                        <Button onClick={() => this.removeItem(item, index)}>Remove</Button>
                    </li>)}
                </ul>*/}

                {/* on click of item */}
                {/* 
                ..if there is no binding..
                <TodoListComponent items={items} removeItem={(item, index) => this.removeItem(item, index)} /> */}
                <TodoListComponent items={items} removeItem={() => this.removeItem()} />

            </div>
        );
    }



}
export default TodoList2