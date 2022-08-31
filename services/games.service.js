import httpGames from './httpGames.service';

const gamesEndpoint = '/games';

const gamesService = {
  getGames: async (params) => {
    const data = await httpGames.get(gamesEndpoint, { params });
    return data;
  },
  getGameBuySlug: async (slug) => {
    const data = await httpGames.get(`${gamesEndpoint}/${slug}`);
    return data;
  }
};

export default gamesService;
