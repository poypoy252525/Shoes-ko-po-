import { Grid, GridItem } from "@chakra-ui/react";
import ShoesCard from "./ShoesCard";
import Section from "./Section";

const PopularShoes = () => {
  return (
    <Section header="Popular">
      <Grid templateColumns="repeat(4, 1fr)" gap={2} overflowX="auto">
        <GridItem>
          <ShoesCard />
        </GridItem>
        <GridItem>
          <ShoesCard />
        </GridItem>
        <GridItem>
          <ShoesCard />
        </GridItem>
        <GridItem>
          <ShoesCard />
        </GridItem>
      </Grid>
    </Section>
  );
};

export default PopularShoes;
