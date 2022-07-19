import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/Home.jsx";
function App() {
  return (
    <ChakraProvider>
      <Main />
      <Home />
    </ChakraProvider>
  );
}

export default App;
