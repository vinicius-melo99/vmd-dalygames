import { LucideProps } from 'lucide-react';
import { ElementType } from 'react';

interface IconProps extends LucideProps {
  icon: ElementType;
}

const Icon = ({ icon: IconElement, ...rest }: IconProps) => {
  return <IconElement {...rest} />;
};

export default Icon;
