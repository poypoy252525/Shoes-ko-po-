import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomInputFormControl from "../components/CustomInputFormControl";
import useFetchAddToCart from "../hooks/useFetchAddToCart";
import useAuth from "../hooks/useAuth";
import useImage from "../hooks/useImage";
import React from "react";
import CustomBreadcrumb from "../components/CustomBreadcrumb";

const CheckoutPage = () => {
  const user = useAuth();
  const { data: carts } = useFetchAddToCart(user?.customer_id!);
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Products", link: "/products" },
    { label: "Carts", link: "/addtocart" },
    { label: "Checkout", link: "/addtocart/checkout" },
  ];
  return (
    <Container maxW="container.lg" pt={10}>
      <CustomBreadcrumb items={breadcrumbItems} />
      <Grid templateColumns="repeat(12, 1fr)" columnGap={16}>
        <GridItem colSpan={7}>
          <Heading size="lg" mb={5}>
            Shipping Info
          </Heading>
          <Grid templateColumns="repeat(12, 1fr)" gap={5}>
            <GridItem colSpan={12}>
              <CustomInputFormControl inputType="email" label="Email" />
            </GridItem>
            <GridItem colSpan={6}>
              <CustomInputFormControl inputType="text" label="First name" />
            </GridItem>
            <GridItem colSpan={6}>
              <CustomInputFormControl inputType="text" label="Last name" />
            </GridItem>
            <GridItem colSpan={8}>
              <CustomInputFormControl inputType="text" label="Address" />
            </GridItem>
            <GridItem colSpan={4}>
              <CustomInputFormControl inputType="text" label="Phone" />
            </GridItem>
          </Grid>
          <Divider my={10} />
        </GridItem>
        <GridItem colSpan={5}>
          <Card>
            <CardHeader>
              <Heading size="md">Summary</Heading>
            </CardHeader>
            <CardBody>
              <Grid templateColumns="repeat(12, 1fr)" columnGap={6} w="100%">
                {carts?.map((cart, index) => (
                  <React.Fragment key={index}>
                    <GridItem colSpan={2}>
                      <Box display="flex" alignItems="center" h="100%">
                        <Image w="100%" src={useImage(cart.image_url)} />
                      </Box>
                    </GridItem>
                    <GridItem colSpan={5}>
                      <Box display="flex" alignItems="center" h="100%">
                        <Text fontSize="small">{cart.name}</Text>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Box display="flex" alignItems="center" h="100%">
                        <Text fontSize="small">x{cart.quantity}</Text>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={3}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        h="100%"
                      >
                        <Text fontWeight="semibold">
                          ₱{parseFloat(cart.price).toLocaleString()}
                        </Text>
                      </Box>
                    </GridItem>
                  </React.Fragment>
                ))}
              </Grid>
              <Divider my={4} />
              <VStack spacing={2} w="100%">
                <HStack justify="space-between" w="100%">
                  <Text fontWeight="semibold" color="gray.500">
                    Shipping fee:
                  </Text>
                  <Text fontWeight="semibold">₱30</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text fontWeight="semibold" color="gray.500">
                    Total:
                  </Text>
                  <Text fontWeight="semibold">
                    ₱
                    {carts
                      ?.reduce(
                        (accumulator, value) =>
                          accumulator + parseInt(value.price) * value.quantity,
                        30
                      )
                      .toLocaleString()}
                  </Text>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={7}>
          <Heading size="lg" mb={5}>
            Payment Method
          </Heading>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
