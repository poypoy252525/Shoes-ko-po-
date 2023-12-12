import {
  Flex,
  Card,
  CardBody,
  VStack,
  Input,
  Button,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useSignUp from "../hooks/useSignUp";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { mutate } = useSignUp();
  const { register, handleSubmit } = useForm<CustomerLogin>();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (data.password !== data.confirmPassword) {
          alert("Password does not match, please try again.");
          return;
        }
        mutate(data);
      })}
    >
      <Flex justify="center" pt={20}>
        <Card w="350px">
          <CardBody>
            <VStack align="center">
              <Link to="/">
                <Image src={logo} w="120px" />
              </Link>
              <Input placeholder="Email" type="email" {...register("email")} />
              <Input
                placeholder="Password"
                type="password"
                {...register("password")}
              />
              <Input
                placeholder="Confirm password"
                type="password"
                {...register("confirmPassword")}
              />
              <Button colorScheme="red" size="sm" type="submit">
                Sign up
              </Button>
              <HStack spacing={1}>
                <Text fontSize="sm">Already have an account?</Text>
                <Link to="/login">
                  <Button size="sm" variant="link">
                    Login
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </Flex>
    </form>
  );
};

export default SignUpPage;
