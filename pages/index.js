import { useState } from 'react'
import Image from "next/image";
import styled from "styled-components";
import { keyframes } from "styled-components";
import FilterPanel from "../components/filterPanel/filterPanel";
import ListGames from "../components/listGames/listGames";
import { HeaderGame, ListContainer } from "../components/listGames/listGamesStyle";
import httpGames from '../services/httpGames.service';


const gamesResponse = async () => {
  console.log(Date.now());
  const res = await fetch('https://api.rawg.io/api/games?key=c542e67aec3a4340908f9de9e86038af&page=1&page_size=30&metacritic=10,50')
  const data = await res.json()
  if ('error' in data) {
    throw data.error
  }
  return data
}
const platformResponse = async () => {
  console.log(Date.now());

  const {data} = await httpGames.get('/platforms/lists/parents')
  // console.log('platform res', data);
    // const res = await fetch('https://api.rawg.io/api/platforms/lists/parents?key=c542e67aec3a4340908f9de9e86038af')
    // const data = await res.data
    // if ('error' in data) {
    //   throw data.error
    // }
    return data
}
export const getStaticProps = async ( context ) => {
  console.log('context', context);
  // const response = await fetch('https://api.rawg.io/api/games?key=c542e67aec3a4340908f9de9e86038af&page=1&page_size=10')
  console.log(Date.now());
  // const data = await gamesResponse.json()
  // const platform = await platformResponse.json()

  const res = await Promise.all([gamesResponse(), platformResponse()]).then(res => res, reas => null)
  if (!res) {
    return {
      notFound: true,
    }
  }
  const [data, platform] = res
  console.log(Date.now());


  return {
    props: { data: data, results: data.results, platformList: platform }
  }
}

const Home = ({ results, data, platformList }) => {
  const [queryP, setQuery] = useState(1)
  console.log('reload', queryP);
  return (
    <Main>
      <FilterPanel platformList={platformList} click={() => setQuery(prev => prev + 1)} />
      <ListGames results={ results } data={data} />
    </Main>
   );
  }
  // const zebra = () => {
  //   let string = ''
  //   for (let i = 0; i < 20;i++) {
  //     string += `#888888 ${(i - 0.3) * 5}%, #aaaaaa ${(i+ 0.3) * 5}%,`
  //   }
  //   return string.slice(0, -1)
  // }
  // const gradient = keyframes
  // `

  //   100% {
  //     background-position: 200% 0;
  // }
  // `

  const Main = styled.main`
    /* overflow-y: scroll; */
    height: 100%;
    background: repeating-linear-gradient(45deg, #bfbfbf 1rem, rgba(0,0,0,.3) 2rem, rgba(0,0,0,.2) 3rem,  #fcfcfc 4rem, #bfbfbf 5rem);
    background-size: 200% 200%;
    background-attachment: local;
    /* animation: ${gradient} 10s linear infinite; */
    display: grid;
    grid-template: 1fr / minmax(200px, 20%) 1fr;
    overflow: hidden;
  `
export default Home;