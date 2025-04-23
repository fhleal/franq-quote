import { useState } from 'react';
import { CurrencyWithCode } from '../../../domains/Currency';
import CurrencyCard from '../../Cards/Currency/CurrencyCard';

interface IProps {
  currencies: CurrencyWithCode[];
}

const mockHistory = [
  { date: '2025-04-10', value: 5.78 },
  { date: '2025-04-11', value: 5.82 },
  { date: '2025-04-12', value: 5.79 },
  { date: '2025-04-13', value: 5.83 },
  { date: '2025-04-14', value: 5.81 },
];

const CurrencyListView = (props: IProps) => {
  const { currencies } = props;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
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
    </>
  );
};

export default CurrencyListView;
