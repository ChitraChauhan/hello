import React, { Component } from 'react';

/**
 * state = { data: { title: '', description: '' }, items: [{ title: '', description: '' }] }
 * 
 */
class Content extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.description}</p>
            </div>
        );
    }
}
const TodoListComponent = (props) => (

    <ul>{props.items.map((item, index) => {
        return <Content key={index} data={item} />
    })}
    </ul>
)

export class TodoList3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: '',
                description: '',
            },
            items: [
                // { title: 'aa', description: 'xx' },
                // { title: 'bb', description: 'yy' },
                // { title: 'cc', description: 'zz' }
            ]
        }
        this.removeItem = this.removeItem.bind(this);
    }
    handleTitle(e) {
        const { data } = this.state;
        data['title'] = e.target.value;
        this.setState({
            data
        });
    }
    handleDescription(e) {
        const { data } = this.state;
        data.description = e.target.value;
        this.setState({
            data
        });
    }
    addItem(e) {
        e.preventDefault();
        const { items, data } = this.state;
        this.setState({
            items: [...items, data],
            data: {
                title: '',
                description: '',
            }
        });
        console.log('items', items);
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
            <form>
                <div className="form-group">
                    <h1>Todo Lists:</h1>
                    <input type="text" placeholder="Title" className="form-control" value={data.title} onChange={(e) => this.handleTitle(e)} />
                    <input type="text" placeholder="description" className="form-control" value={data.description} onChange={(e) => this.handleDescription(e)} />
                    <button className="btn btn-default" onClick={(e) => this.addItem(e)}>Add</button>
                    {/* on click of Button */}
                    <TodoListComponent items={[...items]} removeItem={() => this.removeItem()} />
                </div>
            </form>
        );
    }
}

export default TodoList3