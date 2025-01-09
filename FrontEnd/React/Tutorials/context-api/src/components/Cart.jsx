import React from "react";
import { useCart } from "../context/Cart-Context";

const Cart = () => {
  const cart = useCart();
  const total = cart.items.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>

      {cart &&
        cart.items.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.price}
          </li>
        ))}

      <h5>Total Bill : ${total}</h5>
    </div>
  );
};

export default Cart;
