import httpGames from './httpGames.service';

type Params = {
  [key: string]: string | number
}

const gamesEndpoint = '/games';

const gamesService = {
  getGames: async (params: Params) => {
    const data = await httpGames.get(gamesEndpoint, { params });
    return data;
  },
  getGameBuySlug: async (slug: string) => {
    const data = await httpGames.get(`${gamesEndpoint}/${slug}`);
    return data;
  }
};

export default gamesService;
