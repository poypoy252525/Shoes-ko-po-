import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import PopularShoes from "./components/PopularShoes";
import BrandBanner from "./components/BrandBanner";
import PlayersBanner from "./components/PlayersBanner";

const App = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <HeroBanner />
        <PlayersBanner />
        <BrandBanner />
        <PopularShoes />
      </Container>
      <Navbar />
    </Box>
  );
};

export default App;
