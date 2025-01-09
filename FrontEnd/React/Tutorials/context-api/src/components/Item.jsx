import React from "react";

import { useCart } from "../context/Cart-Context";

const Item = ({ name, price }) => {
  const cart = useCart();

  //   console.log(cart);
  return (
    <div className="item-card">
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button
        onClick={() => {
          cart.setItems([...cart.items, { name, price }]);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
