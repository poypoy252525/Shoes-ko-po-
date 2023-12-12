import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";

const apiClient = new APIClient("/customers.php");

const useUpdateCustomer = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation<Result, AxiosError, Customer>({
    mutationFn: (customer: Customer) => apiClient.put(customer),
    onSuccess: (result) => {
      if (result.status === "success") {
        toast({
          title: "Profile updated",
          description: result.message,
          status: "success",
          isClosable: true,
          position: "bottom-right",
          duration: 3000,
        });
        queryClient.invalidateQueries({ queryKey: ["customers"] });
      } else {
        toast({
          title: "Failed",
          description: result.message,
          status: "error",
          isClosable: true,
          position: "bottom-right",
          duration: 3000,
        });
      }
    },
  });
};

export default useUpdateCustomer;
