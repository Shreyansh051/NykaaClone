import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home.jsx";
import ScrollButton from "./ScrollButton";
function HomePage() {
  return (
    <ChakraProvider>
      <Home />
      <ScrollButton/>
    </ChakraProvider>
  );
}
export default HomePage;
