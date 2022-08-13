import React, { FC } from 'react';
import NavContainer from './NavContainer';
type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-backgroundApp min-h-screen">
      <NavContainer />
      {children}
    </div>
  );
};

export default Layout;
