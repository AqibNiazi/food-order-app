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
      </CartContextprovider>
    </UserProgressContextProvider>
  );
}

export default App;
