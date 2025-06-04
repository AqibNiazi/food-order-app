import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextprovider } from "./store/CartContext";
function App() {
  return (
    <CartContextprovider>
      <Header />
      <Meals />
    </CartContextprovider>
  );
}

export default App;
