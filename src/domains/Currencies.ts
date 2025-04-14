import { Currency } from "./Currency";

export interface Currencies {
    source: string;
    [currencyCode: string]: string | Currency;
  }