import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-7xl w-full mx-auto px-2">{children}</div>;
};

export default Container;
