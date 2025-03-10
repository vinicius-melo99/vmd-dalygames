import Container from '@/components/common/container';
import Title from '@/components/common/title';
import DalyGame from '@/components/DalyGame';
import { getDailyGame } from '@/services/apiCall';

export default async function Home() {
  const data = await getDailyGame(320);

  return (
    <main className="flex w-full">
      <Container>
        <Title title="Separamos um jogo exclusivo para você" />
        <DalyGame id={data.id} imageUrl={data.image_url} title={data.title} />
      </Container>
    </main>
  );
}
