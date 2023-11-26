import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Section from "./Section";

const FooterSection = () => {
  return (
    <Section viewMore={false}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Heading>About Us</Heading>
          <Text textAlign="justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            suscipit quod laboriosam ratione unde alias! Laudantium impedit
            corporis adipisci iure!
          </Text>
        </GridItem>
        <GridItem>
          <Heading>Contact Us</Heading>
          <Text textAlign="justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            suscipit quod laboriosam ratione unde alias! Laudantium impedit
            corporis adipisci iure!
          </Text>
        </GridItem>
        <GridItem>
          <Heading>Link</Heading>
          <Text textAlign="justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            suscipit quod laboriosam ratione unde alias! Laudantium impedit
            corporis adipisci iure!
          </Text>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default FooterSection;
