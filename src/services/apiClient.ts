import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:80/shoeskopo",
  headers: {
    "Content-Type": "application/json",
  },
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (query?: Object) =>
    axiosInstance
      .get(this.endpoint, { params: { ...query } })
      .then((res) => res.data);

  get = (config?: AxiosRequestConfig) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };

  post = <T>(data: T) =>
    axiosInstance.post(this.endpoint, data).then((res) => res.data);

  delete = (id: number) =>
    axiosInstance
      .delete(this.endpoint, { params: { id } })
      .then((res) => res.data);
}

export default APIClient;
