import { IRandomJokeResponse } from '../models/random-joke.model';
import { axiosInstance } from '../utilities';

import { API_ENPOINTS } from './api-endpoints';

const getRandomJoke = async (category: string) =>
  (
    await axiosInstance.get<IRandomJokeResponse>(
      API_ENPOINTS.JOKE_API.RANDOM(category),
    )
  ).data;

export const JokeService = { getRandomJoke };
