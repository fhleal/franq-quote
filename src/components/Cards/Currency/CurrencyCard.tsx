import { Currency } from '../../../domains/Currency';
import CurrencyCardView from './CurrencyCradView';

type Props = Currency & {
  code: string;
  history: { date: string; value: number }[];
  isExpanded: boolean;
  onClick: () => void;
};

const CurrencyCard = (props: Props) => {
  const { buy, code, history, isExpanded, name, onClick, sell, variation } =
    props;
  return (
    <CurrencyCardView
      name={name}
      buy={buy}
      sell={sell}
      variation={variation}
      code={code}
      history={history}
      isExpanded={isExpanded}
      onClick={onClick}
    />
  );
};

export default CurrencyCard;
