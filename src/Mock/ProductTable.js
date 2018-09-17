import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

//this component shows how the products should be filtered
class ProductTable extends Component {

    // sortByKey(array, key) {
    //     return array.sort(function (a, b) {
    //         var x = a[key]; var y = b[key];
    //         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    //     });
    // }

    sortByKey(array, key1, key2) {
        return array.sort(function (a, b) {
            if (a[key1] === b[key1]) {
                var x2 = a[key2]; var y2 = b[key2];
                if (x2.includes('$') || y2.includes('$')) {
                    x2 = parseFloat(x2.replace('$', ''))
                    y2 = parseFloat(y2.replace('$', ''))
                    return (x2 < y2 ? -1 : 1);
                }
                else {
                    return ((x2.toLowerCase() < y2.toLowerCase()) ? -1 : 1);
                }
            }
            else {
                var x1 = a[key1]; var y1 = b[key1];
                return ((x1.toLowerCase() < y1.toLowerCase()) ? -1 : 1);
            }
        });
    }
    render() {
        const { products, filterText, inStockOnly, value } = this.props;
        const rows = [];
        let lastCategory = null;
        let sortedProducts = products;
        if (value === 'price') {
            sortedProducts = this.sortByKey(products, 'category', 'price');
        }
        else {
            sortedProducts = this.sortByKey(products, 'category', 'name');
        }
        sortedProducts.forEach(
            (product) => {

                if (product.name.toLowerCase().search(filterText.toLowerCase()) === -1 && product.category.toLowerCase().search(filterText.toLowerCase()) === -1) {
                    return;
                }
                if (inStockOnly && !product.stocked) {
                    return;
                }
                if (product.category !== lastCategory) {
                    rows.push(
                        <ProductCategoryRow
                            inStockOnly={inStockOnly}
                            products={products}
                            category={product.category}
                            key={product.category}
                        />
                    )
                }
                rows.push(
                    <ProductRow
                        product={product}
                        key={product.name}
                    />
                )
                lastCategory = product.category;
            })
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ProductTable 