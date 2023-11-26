import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useAddToCart from "../hooks/useAddToCart";
import useAuth from "../hooks/useAuth";
import CustomBreadcrumb from "../components/CustomBreadcrumb";

const ProductPage = () => {
  const { id } = useParams();
  const { data: product } = useProduct(parseInt(id ? id : ""));
  const { mutate } = useAddToCart();
  const user = useAuth();
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Shoes", link: "/products/" + id },
  ];
  return (
    <Box pt={10}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box borderRadius={10} overflow="hidden">
            <Image
              src={
                "http://localhost/shoeskopo/image.php?url=" + product?.image_url
              }
              maxW="100%"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <CustomBreadcrumb items={breadcrumbItems} />
          <VStack align="flex-start" spacing={4}>
            <Heading>{product?.name}</Heading>
            <Text>{product?.description}</Text>
            <Box>
              <Heading size="sm" mb={2}>
                Size
              </Heading>
              <HStack>
                <Button size="sm">7</Button>
                <Button size="sm">8</Button>
                <Button size="sm">9</Button>
                <Button size="sm">10</Button>
                <Button size="sm">11</Button>
                <Button size="sm">12</Button>
              </HStack>
            </Box>
            <Box>
              <Heading size="sm" mb={2}>
                Color
              </Heading>
              <HStack>
                <Button size="sm">Blue</Button>
                <Button size="sm">Red</Button>
                <Button size="sm">Green</Button>
                <Button size="sm">Black</Button>
              </HStack>
            </Box>
            <Box>
              <Heading size="sm" mb={2}>
                Quantity
              </Heading>
              <HStack>
                <Button size="sm">-</Button>
                <Text>1</Text>
                <Button size="sm">+</Button>
              </HStack>
            </Box>
            <HStack w="100%" justify="flex-start">
              <Button colorScheme="red">Buy now</Button>
              <Button
                onClick={() => {
                  return mutate({
                    customerId: user?.customer_id!,
                    id: 0,
                    productId: id!,
                    quantity: 2,
                  });
                }}
              >
                Add to cart
              </Button>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductPage;
