import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/products.php");

const useProduct = (id: string | number) => {
  return useQuery<Shoes, AxiosError>({
    queryKey: ["products", id],
    queryFn: () => apiClient.get({ params: { id } }),
  });
};

export default useProduct;
