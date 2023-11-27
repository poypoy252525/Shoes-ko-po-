import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";

const apiClient = new APIClient("/addtocart.php");

const useAddToCart = () => {
  const toast = useToast();
  return useMutation<
    { status: string; message: string },
    AxiosError,
    AddToCart
  >({
    mutationFn: (addToCart: AddToCart) => apiClient.post(addToCart),
    onSuccess: (data) => {
      toast({
        title: data.status,
        description: data.message,
        status: "success",
        position: "bottom-right",
        duration: 3000,
      });
    },
  });
};

export default useAddToCart;
