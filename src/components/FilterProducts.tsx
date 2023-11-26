import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import useStore from "../store";
import useBrands from "../hooks/useBrands";

const FilterProducts = () => {
  const { data: brands } = useBrands();

  const {
    genders,
    addGender,
    removeGender,
    brands: brandStore,
    addBrand,
    removeBrand,
  } = useStore();

  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) addGender(e.target.value);
    else removeGender(e.target.value);
  };

  const handleChangeBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) addBrand(e.target.value);
    else removeBrand(e.target.value);
  };

  return (
    <Box maxH="80vh" overflowY="auto" p={2}>
      <HStack mb={2} justify="space-between">
        <Heading size="md" mb={2}>
          Filters
        </Heading>
      </HStack>
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Gender
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="flex-start">
              <Checkbox
                value="Men"
                onChange={handleChangeGender}
                isChecked={genders.includes("Men")}
              >
                Men
              </Checkbox>
              <Checkbox
                value="Women"
                onChange={handleChangeGender}
                isChecked={genders.includes("Women")}
              >
                Women
              </Checkbox>
              <Checkbox
                value="Unisex"
                onChange={handleChangeGender}
                isChecked={genders.includes("Unisex")}
              >
                Unisex
              </Checkbox>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="flex-start">
              {brands?.map((brand) => (
                <Checkbox
                  key={brand.id}
                  value={brand.name}
                  onChange={handleChangeBrand}
                  isChecked={brandStore.includes(brand.name)}
                >
                  {brand.name}
                </Checkbox>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FilterProducts;
