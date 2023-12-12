import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import CustomInputFormControl from "./CustomInputFormControl";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useUpdateCustomer from "../hooks/useUpdateCustomer";

const PersonalInfoTab = () => {
  const user = useAuth();
  if (!user) return <Navigate to="/login" />;

  const { handleSubmit, setValue } = useForm<Customer>();
  const { mutate } = useUpdateCustomer();
  return (
    <form
      onSubmit={handleSubmit((customer) => {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...customer,
            email: user.email,
            customer_id: user.customer_id,
          })
        );
        mutate({
          ...customer,
          email: user.email,
          customer_id: user.customer_id,
        });
      })}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <CustomInputFormControl
            initialValue={user.first_name}
            setValue={(value) => setValue("first_name", value)}
            label="First name"
            inputType="text"
          />
        </GridItem>
        <GridItem>
          <CustomInputFormControl
            initialValue={user.last_name}
            setValue={(value) => setValue("last_name", value)}
            label="Last name"
            inputType="text"
          />
        </GridItem>
        <GridItem>
          <CustomInputFormControl
            initialValue={user.address}
            setValue={(value) => setValue("address", value)}
            label="Address"
            inputType="text"
          />
        </GridItem>
        <GridItem>
          <CustomInputFormControl
            initialValue={user.phone_number ? user.phone_number.toString() : ""}
            setValue={(value) => setValue("phone_number", parseInt(value))}
            label="Phone number"
            inputType="number"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Flex justify="flex-end">
            <Button colorScheme="red" type="submit">
              Save changes
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </form>
  );
};

export default PersonalInfoTab;
