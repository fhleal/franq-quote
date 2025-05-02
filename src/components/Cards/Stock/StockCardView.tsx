type StockCardProps = {
  code: string;
  name: string;
  location: string;
  points: number;
  variation: number;
  onClick: () => void;
  isExpanded: boolean;
};

const StockCardView = ({
  code,
  name,
  location,
  points,
  variation,
  onClick,
  isExpanded,
}: StockCardProps) => {
  const variationColor = variation >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl bg-zinc-800 p-4 shadow-md transition-all duration-300 w-full ${
        variation >= 0
          ? 'border-b-4 border-b-emerald-600'
          : 'border-b-4 border-rose-600'
      } ${isExpanded ? 'sm:col-span-2 sm:row-span-2' : ''}`}
    >
      <h3 className="text-lg font-semibold text-white">
        {name} ({code})
      </h3>
      <p className="text-sm text-zinc-400">{location}</p>
      <div className="mt-2">
        <p className="text-white text-xl font-bold">
          {points.toLocaleString()}
        </p>
        <p className={`text-sm font-medium ${variationColor}`}>{variation}%</p>
      </div>
    </div>
  );
};

export default StockCardView;
