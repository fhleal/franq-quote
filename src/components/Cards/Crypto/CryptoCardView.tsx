type CryptoCardProps = {
  name: string;
  source: string;
  last: number;
  variation: number;
};

const CryptoCardView = ({ name, source, last, variation }: CryptoCardProps) => {
  const variationColor = variation >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="rounded-2xl bg-zinc-800 p-4 shadow-md transition cursor-pointer">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-sm text-zinc-400">Fonte: {source}</p>
      <div className="mt-2">
        <p className="text-white text-xl font-bold">
          R$ {last.toLocaleString()}
        </p>
        <p className={`text-sm font-medium ${variationColor}`}>{variation}%</p>
      </div>
    </div>
  );
};

export default CryptoCardView;
