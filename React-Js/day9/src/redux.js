import { createStore } from "redux";

const addToCart = {
  type: "cart/addItem",
  payload: "điện thoại gì đó maximum",
};
const removeItem = {
  type: "cart/removeItem",
  payload: "điện thoại gì đó maximum",
};
const increQty = {
  type: "cart/increaseQuantity",
  payload: "điện thoại gì đó maximum",
};
let clearCart = {
  type: "cart/clearCartItem",
};

const initinalState = [];

const cartReducer = (initinalState, action) => {
  switch ((action, type)) {
    case "cart/addItem": {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
      break;
    }
    case "cart/removeItem": {
      const newState = state.filter((item) => item != action.payload);
      return newState;
      break;
    }
    case "cart/clearCartItem": {
      return initinalState;
      break;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(cartReducer);
console.log(store);
store.dispath(addToCart);
console.log(store.getState());

const addTvToCart = {
  type: "cart/addItem",
  payload: "TIVI SORRY",
};
store.dispath(addTvToCart);
store.subcribe(() => {
  state = store.getState();
});
