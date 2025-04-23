import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { quotesQueryKeys } from "./keys";
import { FinanceApiResponse } from "../../domains/FinanceAPIResponse";
import { getQuotes } from "./requests/getQuotes";

export const useGetQuotes = (
  options?: UseQueryOptions<FinanceApiResponse>
) => {
  return useQuery({
    queryKey: quotesQueryKeys.getQuotes(),
    queryFn: getQuotes,
    ...options,
  });
};
