import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface Props {
  header?: string;
  children: ReactNode;
  viewMore?: boolean;
}

const Section = ({ header, children, viewMore = true }: Props) => {
  return (
    <VStack py={6}>
      <Flex w="100%" justifyContent="space-between">
        <Heading size="lg" alignSelf="flex-start">
          {header}
        </Heading>
        {viewMore && (
          <Button variant="link" rightIcon={<ArrowForwardIcon />}>
            View all
          </Button>
        )}
      </Flex>
      <Box w="100%" h="auto">
        {children}
      </Box>
    </VStack>
  );
};

export default Section;
