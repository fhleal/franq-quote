import api from '../../api';
import { FinanceApiResponse } from '../../../domains/FinanceAPIResponse';

export async function getQuotes() {
  const { data } = await api.get<FinanceApiResponse>('/finance');
  return data;
}
