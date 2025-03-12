import { fetchApi } from "@/lib/fetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetStreamingLink = () => {
  return useQuery({
    queryKey: ["streaming-link"],
    queryFn: () => fetchApi<{ link?: string }>("/streaming-link"),
  });
};

export const useUpdateStreamingLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (link: string) => fetchApi("/streaming-link", { method: "POST", body: { link } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streaming-link"] });
    },
  });
};

export const usePostOnline = (body: { userId: string }) => {
  return useQuery({
    queryKey: ["online"],
    queryFn: () => fetchApi<unknown>("/online", { method: "POST", body }),
    refetchInterval: 10000,
  });
};

export const useGetOnline = () => {
  return useQuery({
    queryKey: ["online"],
    queryFn: () => fetchApi<{ online?: number }>("/online", { method: "GET" }),
    refetchInterval: 1000,
  });
};
