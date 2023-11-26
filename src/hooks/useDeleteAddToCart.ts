import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/addtocart.php");

const useDeleteAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation<null, AxiosError, number>({
    mutationFn: (id: number) => apiClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addtocart"] });
    },
  });
};

export default useDeleteAddToCart;
