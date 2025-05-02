export interface Stock {
    name: string;
    location: string;
    points: number;
    variation: number;
}

export type StockWithIndex = {
  index: string & Stock
}