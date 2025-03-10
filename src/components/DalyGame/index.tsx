import Image from 'next/image';
import Link from 'next/link';
import { SquareArrowRight } from 'lucide-react';

interface DalyGameProps {
  id: number;
  imageUrl: string;
  title: string;
}

const DalyGame = ({ id, imageUrl, title }: DalyGameProps) => {
  return (
    <Link href={`/game/${id}`}>
      <section className="w-full bg-black rounded-lg">
        <div className="w-full max-h-90 h-90 relative">
          <Image
            src={imageUrl}
            alt={`Imagem de ${title}`}
            priority
            quality={100}
            fill
            className="max-h-90 object-cover rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 768px) 33vw"
          />
          <div className="flex items-center gap-1.5 absolute bottom-0 left-0 rounded-tr-lg rounded-bl-lg px-5 py-2">
            <span className="font-bold text-sm">{title}</span>
            <SquareArrowRight size={20} />
          </div>
        </div>
      </section>
    </Link>
  );
};

export default DalyGame;
