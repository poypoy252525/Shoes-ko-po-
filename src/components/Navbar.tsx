import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { SearchIcon } from "@chakra-ui/icons";
import NavbarDrawer from "./NavbarDrawer";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <>
      <Box
        w={useBreakpointValue({ base: "100%", lg: "90%" })}
        h="50px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={5}
        boxShadow="md"
        rounded="md"
        position="fixed"
        top={useBreakpointValue({ base: 0, lg: 5 })}
        left="50%"
        transform="translate(-50%)"
        bg="white"
      >
        <Image src={logo} w="45px" h="45px" />
        {isMobile ? (
          <>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search for..."
                variant="filled"
                rounded="full"
              />
            </InputGroup>
            <NavbarDrawer />
          </>
        ) : (
          <>
            <HStack spacing={6}>
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
            </HStack>
            <HStack>
              <Button size="sm" whiteSpace="nowrap" colorScheme="red">
                Sign up
              </Button>
              <Button size="sm">Login</Button>
            </HStack>
          </>
        )}
      </Box>
      <Box my={5} h="50px"></Box>
    </>
  );
};

export default Navbar;
