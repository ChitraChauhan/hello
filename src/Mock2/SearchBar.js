import React, { Component } from 'react';
import { Form, Col, FormGroup } from 'react-bootstrap';

class SearchBar extends Component {
    render() {
        const { filterText, inStockOnly, value, handleSelectChange, handleFilterTextChange, handleinStockOnlyChange } = this.props;
        return (
            <Form>
                <FormGroup>
                    <Col smOffset={1} sm={10}>
                        <input type="text" value={filterText} placeholder="Search..." onChange={(e) => handleFilterTextChange(e)} />
                    </Col>
                    <Col smOffset={1} sm={10}>
                        <label>
                            <input type="checkbox" checked={inStockOnly} onChange={(e) => handleinStockOnlyChange(e)} />
                            Only show products in stock
                         </label>
                    </Col>
                    <Col smOffset={1} sm={10}>
                    <label>
                    Sort By:
                    <select value={value} onChange={(e) => handleSelectChange(e)}>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </label>
                </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default SearchBar