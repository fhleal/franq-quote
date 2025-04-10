import useSession from '../../hooks/useSession';
import HomeView from './HomeView';

const Home = () => {
  const session = useSession();
  if (!session) return null;
  return <HomeView session={session} />;
};

export default Home;
