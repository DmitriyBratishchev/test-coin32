import httpGames from './httpGames.service';

const platformEndpoint = 'platforms/';

const platformService = {
  getPlatformParent: async () => {
    const data = await httpGames.get(`${platformEndpoint}lists/parents`);
    return data;
  }
};

export default platformService;
