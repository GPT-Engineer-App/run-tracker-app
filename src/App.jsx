import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, useColorMode, Button } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Flex direction="column" minH="100vh">
        <Box p={4} bg={colorMode === "light" ? "gray.100" : "gray.900"}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
        <Box flex="1">
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;