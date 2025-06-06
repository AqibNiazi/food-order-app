import React from "react";
import { currencyFormatter } from "../util/CurrencyFormatter";
const CartItem = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <button>QTY</button>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
