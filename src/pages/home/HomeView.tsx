import { useState } from 'react';
import { Currency } from '../../domains/Currency';
import CurrencyCard from '../../components/Cards/Currency/CurrencyCard';

const mockHistory = [
  { date: '2025-04-10', value: 5.78 },
  { date: '2025-04-11', value: 5.82 },
  { date: '2025-04-12', value: 5.79 },
  { date: '2025-04-13', value: 5.83 },
  { date: '2025-04-14', value: 5.81 },
];

type CurrencyWithCode = Currency & { code: string };

interface IProps {
  currencies: CurrencyWithCode[];
}

const HomeView = ({ currencies }: IProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-950 min-h-screen p-4 flex flex-col">
      <span className="text-3xl mb-4">Currencies</span>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {currencies.map((curr, index) => (
          <CurrencyCard
            key={curr.code}
            code={curr.code}
            name={curr.name}
            buy={curr.buy}
            sell={curr.sell}
            variation={curr.variation}
            history={mockHistory}
            isExpanded={expandedIndex === index}
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default HomeView;
