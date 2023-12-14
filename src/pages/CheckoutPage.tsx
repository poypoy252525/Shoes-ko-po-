import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomInputFormControl from "../components/CustomInputFormControl";
import useFetchAddToCart from "../hooks/useFetchAddToCart";
import useAuth from "../hooks/useAuth";
import useImage from "../hooks/useImage";
import React, { useEffect } from "react";
import CustomBreadcrumb from "../components/CustomBreadcrumb";
import PaymentSelector from "../components/PaymentSelector";
import useAddOrder from "../hooks/useAddOrder";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import useDeleteAddToCarts from "../hooks/useDeleteAddToCarts";
import { EditIcon } from "@chakra-ui/icons";
import useUpdateCustomer from "../hooks/useUpdateCustomer";
import useCustomer from "../hooks/useCustomer";

export const areAllPropertiesNotNull = (obj: Object): boolean => {
  return Object.values(obj).every((value) => value !== null);
};

const CheckoutPage = () => {
  const user = useAuth();
  if (!user?.customer_id) return <Navigate to="/login" />;

  if (!areAllPropertiesNotNull(user)) return <Navigate to="/profile" />;

  const { data: customer } = useCustomer(user.customer_id);
  const { data: carts } = useFetchAddToCart(user?.customer_id!);
  const { mutate } = useAddOrder();
  const { mutate: mutateCustomer } = useUpdateCustomer();
  const { handleSubmit, setValue } = useForm<Order | Customer>();
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Products", link: "/products" },
    { label: "Carts", link: "/addtocart" },
    { label: "Checkout", link: "/addtocart/checkout" },
  ];

  useEffect(() => {
    const order: Order = {
      customer_id: user.customer_id,
      order_date: new Date().toISOString(),
      status: "Processing",
      order_id: "",
      payment_method: "",
      order_items:
        carts?.map((cart) => ({
          order_id: "",
          order_item_id: "",
          product_id: cart.product_id,
          quantity: cart.quantity,
          subtotal: parseFloat(cart.price),
        })) || [],
    };
    setValue("order_items", order.order_items);
    setValue("customer_id", user?.customer_id!);
    setValue("order_date", order.order_date);
    setValue("status", order.status);
  }, [carts]);

  const { mutate: mutateAddToCart } = useDeleteAddToCarts();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={handleSubmit((order) => {
        mutate(order as Order);
        mutateAddToCart(order.customer_id);
        mutateCustomer(order as Customer);
      })}
    >
      <Container maxW="container.lg" pt={10}>
        <CustomBreadcrumb items={breadcrumbItems} />
        <Grid templateColumns="repeat(12, 1fr)" columnGap={16}>
          <GridItem colSpan={7}>
            <Flex w="100%" justify="space-between" align="center">
              <Heading size="lg" mb={5}>
                Shipping Info
              </Heading>
              <Button
                leftIcon={<Icon as={EditIcon} />}
                size="sm"
                variant="link"
                colorScheme="purple"
                onClick={() => navigate("/profile")}
              >
                Edit
              </Button>
            </Flex>
            <Grid templateColumns="repeat(12, 1fr)" gap={5}>
              <GridItem colSpan={12}>
                <CustomInputFormControl
                  initialValue={customer?.email}
                  inputType="email"
                  label="Email"
                  disabled
                />
              </GridItem>
              <GridItem colSpan={6}>
                <CustomInputFormControl
                  initialValue={customer?.first_name}
                  inputType="text"
                  label="First name"
                  setValue={(value) => setValue("first_name", value)}
                />
              </GridItem>
              <GridItem colSpan={6}>
                <CustomInputFormControl
                  initialValue={customer?.last_name}
                  inputType="text"
                  label="Last name"
                  setValue={(value) => setValue("last_name", value)}
                />
              </GridItem>
              <GridItem colSpan={8}>
                <CustomInputFormControl
                  initialValue={customer?.address}
                  inputType="text"
                  label="Address"
                  setValue={(value) => setValue("address", value)}
                />
              </GridItem>
              <GridItem colSpan={4}>
                <CustomInputFormControl
                  initialValue={customer?.phone_number.toString()}
                  inputType="text"
                  label="Phone"
                  setValue={(value) =>
                    setValue("phone_number", parseInt(value))
                  }
                />
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
                            accumulator +
                            parseInt(value.price) * value.quantity,
                          30
                        )
                        .toLocaleString()}
                    </Text>
                  </HStack>
                  <Button colorScheme="red" w="100%" type="submit">
                    Place order
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem colSpan={7}>
            <Heading size="lg" mb={5}>
              Payment Method
            </Heading>
            <PaymentSelector
              setValue={(value) => setValue("payment_method", value)}
            />
          </GridItem>
        </Grid>
      </Container>
    </form>
  );
};

export default CheckoutPage;
