import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { Navigate, useParams } from "react-router-dom";
import featuredPlayers from "../constant-data/featuredPlayer";
import CustomBreadcrumb from "../components/CustomBreadcrumb";

const FeaturedPlayerPage = () => {
  const { id } = useParams();
  if (!id) return <Navigate to="/" />;

  const player = featuredPlayers[id];
  const breadcrumbItem: BreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: "Featured players", link: "/featured-player/" + player },
  ];

  return (
    <Container maxW="container.lg">
      <CustomBreadcrumb items={breadcrumbItem} />
      <Grid templateColumns="repeat(12, 1fr)" gap={10}>
        <GridItem colSpan={5} pt={5}>
          <Image
            rounded="lg"
            objectFit="cover"
            objectPosition="center"
            w="100%"
            minH="80vh"
            src={player.image_url}
          />
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
