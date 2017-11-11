import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Product from './Product';
import AddProduct from './AddProduct';

/* Main component */
class Main extends Component {
    constructor() {
        super();
        // Initialize the state in the constructor
        this.state = {
            products: [],
            currentProduct: null
        };

        this.handleAddProduct = this.handleAddProduct.bind(this);
    }

    /**
     * componentDidMount() is lifecycle method
     * That gets called after the components is rendered
     */
    componentDidMount() {
        // Fetch the action controller
        fetch('/api/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                // Fetched the products is stored in the state
                this.setState({ products });
            });
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                /**
                 * this.handleClick() method is invoked onClick
                 */
                <li onClick={ () => this.handleClick(product)} key={product.id}>
                    { product.title }
                </li>
            );
        });
    }

    handleClick(product) {
        //handleClick is used to set the state
        this.setState({currentProduct: product});
    }

    handleAddProduct(product) {
        product.price = Number(product.price);
        /*Fetch API for post request */
        fetch('/api/products/', {
            method: 'POST',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            //update the state of products and currentProduct
            this.setState((prevState) => ({
                products: prevState.products.concat(data),
                currentProduct : data
            }))
        });
    }

    render() {
        return (
        <div>
            <div>
            <h3> All products </h3>
            <ul style={{ width: '200px',  float: 'left', height: '300px', 'overflow-y': 'scroll', 'margin-right': '20px'}}>
                { this.renderProducts() }
            </ul>
            </div>

            <Product product={this.state.currentProduct} />
            <AddProduct onAdd={this.handleAddProduct} />
        </div>
    );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
