import queryString from "query-string";

interface FetchOptions {
  baseUrl?: string;
  body?: object;
  method?: "DELETE" | "GET" | "POST" | "PUT";
  params?: object;
}
export const fetchApi = async <T>(url: string, options?: FetchOptions) => {
  const token = localStorage.getItem("bearer_token");
  const base = options?.baseUrl ?? "https://the-pharmacy-council-meeting-system-api.deemsang.com";
  const query = options?.params
    ? `?${queryString.stringify(options.params, { skipEmptyString: true, skipNull: true })}`
    : "";
  const response = await fetch(`${base}${url}${query}`, {
    body: JSON.stringify(options?.body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: options?.method ?? "GET",
  });
  if (response.status === 401) {
    localStorage.removeItem("bearer_token");
  }
  if (!response.ok) {
    throw new Error(`${response.status} ${await response.text()}`);
  }
  try {
    return (await response.json()) as T;
  } catch {
    return response.text() as T;
  }
};
