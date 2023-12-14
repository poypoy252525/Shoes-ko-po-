import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/orders.php");

const useTotalSpent = (customer_id: number) =>
  useQuery<{ total_spent: string }, AxiosError>({
    queryKey: ["totalspent"],
    queryFn: () =>
      apiClient.get({ params: { customer_id, type: "totalspent" } }),
  });

export default useTotalSpent;
