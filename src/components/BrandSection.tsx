import { Grid, GridItem } from "@chakra-ui/react";
import BrandCard from "./BrandCard";
import Section from "./Section";
import { Link } from "react-router-dom";
import useBrands from "../hooks/useBrands";
import useStore from "../store";
import { SiJordan, SiNike, SiAdidas } from "react-icons/si";
import { IconType } from "react-icons";

const brandIconMapping: Record<string, IconType> = {
  Jordan: SiJordan,
  Nike: SiNike,
  Adidas: SiAdidas,
};

const BrandSection = () => {
  const addBrand = useStore((s) => s.addBrand);
  const clearBrands = useStore((s) => s.clearBrands);
  const { data: brands } = useBrands();
  return (
    <Section header="Brands">
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {brands?.map((brand, index) => (
          <GridItem
            key={index}
            onClick={() => {
              clearBrands();
              addBrand(brand.name);
            }}
          >
            <Link to="/products">
              <BrandCard brand={brand} logo={brandIconMapping[brand.name]} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default BrandSection;
