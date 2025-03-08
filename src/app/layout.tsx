import type { Metadata } from 'next';
import { Geist_Mono, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/HeaderComponent/header';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Daly Games',
  description: 'Criado para estar próximo a seus jogos favoritos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
