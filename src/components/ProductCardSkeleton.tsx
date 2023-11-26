import { Card, CardBody, Skeleton, VStack } from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Card w="100%">
      <Skeleton h="220px" w="100%" />
      <CardBody>
        <VStack spacing={3} align="flex-start">
          <Skeleton h="10px" w="100%" />
          <Skeleton h="10px" w="100%" />
          <Skeleton h="10px" w="70%" />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ProductCardSkeleton;
