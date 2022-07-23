import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home.jsx";

function HomePage() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}
export default HomePage;
