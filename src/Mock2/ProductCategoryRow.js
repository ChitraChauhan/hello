import React, { Component } from 'react'

class ProductCategoryRow extends Component {
    render() {
        const { category, products, inStockOnly } = this.props;
        let total = 0;
        if (inStockOnly) {
            products.filter(categoryName => (inStockOnly === categoryName.stocked))
                .forEach(product => {
                    let price = product.price.replace('$', '')
                    total += parseFloat(price);
            })
        }
        else {
            products.forEach(product => {
                let price = product.price.replace('$', '')
                total += parseFloat(price);
            })
        }
        return (
            <tr>
                <th>{category}</th>
                <th>{total}</th>
            </tr>
        )
    }
}

export default ProductCategoryRow