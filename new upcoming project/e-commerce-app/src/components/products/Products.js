import React, { Component } from 'react'
import { connect } from 'react-redux';
import Product from './product/Product';
import { addToCart, removeFromCart } from '../../store/reducers/cartReducer';


class Products extends Component {

  constructor(props) {
      super(props);
      console.log("Products",props);
  }

  render() {
    return (
      this.props.filteredList.map((item, index) => {
        return (
          <Product
            key={index}
            {...item}
            onRemoveFromCart={(e)=>this.removeFromCart(item.id)}
            onAddToCart={(e) => this.props.addToCart(item)}
          />
        );
      })
    )
  }
}

let mapStateToProps = (state)=>{
  let {productReducer} = state;
  console.log('productReducer',productReducer);
  return {
     filteredList: productReducer.filteredList,
     products: productReducer.products,
  }
}

let mapDispatchToProps = {
    addToCart,
    removeFromCart,
}


export default connect(mapStateToProps,mapDispatchToProps)(Products);
