import DrawerComponent from "./DrawerComponent";
import FilterProducts from "./FilterProducts";
import { Button, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const FilterDrawer = () => {
  return (
    <DrawerComponent
      toggler={
        <Button
          aria-label="filter"
          leftIcon={<Icon as={BsFilter} />}
          variant="ghost"
          size={{ base: "sm", lg: "md" }}
        >
          Filter
        </Button>
      }
      placement="left"
    >
      <FilterProducts />
    </DrawerComponent>
  );
};

export default FilterDrawer;
