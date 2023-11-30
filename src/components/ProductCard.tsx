import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useImage from "../hooks/useImage";

interface Props {
  product: Shoes;
}

const ProductCard = ({ product }: Props) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const textSize = { base: "xs", lg: "sm" };

  return (
    <Card
      minW="210px"
      w="100%"
      h="100%"
      size={isMobile ? "sm" : "md"}
      overflow="hidden"
    >
      <Image src={useImage(product.image_url)} />
      <CardBody>
        <Stack divider={<StackDivider />} spacing={4} h="100%">
          <Box mb="auto">
            <Link to={"/products/" + product.product_id}>
              <Button
                w="100%"
                variant="link"
                whiteSpace="normal"
                justifyContent="flex-start"
                textAlign="start"
              >
                <Heading size={textSize}>
                  {product.name + " (" + product.color + ")"}
                </Heading>
              </Button>
            </Link>
            <Box lineHeight={1.2} my={1}>
              <Text fontSize={textSize} color="teal.400" fontWeight="semibold">
                {product.brand}
              </Text>
              <Text fontSize={textSize} color="teal.400" fontWeight="semibold">
                {product.category}
              </Text>
            </Box>
            <Text fontSize={textSize} color="red.600" fontWeight="bold">
              ₱{parseFloat(product.price).toLocaleString()}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
