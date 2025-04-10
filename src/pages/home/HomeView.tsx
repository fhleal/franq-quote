import { Session } from '../../domains/Session';

interface IProps {
  session: Session;
}
const HomeView = (props: IProps) => {
  const { name, email } = props.session;
  return (
    <div>
      {name} {email}
    </div>
  );
};

export default HomeView;
