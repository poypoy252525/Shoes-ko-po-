import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
  Heading,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavbarDrawer from "./NavbarDrawer";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ProfilePopover from "./ProfilePopover";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const isLogin = useAuth();
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
        {isMobile ? (
          <Image src={logo} w="45px" h="45px" />
        ) : (
          <Link to="/">
            <HStack>
              <Image src={logo} w="45px" h="45px" />
              <Heading size="md">Shoes Ko Po!</Heading>
            </HStack>
          </Link>
        )}

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
            <InputGroup maxW="65%">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search for..."
                variant="filled"
                rounded="full"
              />
            </InputGroup>
            <HStack>
              <Link to="/addtocart">
                <IconButton
                  variant="ghost"
                  aria-label="cart"
                  icon={<Icon as={AiOutlineShoppingCart} />}
                />
              </Link>
              {!isLogin ? (
                <HStack>
                  <Link to="/signup">
                    <Button size="sm" whiteSpace="nowrap" colorScheme="red">
                      Sign up
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="sm">Login</Button>
                  </Link>
                </HStack>
              ) : (
                <ProfilePopover />
              )}
            </HStack>
          </>
        )}
      </Box>
      <Box my={5} h="50px"></Box>
    </>
  );
};

export default Navbar;
