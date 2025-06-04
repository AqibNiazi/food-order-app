import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

//Function that will be used to manage the cart state
const CartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    //first we will check if the item already exists in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //we create new array to updated items in the array
    const updatedItems = [...state.items];

    //In if conditions we will check if the item already exists in the cart.
    if (existingCartItemIndex > -1) {
      const existingCartItem = state.items[existingCartItemIndex];
      //if it exists we will update the quantity of the item
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    //first we will check if the item already exists in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //Next we will find the item based on the index
    const existingCartItem = state.items[existingCartItemIndex];
    //create new array to updated items in the array
    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      //if the quantity is 1 we will remove the item from the cart
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      //if the quantity is more than 1 we will decrement the quantity of the item
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
};

export const CartContextprovider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
