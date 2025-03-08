import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="mr-8">
      <span className="text-4xl">Daly</span>
      <span className="text-4xl font-bold text-[#EA580C]">Games</span>
    </Link>
  );
};

export default Logo;
