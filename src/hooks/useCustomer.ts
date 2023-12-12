import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/customers.php");

const useCustomer = (customer_id: number) =>
  useQuery<Customer, AxiosError>({
    queryKey: ["customers", customer_id],
    queryFn: () => apiClient.get({ params: { customer_id } }),
  });

export default useCustomer;
