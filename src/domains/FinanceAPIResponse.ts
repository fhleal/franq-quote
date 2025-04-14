import { FinanceResults } from "./FinanceResults";

export interface FinanceApiResponse {
    by: string;
    valid_key: boolean;
    results: FinanceResults;
    execution_time: number;
    from_cache: boolean;
  }