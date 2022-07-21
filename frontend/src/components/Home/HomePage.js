import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/Home.jsx";

function HomePages(){
    return(
        <ChakraProvider>
        <Home />
      </ChakraProvider>
    )
}