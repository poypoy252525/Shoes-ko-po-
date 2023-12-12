import {
  Avatar,
  Box,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProfileTab from "../components/ProfileTab";
import useCustomer from "../hooks/useCustomer";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import CustomBreadcrumb from "../components/CustomBreadcrumb";
import useOrders from "../hooks/useOrders";

const ProfilePage = () => {
  const user = useAuth();
  if (!user) return <Navigate to="/login" />;

  const { data: customer } = useCustomer(user.customer_id);
  const { data: orders } = useOrders(user.customer_id);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: "Profile", link: "/profile" },
  ];

  return (
    <Box>
      <Container maxW="container.lg" pt={10}>
        <CustomBreadcrumb items={breadcrumbItems} />
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={8}>
            <Card h="100%" variant="outline">
              <CardBody>
                <HStack spacing={8}>
                  <Avatar
                    size="2xl"
                    name={customer?.first_name + " " + customer?.last_name}
                  />
                  <Box>
                    <Text fontSize="24px" color="gray.600" fontWeight="bold">
                      {customer?.first_name && customer.last_name
                        ? customer.first_name + " " + customer.last_name
                        : customer?.email}
                    </Text>
                    <Text color="teal">Active</Text>
                  </Box>
                </HStack>
                <Divider my={6} />
                <Grid templateColumns="repeat(3, 1fr)">
                  <GridItem>
                    <Text fontSize="xs" color="teal" fontWeight="semibold">
                      Total Spent
                    </Text>
                    <Text fontWeight="bold" fontSize="lg" color="gray.600">
                      {/* {orders?.reduce((acc, value) => acc + value., 0)} */}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <VStack spacing={0}>
                      <Text
                        fontSize="xs"
                        color="teal"
                        fontWeight="semibold"
                        textAlign="end"
                      >
                        Last Order
                      </Text>
                      <Text fontWeight="bold" fontSize="lg" color="gray.600">
                        5 days ago
                      </Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <VStack spacing={0} align="flex-end">
                      <Text
                        fontSize="xs"
                        color="teal"
                        fontWeight="semibold"
                        textAlign="end"
                      >
                        Total orders
                      </Text>
                      <Text fontWeight="bold" fontSize="lg" color="gray.600">
                        {orders?.length}
                      </Text>
                    </VStack>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem colSpan={4}>
            <Card h="100%" variant="outline">
              <CardBody>
                <VStack divider={<Divider />} align="flex-start" spacing={5}>
                  <Heading size="md" color="gray.600">
                    Default Address
                  </Heading>
                  <Grid templateColumns="repeat(3, 1fr)" w="100%">
                    <GridItem colSpan={1}>
                      <Text color="teal" fontWeight="semibold">
                        Address
                      </Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Flex justify="flex-end" w="100%">
                        <Text color="teal">
                          {customer?.address || "(set address)"}
                        </Text>
                      </Flex>
                      <Box mb={5}></Box>
                    </GridItem>
                  </Grid>
                  <Grid templateColumns="repeat(3, 1fr)" w="100%">
                    <GridItem colSpan={1}>
                      <Text color="teal" fontWeight="semibold">
                        Email
                      </Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text textAlign="end" color="teal">
                        {customer?.email}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Text color="teal" fontWeight="semibold">
                        Phone
                      </Text>
                    </GridItem>
                    <GridItem colSpan={2} w="100%">
                      <Flex w="100%" justify="flex-end">
                        <Text color="teal">
                          {customer?.phone_number || "(set phone number)"}
                        </Text>
                      </Flex>
                    </GridItem>
                  </Grid>
                </VStack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
        <Box my={10} />
        <ProfileTab />
      </Container>
    </Box>
  );
};

export default ProfilePage;
