export const quotesQueryKeys = {
    all: ['finance'] as const,
    getQuotes: (symbols?: string[], currencyPairs?: string[]) => 
      [...quotesQueryKeys.all, 'quotes', { symbols, currencyPairs }] as const,
  };