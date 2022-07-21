import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home.jsx";

function HomePages(){
    return(
        <ChakraProvider>
        <Home />
      </ChakraProvider>
    )
}
export default HomePages;