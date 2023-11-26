import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/signup.php");

const useSignUp = () =>
  useMutation<{ status: string; message: string }, AxiosError, CustomerLogin>({
    mutationFn: (customer: CustomerLogin) => apiClient.post(customer),
    onSuccess: (data) => {
      alert(data.status);
    },
  });

export default useSignUp;
