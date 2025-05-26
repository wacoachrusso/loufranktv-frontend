import { Brain } from "./Brain";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type BaseApiParams = Omit<RequestParams, "signal" | "baseUrl" | "cancelToken">;

const constructBaseApiParams = (): BaseApiParams => {
  return {
    credentials: "include",
  };
};

const constructClient = () => {
  return new Brain({
    baseUrl: API_BASE_URL,
    baseApiParams: constructBaseApiParams(),
  });
};

const brain = constructClient();

export default brain;
