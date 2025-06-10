import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { currencyFormatter } from "../util/CurrencyFormatter";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import useHTTP from "../hooks/useHTTP";
import Error from "./Error";
import { use } from "react";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHTTP("http://localhost:3000/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinish = () => {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  };

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Order Submitted Successfully!</p>
        <p>We will get back to you via email within next few mintues</p>
        <p className="model-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">
          {isSending ? (
            <span>Sending Order data...</span>
          ) : (
            <>
              <Button type="button" textOnly onClick={handleClose}>
                Close
              </Button>
              <Button>Submit Order</Button>
            </>
          )}
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
