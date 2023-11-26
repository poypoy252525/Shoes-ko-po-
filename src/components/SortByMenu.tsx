import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";

const SortByMenu = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Best Match");
  return (
    <Menu>
      <MenuButton
        size={{ base: "sm", lg: "md" }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Sort by: {selectedItem}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSelectedItem("Best Match")}>
          Best Match
        </MenuItem>
        <MenuItem onClick={() => setSelectedItem("Price low to high")}>
          Price low to high
        </MenuItem>
        <MenuItem onClick={() => setSelectedItem("Price high to low")}>
          Price high to low
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortByMenu;
