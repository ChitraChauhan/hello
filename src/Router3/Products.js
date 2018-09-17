import React from 'react';
import Product from './Product'
import {Link,Route} from 'react-router-dom';

const Products = ({ match }) => {

    const productsData = [
     {
         id: 1,
         name: 'NIKE Liteforce Blue Sneakers',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
         status: 'Available'
 
     },
 ];
   var linkList = productsData.map( (product,i) => {
     return(
       <li key={i}>
         <Link to={`${match.url}/${product.id}`}>
           {product.name}
         </Link>
       </li>
       )
 
     })
 
   return(
     <div>
         <div>
          <div>
            <h3> Products</h3>
            <ul> {linkList} </ul>
          </div>
         </div>
 
         <Route path={`${match.url}/:productId`}
             render={ (props) => <Product data= {productsData} {...props} />}/>
         <Route exact path={match.url}
             render={() => (
             <div>Please select a product.</div>
             )}
         />
     </div>
   )
 }


// class Products extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Products</h2>
//             </div>
//         )
//     }
// }
export default Products