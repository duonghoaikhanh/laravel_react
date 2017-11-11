import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);

        /* Initialize the state */
        this.state = {
            newProduct: {
                title: '',
                description: '',
                price: 0,
                availability: 0
            }
        };

        // Boilerplate code for blinding methods with `this`
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /**
     * This methods handle input and store in the state
     */
    handleInput(key, e) {
        /* Update state */
        var state = Object.assign({}, this.state.newProduct);
        state[key] = e.target.value;
        this.setState({newProduct: state});
    }

    /**
     * This methods handle submit press button
     */
    handleSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.newProduct);
    }

    render() {
        const divStyle = {
            width: '900px',
            float: 'left'
        }

        return(
            <div style={divStyle}>
            <h2> Add new product </h2>
            <div>
            <form onSubmit={this.handleSubmit}>
                <label> Title :
                    <input type="text" onChange={(e) => this.handleInput('title', e)} />
                </label>
                <label> Description :
                    <input type="text" onChange={(e) => this.handleInput('description', e)} />
                </label>
                <label> Price :
                <input type="text" onChange={(e) => this.handleInput('price', e)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
            </div>
        )
    }
}

export default AddProduct;
