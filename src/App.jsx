import Cart from "./components/Cart";
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
        {/* The Cart component will be rendered conditionally based on the user progress context */}
      </CartContextprovider>
    </UserProgressContextProvider>
  );
}

export default App;
