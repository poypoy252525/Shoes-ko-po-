import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/addtocart.php");

interface CombinedData extends AddToCart, Shoes {}

const useFetchAddToCart = (customerId: number | string) =>
  useQuery<CombinedData[], AxiosError>({
    queryKey: ["addtocart"],
    queryFn: () => apiClient.get({ params: { customerId } }),
  });

export default useFetchAddToCart;
