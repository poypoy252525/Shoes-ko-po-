import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Shoes } from "../entities/shoes";

const apiClient = new APIClient("/products.php");

export interface ProductQuery {
  genders: string[];
  brands: string[];
}

const useProducts = (productQuery?: ProductQuery) =>
  useQuery<Shoes[], Error>({
    queryKey: ["products", productQuery],
    queryFn: () =>
      apiClient.getAll({
        genders: productQuery?.genders,
        brands: productQuery?.brands,
      }),
  });

export default useProducts;
