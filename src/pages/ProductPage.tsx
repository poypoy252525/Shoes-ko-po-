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
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useAddToCart from "../hooks/useAddToCart";
import useAuth from "../hooks/useAuth";
import CustomBreadcrumb from "../components/CustomBreadcrumb";
import QuantitySelector from "../components/QuantitySelector";
import { useState } from "react";
import Selector from "../components/Selector";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product } = useProduct(parseInt(id ? id : ""));
  const { mutate } = useAddToCart();
  const user = useAuth();
  const [quantity, setQuantity] = useState<number>(1);
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: product?.name!, link: "/products/" + id },
  ];
  const colors: { label: string; value: string }[] = [
    { label: product?.color!, value: product?.color! },
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
                <Selector
                  items={[
                    { label: "8", value: "8" },
                    { label: "9", value: "9" },
                    { label: "10", value: "10" },
                    { label: "11", value: "11" },
                  ]}
                />
              </HStack>
            </Box>
            <Box>
              <Heading size="sm" mb={2}>
                Color
              </Heading>
              <HStack>
                <Selector selectedValue={product?.color} items={colors} />
              </HStack>
            </Box>
            <Box>
              <Heading size="sm" mb={2}>
                Quantity
              </Heading>
              <QuantitySelector
                onSetQuantity={setQuantity}
                quantity={quantity}
              />
            </Box>
            <HStack w="100%" justify="flex-start">
              <Button colorScheme="red">Buy now</Button>
              <Button
                onClick={() => {
                  if (user)
                    return mutate({
                      customerId: user?.customer_id!,
                      id: 0,
                      productId: id!,
                      quantity: quantity,
                    });

                  navigate("/login");
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
