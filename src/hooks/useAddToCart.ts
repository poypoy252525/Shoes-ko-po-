import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/addtocart.php");

const useAddToCart = () =>
  useMutation<{ status: string; message: string }, AxiosError, AddToCart>({
    mutationFn: (addToCart: AddToCart) => apiClient.post(addToCart),
    onSuccess: (data) => {
      console.log(data.status);
    },
  });

export default useAddToCart;
