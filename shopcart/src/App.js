import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayProducts from './displayProducts';
import NavBar from './navbar';
import { products } from './products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    };
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
        <NavBar totalValue={this.state.products.map(prod=>prod.value).reduce((acc, curr, index)=> acc + curr, 0)
        }
        prods={this.state.products} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}
        />

        <DisplayProducts
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        </div>
    );
  } 
}

export default App;