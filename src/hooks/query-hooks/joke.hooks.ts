import { useQuery } from '@tanstack/react-query';
import { JokeService } from 'src/services';

export const jokeKeys = {
  random: ['random-joke'],
};

export const fetchJoke = async () => {
  const jokeCategory = 'dev';
  return await JokeService.getRandomJoke(jokeCategory);
};

export const useGetJoke = () =>
  useQuery({
    queryKey: jokeKeys.random,
    queryFn: fetchJoke,
    select: (data) => data.value,
  });
