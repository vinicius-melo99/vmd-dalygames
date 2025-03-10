import { DalyGame } from '@/types';

export const getDailyGame = async (
  revalidate: number,
): Promise<DalyGame | never> => {
  const baseUrl = process.env.NEXT_API_URL as string;
  const endPoint = '/?api=game_day';

  const URL = `${baseUrl}${endPoint}`;

  try {
    const response = await fetch(URL, {
      next: {
        revalidate,
      },
    });
    const data = await response.json();

    if (data.mensagem) {
      throw new Error(data.mensagem);
    }

    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
