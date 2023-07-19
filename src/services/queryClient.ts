import { QueryClient } from "@tanstack/react-query";
import handleError from "../utils/handleToast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 10, // 10 seconds
      retry: 1,
      onError: (error: any) => {
        if (error.response?.status === 401) {
          // history.replaceState(null, "", "/");
          window.location.pathname = "/";
          window.localStorage.clear();
        } else {
          handleError(error);
        }
      },
    },
  },
});
export default queryClient;
