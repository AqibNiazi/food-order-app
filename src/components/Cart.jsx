import React from "react";
import Model from "./UI/Model";
import { use } from "react";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import { currencyFormatter } from "../util/CurrencyFormatter";
import UserProgressContext from "../store/UserProgressContext";
const Cart = () => {
  const cartCtx = use(CartContext);
  const userProgressCtx = use(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const handleHideCart = () => {
    userProgressCtx.hideCart();
  };

  return (
    <Model className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        <Button onClick={handleHideCart}>Go to Checkout</Button>
      </p>
    </Model>
  );
};

export default Cart;
