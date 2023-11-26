import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import useAuth from "../hooks/useAuth";

interface Props {
  product_id: number;
  name: string;
  category: string;
  price: string;
  brand: string;
  minW?: string;
  image_url: string;
}

const ProductCard = ({
  product_id,
  minW,
  name,
  category,
  price,
  brand,
  image_url,
}: Props) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const textSize = { base: "xs", lg: "sm" };
  const { mutate } = useAddToCart();

  const user = useAuth();
  return (
    <Card
      minW={minW}
      w="100%"
      h="100%"
      size={isMobile ? "sm" : "md"}
      overflow="hidden"
    >
      <Image src={image_url} />
      <CardBody>
        <Stack divider={<StackDivider />} spacing={4} h="100%">
          <Box mb="auto">
            <Link to={"/products/" + product_id}>
              <Button variant="link">
                <Heading size={textSize}>{name}</Heading>
              </Button>
            </Link>
            <Box lineHeight={1.2} my={1}>
              <Text fontSize={textSize} color="teal.400" fontWeight="semibold">
                {brand}
              </Text>
              <Text fontSize={textSize} color="teal.400" fontWeight="semibold">
                {category}
              </Text>
            </Box>
            <Text fontSize={textSize} color="red.600" fontWeight="bold">
              ₱{parseFloat(price).toLocaleString()}
            </Text>
          </Box>
          <HStack justifyContent="flex-end">
            <Button size={isMobile ? "xs" : "sm"} colorScheme="red">
              BUY
            </Button>
            <Button
              size={isMobile ? "xs" : "sm"}
              onClick={() => {
                return mutate({
                  id: 0,
                  customerId: user?.customer_id!,
                  productId: product_id.toString(),
                  quantity: 1,
                });
              }}
            >
              ADD TO CART
            </Button>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
