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



    // sortByKey(array, key1, categoryWiseProducts, value) {
    //     return array.sort(function (a, b) { 
    //         let key2 ;
    //         if(value === 'price'){
    //             categoryWiseProducts.forEach((catName) => {
    //                 catName.forEach((product) => {
    //                 key2 = 'price' 
    //             })})
    //         }
    //         else{
    //             categoryWiseProducts.forEach((catName) => {
    //                 catName.forEach((product) => {
    //                 key2 = 'product.name';
    //             })})
    //         }
    //         console.log("key2",key2)
    //         if (a[key1] === b[key1]) {
    //             var x2 = a[key2]; var y2 = b[key2];
    //             console.log("x2",a[key2])
    //             if (x2.includes('$') || y2.includes('$')) {
    //                 x2 = parseFloat(x2.replace('$', ''))
    //                 y2 = parseFloat(y2.replace('$', ''))
    //                 return (x2 < y2 ? -1 : 1);
    //             }
    //             else {
    //                 return ((x2.toLowerCase() < y2.toLowerCase()) ? -1 : 1);
    //             }
    //         }
    //         else {
    //             var x1 = a[key1]; var y1 = b[key1];
    //             return ((x1.toLowerCase() < y1.toLowerCase()) ? -1 : 1);
    //         }
    //     });
    // }
    render() {
        const { products, filterText, inStockOnly, value } = this.props;
        const rows = [];
        let lastCategory;

        //if sorting logic is not applied then this code will render categorywise products
        let catName = [];
        let catProducts = [];
        let categoryTemp = [];
        let categoryWiseProducts = [];
        catName = products.map(product => product.category)
            .filter((value, index, self) => self.indexOf(value) === index)
        for (var i = 0; i < catName.length; i++) {
            catProducts[i] = products.filter(product => (product.category === catName[i]))

            categoryTemp = [
                {
                    name: catName[i],
                    products: catProducts[i]
                }
            ]
            categoryWiseProducts.push(categoryTemp)
        }
        console.log("categoryWiseProducts",categoryWiseProducts)

        //sorting logic
        // let sortedProducts;
        // if (value === 'price') {
        //     sortedProducts = this.sortByKey(categoryWiseProducts, 'name', 'price');
        // }
        // else {
        //     sortedProducts = this.sortByKey(categoryWiseProducts, 'name', 'products.name');
        // }
        //sortedProducts = this.sortByKey(categoryWiseProducts, 'name', categoryWiseProducts, value);
        
        categoryWiseProducts.forEach(
            (categoryName) => {
                console.log("categoryName:::", categoryName)
                console.log("categoryProducts:::", categoryName[0].products)
                categoryName[0].products.forEach(product => {
                    console.log("product", product)
                    if (categoryName[0].name.toLowerCase().search(filterText.toLowerCase()) === -1 && product.name.toLowerCase().search(filterText.toLowerCase()) === -1) {
                        return;
                    }
                    if (inStockOnly && !product.stocked) {
                        return;
                    }
                    if (categoryName[0].name !== lastCategory) {
                        rows.push(
                            <ProductCategoryRow
                                inStockOnly={inStockOnly}
                                products={categoryName[0].products}
                                category={categoryName[0].name}
                                key={categoryName[0].name}
                            />
                        )
                    }
                    rows.push(
                        <ProductRow
                            product={product}
                            key={product.name}
                        />
                    )
                    lastCategory = categoryName[0].name;
                })
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