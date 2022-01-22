import React, { Component } from "react";
import { products } from './products';
import NavBar from './navbar';
//import DisplayProducts from './displayProducts';
import './App.css';
//import ModalExample from './modal-example';
import "bootstrap/dist/css/bootstrap.min.css";
//import { faPlusCircle, faMinusCircle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products
        }
    }

    handleIncrement = (addvalue) => {
        if (addvalue.value < 10) {
            const updatedValue = addvalue.value++;
            this.setState({updatedValue});
        }
    }

    handleDecrement = (subvalue) => {
        if (subvalue.value > 0) {
            const updatedValue = subvalue.value--;
            this.setState({updatedValue});
        }
    }

    render() {
        return(
            <div>
                <NavBar totalValue={this.state.products.map(prod=>prod.value).reduce((acc, curr, index) => 
                    acc + curr, 0)      
                } prods={this.state.products}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                />
                
                {/*<DisplayProducts 
                    products={this.state.products}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                /> */}
            </div>
        );
    }
}

/*
function DisplayProducts(props) {
    
    return (
        <div>
        {props.products.map(product => {
            return (
                <div key={product.id} className="border border-1 p-3">
                    <h4 className="mx-5">{product.desc}</h4>
                    <img src={product.image} width="150" alt={product.desc} className="mx-5" />
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={() => props.onIncrement(product)}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
                    </button>
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={() => props.onDecrement(product)}
                    >
                    <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
                    </button>
                    <span id="qty" className="mx-5 p-3 border border-3">{product.value}</span>
                    quantity
                </div>
            )
        })}
        </div>
    )
} */

/*
function NavBar(props) {
    return (
        <div className="navbar p-5 bg-info">
            <h1>Shop to React</h1>
            <p>
            <FontAwesomeIcon icon={faShoppingCart} className="fas fa-lg mx-3" />
            {props.totalValue} items</p>
        </div>
    )
}*/

export default App;