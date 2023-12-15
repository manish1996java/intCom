import { Button, Col, Divider, Row } from 'antd';
import CartListItem from '../cart-list-item/CartListItem';
import './CartList.css';


const CartList  = ({ carts = [], quantityControllerHandler, removeProdCart, onClearCart }) => {
  console.log('carts',carts);
  return (
    <div className="cart-list" style={{padding:"1rem"}}>
      <div style={{display:"flex"}}>
        <h2>Shopping Carts</h2>
        <div style={{flex:"1 1"}}></div>
        {carts.length > 0 && <Button onClick={onClearCart} type='primary'>Clear Cart</Button>}
      </div>
      
      <Divider />
      {/* <div style={{maxHeight:"300px",overflowY:"scroll",}}> */}
        {carts.map((c,i) => (
          <CartListItem
            cart={c}
            key={i}
            quantityControllerHandler={quantityControllerHandler}
            removeProdCart={removeProdCart}
          />
        ))}
      {/* </div> */}
    </div>
  );
};

export default CartList;