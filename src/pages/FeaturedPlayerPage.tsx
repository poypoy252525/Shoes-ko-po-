import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import featuredPlayers from "../constant-data/featuredPlayer";

const FeaturedPlayerPage = () => {
  const { id } = useParams();
  if (!id) return "";

  const player = featuredPlayers[id];

  return (
    <Container maxW="container.lg">
      <Grid templateColumns="repeat(12, 1fr)" gap={10}>
        <GridItem colSpan={5} pt={5}>
          <Image rounded="lg" w="100%" minH="80vh" src={player.image_url} />
        </GridItem>
        <GridItem colSpan={7}>
          <Box>
            <Heading my={5}>{player.name}</Heading>
            <Text textAlign="justify" color="teal">
              {player.description}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default FeaturedPlayerPage;
