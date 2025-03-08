import Link, { LinkProps } from 'next/link';

interface NavLinkProps extends LinkProps {
  content: string;
}

const NavLink = ({ content, ...rest }: NavLinkProps) => {
  return (
    <Link
      {...rest}
      className="hover:text-[#EA580C] text-base transition-color duration-300 ease-in-out"
    >
      {content}
    </Link>
  );
};

export default NavLink;
