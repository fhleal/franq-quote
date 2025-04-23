import HomeView from './HomeView';
import { useGetQuotes } from '../../services/quotes';
import { Currency } from '../../domains/Currency';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';

const Home = () => {
  const { data, isLoading } = useGetQuotes();

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  const currencies = data?.results?.currencies
    ? Object.entries(data.results.currencies).map(([code, value]) => {
        const currency = value as Currency;
        return {
          code,
          ...currency,
        };
      })
    : [];

  return (
    <DefaultLayout>
      <HomeView currencies={currencies} />
    </DefaultLayout>
  );
};

export default Home;
