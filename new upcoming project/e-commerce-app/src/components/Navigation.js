import { Badge, Dropdown, Input, Menu, Select } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CartDropDown from "./CartDropDown";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navigation = ({ onInputChange, cart }) => {
 
  console.log('navigation',cart)
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "3rem",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        background: "#ffffff",
      }}
      className="page-container"
    >
      <h2 style={{ flex: "1 1" }}>My Web</h2>
      <div style={{ marginRight: "1rem" }}>
        <Input placeholder="search product" onChange={onInputChange} />
      </div>
      <div
        style={{
          flex: "1 1",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="nav"
      >
        <Link to="/">
          <div>Home</div>
        </Link>
        <div>Products</div>
        <div>Produc</div>
        <Link to="/cart">
            <CartDropDown cartItem={cart}/>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  console.log("mapstateToProps", state);
  const {cartReducer} = state;

  return {
    cart: cartReducer.cart
  }
}

// const mapDispatchToProps = (dispatch) =>{
//   console.log(dispatch);
//   return {

//   }
// }

export default connect(mapStateToProps)(Navigation);


// export default Navigation;