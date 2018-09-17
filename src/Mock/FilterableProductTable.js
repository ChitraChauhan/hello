import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const products = [
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
];

const categoryWiseProducts = [
    {
        name: 'Sporting Goods',
        products: [
            { price: "$29.99", stocked: false, name: "Basketball" },
            { price: "$9.99", stocked: true, name: "Baseball" },
            { price: "$49.99", stocked: true, name: "Football" },
        ],
    },
    {
        name: 'Electronics',
        products: [
            { price: "$29.99", stocked: false, name: "Basketball" },
            { price: "$9.99", stocked: true, name: "Baseball" },
            { price: "$49.99", stocked: true, name: "Football" },
        ],
    },
]

export class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false, 
            value: ''
        }
    }
    handleFilterTextChange(e) {
        const value = e.target.value;
        this.setState({
            filterText: value
        });
    }
    handleinStockOnlyChange(e) {
        const checked = e.target.checked;
        this.setState({
            inStockOnly: checked
        });
    }
    handleSelectChange(e) {
        this.setState({ value: e.target.value });

    }

    render() {
        const { filterText, inStockOnly, value } = this.state;
        return (
            <div>
                <SearchBar filterText={filterText} 
                inStockOnly={inStockOnly}
                value={value}
                handleSelectChange={(e) => this.handleSelectChange(e)} 
                handleFilterTextChange={(e) => this.handleFilterTextChange(e)} 
                handleinStockOnlyChange={(e) => this.handleinStockOnlyChange(e)} />
                
                <ProductTable products={products} 
                inStockOnly={inStockOnly}
                filterText={filterText}
                value={value} />
            </div>
        )
    }
}

export default FilterableProductTable