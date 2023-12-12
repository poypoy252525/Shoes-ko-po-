import {
  Button,
  Card,
  CardBody,
  Input,
  VStack,
  Text,
  HStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<CustomerLogin>();
  const { mutate } = useLogin();
  const onSubmit = (user: CustomerLogin) => {
    mutate(user);
  };
  return (
    <Flex justify="center" pt={20}>
      <form onSubmit={handleSubmit((data) => onSubmit(data))} method="POST">
        <Card w="350px">
          <CardBody>
            <VStack align="center">
              <Link to="/">
                <Image src={logo} w="120px" />
              </Link>
              <Input
                {...register("email", { required: true })}
                placeholder="Email"
              />
              <Input
                {...register("password", { required: true })}
                placeholder="Password"
                type="password"
              />
              {/* <Link to="/"> */}
              <Button colorScheme="red" size="sm" type="submit">
                Login
              </Button>
              {/* </Link> */}
              <HStack spacing={1}>
                <Text fontSize="sm">Create an account?</Text>
                <Link to="/signup">
                  <Button size="sm" variant="link">
                    Sign up
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </form>
    </Flex>
  );
};

export default LoginPage;
