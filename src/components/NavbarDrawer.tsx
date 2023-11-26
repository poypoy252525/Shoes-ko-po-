import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, VStack } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";

function NavbarDrawer() {
  return (
    <DrawerComponent
      toggler={
        <Button variant="ghost">
          <HamburgerIcon />
        </Button>
      }
      placement="left"
    >
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
    </DrawerComponent>

    // <>
    //   <Button ref={btnRef} variant="ghost" onClick={onOpen}>
    //     <HamburgerIcon />
    //   </Button>
    //   <Drawer
    //     isOpen={isOpen}
    //     placement="right"
    //     onClose={onClose}
    //     finalFocusRef={btnRef}
    //   >
    //     <DrawerOverlay />
    //     <DrawerContent>
    //       <DrawerCloseButton />
    //       <DrawerHeader />

    //     </DrawerContent>
    //   </Drawer>
    // </>
  );
}

export default NavbarDrawer;
