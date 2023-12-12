import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Box mb={20} />
        <Outlet />
      </Container>
      <FooterSection />
      <Navbar />
    </Box>
  );
};

export default App;
