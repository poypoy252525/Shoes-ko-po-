import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Banner from "../assets/pngwing.com.png";
import Section from "./Section";

const HeroBanner = () => (
  <Section viewMore={false}>
    <Box w="100%" pt={16}>
      <Grid
        templateColumns={
          "repeat(" + useBreakpointValue({ base: 1, lg: 2 }) + ", 1fr)"
        }
        gap={4}
        py={10}
      >
        <GridItem w="100%">
          <Flex alignItems="center" h="100%" ps={{ base: 4, lg: 16 }}>
            <Box>
              <Box borderLeft="8px" borderColor="red.600" ps={5}>
                <Heading size={{ base: "4xl" }} color="gray.800">
                  <Highlight query="SHOES" styles={{ color: "red.600" }}>
                    SPORTS SHOES
                  </Highlight>
                </Heading>
                <Text color="red.400" fontWeight="bold" mt={1}>
                  Sapatusin ko kayo ng idol mo
                  {useBreakpointValue({ base: true, lg: false }) && <br />}G ka
                  ba?
                </Text>
              </Box>
              <Flex mt={10} w="100%" justifyContent="flex-start">
                <Button colorScheme="red">GET SHOES</Button>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Image src={Banner} w="100%" />
        </GridItem>
      </Grid>
    </Box>
  </Section>
);

export default HeroBanner;
