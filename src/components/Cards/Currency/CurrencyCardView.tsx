import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Currency } from '../../../domains/Currency';

type Props = Currency & {
  code: string;
  history: { date: string; value: number }[];
  isExpanded: boolean;
  onClick: () => void;
};

const CurrencyCardView = ({
  code,
  name,
  buy,
  sell,
  variation,
  history,
  isExpanded,
  onClick,
}: Props) => {
  const variationColor = variation >= 0 ? 'text-emerald-500' : 'text-rose-500';

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-4 shadow-md transition-all duration-300 w-full ${
        variation >= 0
          ? 'border-b-4 border-b-emerald-600'
          : 'border-b-4 border-rose-600'
      } ${isExpanded ? 'sm:col-span-2 sm:row-span-2 bg-zinc-900' : 'bg-zinc-800'}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {name} ({code})
          </h3>
          <p className="text-sm text-zinc-400">
            Buy: R$ {typeof buy === 'number' ? buy.toFixed(2) : '--'}
          </p>
          <p className="text-sm text-zinc-400">
            Sell: {typeof sell === 'number' ? `R$ ${sell.toFixed(2)}` : '--'}
          </p>
        </div>
        <p className={`text-xl font-bold ${variationColor}`}>{variation}%</p>
      </div>

      {isExpanded && (
        <div className="mt-4 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history}>
              <XAxis dataKey="date" hide />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke={variation >= 0 ? '#22c55e' : '#ef4444'}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default CurrencyCardView;
