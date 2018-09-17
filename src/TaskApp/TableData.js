import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TableData extends Component {
    render() {
        const { list, keyword } = this.props;
        return (
            <div>
                <h3>List of Tasks:</h3>
                <form>
                    <input type="text" placeholder="Search Here..." value={keyword} onChange={(e) => this.props.onSearch(e)} />
                </form>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Date</td>
                            <td>Description</td>
                            <td>Duration</td>
                            <td>status</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((data, index) =>
                            <TableRow key={index} record={data} onEdit={() => this.props.onEdit(data)} onDelete={() => this.props.onDelete(index)} />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
class TableRow extends Component {
    render() {
        const { record } = this.props;
        return (
            <tr>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.date}</td>
                <td>{record.description}</td>
                <td>{record.duration}</td>
                <td>{record.status}</td>
                <td>
                    <Button type="submit" bsStyle="primary" onClick={() => this.props.onEdit(record)}>Edit</Button>
                </td>
                <td>
                    <Button type="submit" bsStyle="primary" onClick={() => this.props.onDelete(record.id)}>Delete</Button>
                </td>
            </tr>
        );
    }
}
export default TableData