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
