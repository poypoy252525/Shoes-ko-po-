import { Grid, GridItem } from "@chakra-ui/react";
import { SiJordan, SiNike, SiAdidas } from "react-icons/si";
import BrandCard from "./BrandCard";
import Section from "./Section";

const BrandSection = () => {
  return (
    <Section header="Brands">
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem>
          <BrandCard logo={SiJordan} />
        </GridItem>
        <GridItem>
          <BrandCard logo={SiNike} />
        </GridItem>
        <GridItem>
          <BrandCard logo={SiAdidas} />
        </GridItem>
      </Grid>
    </Section>
  );
};

export default BrandSection;
