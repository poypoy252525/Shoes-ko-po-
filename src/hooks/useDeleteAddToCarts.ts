import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient("/deleteAddtocart.php");

const useDeleteAddToCarts = () =>
  useMutation({
    mutationFn: (customerId: number) => apiClient.delete(customerId),
    onSuccess: (deleted) => console.log(deleted),
  });

export default useDeleteAddToCarts;
