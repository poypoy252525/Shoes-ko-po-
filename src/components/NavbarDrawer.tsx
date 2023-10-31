import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function NavbarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} variant="ghost" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <VStack spacing={6}>
            <Button colorScheme="red" variant="link">
              HOME
            </Button>
            <Button colorScheme="red" variant="link">
              SHOP
            </Button>
            <Button colorScheme="red" variant="link">
              BLOG
            </Button>
            <Button colorScheme="red" variant="link">
              CONTACT
            </Button>
            <VStack w="100%">
              <Button size="sm" whiteSpace="nowrap" colorScheme="red" w="90%">
                Sign up
              </Button>
              <Button size="sm" w="90%">
                Login
              </Button>
            </VStack>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavbarDrawer;
