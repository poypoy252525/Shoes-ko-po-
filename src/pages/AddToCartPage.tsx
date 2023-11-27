import {
  Box,
  Grid,
  GridItem,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Container,
  Divider,
  Card,
  CardBody,
  Flex,
  Text,
  VStack,
  HStack,
  Button,
  Center,
  Spinner,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";
import useFetchAddToCart from "../hooks/useFetchAddToCart";
import RemoveAddToCartButton from "../components/RemoveAddToCartButton";
import CustomBreadcrumb from "../components/CustomBreadcrumb";

const AddToCartPage = () => {
  const user = useAuth();
  if (!user) return <Navigate to="/login" />;
  const { data: addToCarts, isLoading } = useFetchAddToCart(user?.customer_id);
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Products", link: "/products" },
    { label: "Carts", link: "/addtocart" },
  ];
  return (
    <Container maxW="container.lg" pt={10}>
      <CustomBreadcrumb items={breadcrumbItems} />
      <Grid templateColumns="repeat(12, 1fr)" gap={12}>
        <GridItem colSpan={8}>
          <Flex w="100%" justify="space-between" alignItems="center" mb={4}>
            <Heading size="lg">Shopping cart</Heading>
            <Text color="gray.400">{addToCarts?.length} Item(s)</Text>
          </Flex>
          <Divider />
          {!isLoading ? (
            addToCarts?.length ? (
              <TableContainer w="100%">
                <Table variant="simple" w="100%" color="gray.500">
                  <TableCaption>List of orders</TableCaption>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th>Name</Th>
                      <Th isNumeric>Quantity</Th>
                      <Th isNumeric>Price</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {addToCarts?.length &&
                      addToCarts?.map((addtoCart, index) => (
                        <Tr key={index}>
                          <Td maxW="70px">
                            <Image
                              src={
                                "http://localhost/shoeskopo/image.php?url=" +
                                addtoCart?.image_url
                              }
                              maxW="100%"
                            />
                          </Td>
                          <Td>{addtoCart.name}</Td>
                          <Td isNumeric>{addtoCart.quantity}</Td>
                          <Td isNumeric>
                            ₱
                            {(
                              parseInt(addtoCart.price) * addtoCart.quantity
                            ).toLocaleString()}
                          </Td>
                          <Td>
                            <RemoveAddToCartButton id={addtoCart.id} />
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
            ) : (
              <Center w="100%" h="280px">
                <Text color="gray.500">No data</Text>
              </Center>
            )
          ) : (
            <Center w="100%" h="280px">
              <Spinner />
            </Center>
          )}
        </GridItem>
        {addToCarts?.length && (
          <GridItem colSpan={4}>
            <Box>
              <Card>
                <CardBody>
                  <VStack spacing={8} align="flex-start">
                    <Heading size="md">Order summary</Heading>
                    <Divider />
                    <HStack justify="space-between" w="100%">
                      <Heading size="sm">Total: </Heading>
                      <HStack spacing={1} color="gray.500" display="flex">
                        <Text>₱</Text>
                        <Text>
                          {addToCarts
                            ?.reduce(
                              (accumulator, value) =>
                                accumulator +
                                parseInt(value.price) * value.quantity,
                              0
                            )
                            .toLocaleString()}
                        </Text>
                      </HStack>
                    </HStack>
                    <Box w="100%">
                      <Link to="/addtocart/checkout">
                        <Button colorScheme="red" w="100%">
                          Checkout
                        </Button>
                      </Link>
                    </Box>
                  </VStack>
                </CardBody>
              </Card>
            </Box>
          </GridItem>
        )}
      </Grid>
    </Container>
  );
};

export default AddToCartPage;
