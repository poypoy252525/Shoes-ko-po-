import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/brands.php");

const useBrands = () =>
  useQuery<Brand[], AxiosError>({
    queryKey: ["brands"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useBrands;
