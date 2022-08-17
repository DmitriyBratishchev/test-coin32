import axios from "axios";

const http = axios.create({
  baseURL: 'https://api.rawg.io/api',
})

http.interceptors.request.use((req) => {
  req.params = {
    ...req.params,
    key: 'c542e67aec3a4340908f9de9e86038af'
  }

  console.log('req', req);
  return req
}, (error) => {
  return error
})

const httpGames = {
  get: http.get
}

export default httpGames;