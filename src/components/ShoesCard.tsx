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
} from "@chakra-ui/react";
import Shoes from "../assets/air-jordan-1-low-shoes-459b4T.png";

const ShoesCard = () => {
  return (
    <Card w="100%">
      <CardBody>
        <Stack divider={<StackDivider />} spacing={4}>
          <Image src={Shoes} />
          <Box>
            <Heading size="md">Air Jordan 1 Low</Heading>
            <Text color="teal.400" fontWeight="semibold">
              Women's Shoes
            </Text>
            <Text color="red.600" fontWeight="bold">
              ₱6,195
            </Text>
          </Box>
          <HStack justifyContent="flex-end">
            <Button size="sm" colorScheme="red">
              BUY
            </Button>
            <Button size="sm">ADD TO CART</Button>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShoesCard;
