import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 500 * 1,
            gcTime: 1000 * 60 * 3,
            refetchOnWindowFocus: false,
            enabled: true,
            retry: 1,
        },
    },
});
