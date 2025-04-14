export interface BitcoinSource {
    name: string;
    format: [string, string];
    last: number;
    buy?: number;
    sell?: number;
    variation: number;
  }