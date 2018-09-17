import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Home from './Home'
import Category from './Category'
import Products from './Products'

export class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li><Link to="/products">Products</Link></li>

                    </ul>
                </nav>
                <Route exact path="/" component={Home} />
                <Route path="/category" component={Category} />
                <Route path="/products" component={Products} />

            </div>
        )
    }
}
export default Component