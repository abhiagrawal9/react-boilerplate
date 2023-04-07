export class API_ENPOINTS {
  public static readonly JOKE_API = {
    RANDOM: (category: string) => `/jokes/random?category=${category}`,
  };
}
