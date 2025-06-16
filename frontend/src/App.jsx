import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextprovider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextprovider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextprovider>
    </UserProgressContextProvider>
  );
}

export default App;
