import GlobalState from "./context/GlobalState";
import About from "./components/About";
import Products from "./components/Products";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import Shop from "./cart/Shop";
import CartProvider from './cart/context/CartProvider'
import Router from "./cart/Router/Router";
function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;
