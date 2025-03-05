import { BaseApi } from "../base-api";

const login = async (formData: FormData) => {
  return await BaseApi({
    path: "/v1.0/login",
    config: {
      method: "POST",
      body: formData,
    },
  });
};

export { login };
