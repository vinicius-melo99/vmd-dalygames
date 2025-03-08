import { ReactNode } from 'react';

interface NavRootProps {
  children: ReactNode;
}

const NavRoot = ({ children }: NavRootProps) => {
  return <nav className="flex items-center gap-4">{children}</nav>;
};

export default NavRoot;
