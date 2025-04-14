import { BitcoinSource } from "./BitcoinSource";
import { Currencies } from "./Currencies";
import { Stock } from "./Stock";
import { Tax } from "./Tax";

export interface FinanceResults {
    currencies: Currencies;
    stocks: {
      [index: string]: Stock;
    };
    available_sources: string[];
    bitcoin: {
      [source: string]: BitcoinSource;
    };
    taxes: Tax[];
  }