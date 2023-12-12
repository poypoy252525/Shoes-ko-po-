import { ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Icon, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function GoHomePage() {
  const navigate = useNavigate();
  return (
    <Center minH="400px">
      <Box textAlign="center">
        <Icon as={CheckCircleIcon} w="32px" h="32px" color="green.500" mb={2} />
        <Text fontSize="xl" lineHeight="1.3">
          Thank you <br /> for purchasing!
        </Text>
        <Box my={6} />
        <Button
          colorScheme="green"
          rightIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/")}
        >
          Go to home page
        </Button>
      </Box>
    </Center>
  );
}

export default GoHomePage;
