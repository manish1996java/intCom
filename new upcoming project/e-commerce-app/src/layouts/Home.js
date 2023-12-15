import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { connect } from "react-redux";
import Product from "../components/products/product/Product";
import Products from "../components/products/Products";
import {addToCart,removeFromCart} from '../store/reducers/cartReducer';



const productsData = [
  { id: 1, name: "glass", price: 200,quantities:1, inStock: 2 },
  { id: 2, name: "Pen", price: 10,quantities:1, inStock: 2 },
  { id: 3, name: "Pot", price: 20,quantities:1, inStock: 2 },
  { id: 4, name: "bottel", price: 90,quantities:1, inStock: 2 },
  { id: 5, name: "bag", price: 40,quantities:1, inStock: 2 },
  { id: 6, name: "cup", price: 50,quantities:1, inStock: 2 },
  { id: 7, name: "phone", price: 7,quantities:1, inStock: 2 },
  { id: 8, name: "copy", price: 5,quantities:1, inStock: 2 },
  { id: 9, name: "fridge", price: 6,quantities:1, inStock: 2 },
  { id: 10, name: "guitar", price: 8,quantities:1, inStock: 2 },
  { id: 11, name: "gun", price: 9,quantities:1, inStock: 2 },
  { id: 12, name: "shoe", price: 8,quantities:1, inStock: 0 },
  { id: 13, name: "clock", price: 200,quantities:1, inStock: 2 },
  { id: 14, name: "bulb", price: 78,quantities:1, inStock: 2 },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
      filteredList: productsData,
      isHightToLow: true,
      cart: [],
    };
  }

  _sortBasedOnPrice(isHightToLow) {}

  onInputChange(e) {
    console.dir(e.target.value);
    let value = e.target.value;

    let filteredList = this.state.products.filter((item) => {
      console.log(item);
      let itemValues = Object.values(item);
      let retValue = itemValues.some((v) => {
        if (typeof v === "number") {
          return v.toString().includes(value);
        } else {
          return v.includes(value);
        }
      });
      return retValue;
    });



    if (value) {
      this.setState({ filteredList });
    } else {
      this.setState({ filteredList: this.state.products });
    }
  }

  addToCart(item) {

    console.log(this.props);
    console.log("addToCart", item);
    let cartItems = [...this.state.cart, item];
    console.log("cartItems", cartItems);
    this.setState({ cart: cartItems });
    console.log("cart", this.state.cart);
  }

  removeFromCart(id){
    let filteredList = this.state.cart.filter(item=>item.id != id);
    this.setState({cart:filteredList})
  }
  render() {
    return (
      <div>
        <Navigation/>
        <div className="page-container">
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Products/>
            {/* {this.state.filteredList.map((item, index) => {
              return (
                <Product
                  key={index}
                  {...item}
                  onRemoveFromCart={(e)=>this.removeFromCart(item.id)}
                  onAddToCart={(e) => this.addToCart(item)}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    );
  }
}


let mapStateToProps = (state) => {
  let {cartReducer,productReducer} = state;

  return {
    cart: cartReducer,
    product: productReducer,
  };
}

let mapDispatchToProps = () => {
  return {
    addToCart: (item) => addToCart(item),
    removeFromCart: (id) => removeFromCart(id),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);