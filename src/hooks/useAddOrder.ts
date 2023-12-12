import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient("/orders.php");

const useAddOrder = (cb?: (result?: Result) => void) => {
  const navigate = useNavigate();
  return useMutation<Result, AxiosError, Order>({
    mutationFn: (order: Order) => apiClient.post(order),
    onSuccess: (result) => {
      if (result.status === "success") {
        cb && cb(result);
        navigate("/placeorder/success");
      }
    },
  });
};

export default useAddOrder;
