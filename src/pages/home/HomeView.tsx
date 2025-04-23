import { Currency } from '../../domains/Currency';
import CurrencyList from '../../components/List/CurrencyList/CurrencyList';

type CurrencyWithCode = Currency & { code: string };

interface IProps {
  currencies: CurrencyWithCode[];
}

const HomeView = ({ currencies }: IProps) => {
  return (
    <div className="bg-gray-950 min-h-screen p-4 flex flex-col">
      <CurrencyList currencies={currencies} />
    </div>
  );
};

export default HomeView;
