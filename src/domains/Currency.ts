export interface Currency {
    name: string;
    buy: number;
    sell: number | null;
    variation: number;
}

export type CurrencyWithCode = Currency & { code: string };

