import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const DefaultLayoutView: React.FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="bg-gray-800 p-4">
        <div className="h-12 bg-gray-700"></div>
      </header>

      <main className="p-4">{children}</main>
    </div>
  );
};

export default DefaultLayoutView;
