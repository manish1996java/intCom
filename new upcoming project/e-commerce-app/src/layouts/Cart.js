import React, { Component } from "react";
import Navigation from "../components/Navigation";
import { Button, Card, Input } from "antd";
import { connect } from "react-redux";
import { DeleteOutlined, DownloadOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("carts", this.props.cart);

    return (
      <div>
        <Navigation />
        <div>
          {this.props.cart.map((c) => {
            return (
              <div
                style={{
                    margin: "0.5rem",
                    boxShadow:"2px 2px 8px 1px #bfbfbf",
                    display: "flex",
                    alignItems:"center",
                    justifyContent: "space-between",
                    borderRadius: "7px",
                    padding: "5px"
                }}
              >
                <div style={{display: "flex",height: "60px",}}>
                  <img
                    style={{ aspectRatio: "2/1.5" ,marginRight:"1rem"}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s"
                  />
                  <div className="content">
                    <div className="title">{c.name}</div>
                    <div className="description">dafsldfasfas </div>
                  </div>
                </div>
                <div className="price">Rs {c.price}</div>
                <div className="quantity">
                    <Button type="text" icon={<MinusOutlined />}/>
                    <Input style={{width:"60px"}} type="number" value={c.quantities} readOnly/>
                    <Button type="text" icon={<PlusOutlined />}/>
                </div>
                <div className="action">
                  <Button icon={<DeleteOutlined />} danger />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let cartReducer = state.cartReducer;

  console.log("Cart MapstateToProps", cartReducer);
  return {
    cart: cartReducer.cart,
  };
};

export default connect(mapStateToProps)(Cart);
