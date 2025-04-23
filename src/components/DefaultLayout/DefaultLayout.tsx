import { ReactNode } from 'react';
import DefaultLayoutView from './DefaultLayoutView';

interface IProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  return <DefaultLayoutView>{children}</DefaultLayoutView>;
};

export default DefaultLayout;
