// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

function App() {
  return ( 
    <ChakraProvider value={defaultSystem}>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
