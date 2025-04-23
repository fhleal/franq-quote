import { CurrencyWithCode } from '../../../domains/Currency';
import CurrencyListView from './CurrencyListView';

interface IProps {
  currencies: CurrencyWithCode[];
}

const CurrencyList = (props: IProps) => {
  const { currencies } = props;
  return <CurrencyListView currencies={currencies} />;
};

export default CurrencyList;
