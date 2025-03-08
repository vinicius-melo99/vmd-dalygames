import Icon from '@/components/common/icon';
import Nav from '../nav';
import styles from './styles.module.css';
import { Gamepad2 } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={`flex w-full justify-center px-2 h-28 ${styles.header}`}>
      <div className={styles.headerContainer}>
        <Nav.Root>
          <Nav.Logo />
          <Nav.Link content="Jogos" href="/" />
          <Nav.Link content="Perfil" href="/profile" />
        </Nav.Root>
        <Link href="/profile" className="hidden sm:flex">
          <Icon
            icon={Gamepad2}
            size={32}
            color="#F1F5F9"
            className="transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
