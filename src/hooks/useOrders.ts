import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/orders.php");

const useOrders = (customer_id: number) =>
  useQuery<Order[], AxiosError>({
    queryKey: ["orders", customer_id],
    queryFn: () => apiClient.get({ params: { customer_id } }),
  });

export default useOrders;
