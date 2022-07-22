import "./App.css";
import { Payment } from "./components/Payment/Payment";
// import HomePages from "./components/Home/HomePage"
import Products from "./components/Product page/Products";
import { Address } from "./components/Address/Address";
function App() {
  return (
    <div className="App">
      {/* <Products/> */}
      {/* <Payment /> */}
      <Address />
    </div>
  );
}

export default App;
