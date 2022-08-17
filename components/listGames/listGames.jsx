import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HeaderGame, ListContainer } from "./listGamesStyle";
import { Title } from './../../styles/customStyle'
import { getImageLinkMinified } from "../../utils/getImageLinkMinified";

const ListGames = ({ results, data }) => {
  const listContainer = useRef(null)
  const [listGames, setListGames] = useState(results)
  const [loading, setLoading] = useState(false)
  const [nextPage, setNextPage] = useState(data.next || null)

  const fetchData = async () => {
    // console.log('next page', nextPage);
    try {
      const response = await fetch(nextPage)
      const { results, next } = await response.json()
      setListGames([...listGames, ...results])
      setNextPage(next)
      setLoading(false)
    } catch (error) {
      console.log('fethdata error', error);
      setListGames([...listGames])
      setLoading(false)
    }
  }

  useEffect(() => {
    const htmlListCards = listContainer.current?.children
    const lastEllementIndex = htmlListCards.length - 1
    const options = {
      threshold: 0
    }
    const callback = (entries, observer) => {
      const enrtry = entries[0]
      if (enrtry.isIntersecting && nextPage) {
        console.log('setLoading');
        setLoading(true)
        fetchData()
      }
      if (nextPage === null) {
        observer.disconnect()
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(htmlListCards.item(lastEllementIndex))

    return function() {
      observer.disconnect()
    }
  }, [listGames])

  if (!listGames) return null
  // console.log('data', data);
  // console.log('listGames', listGames);
  return (
    <>
      <ListContainer
        ref={ listContainer }
        className='customScroll'
      >
        { listGames.map(game => {
          return (
            <li
              key={ game.id }
              className="card"
            >
              <div
                className="bg_image"
                style={ { backgroundImage: `url(${getImageLinkMinified(game.background_image)})`, backgroundSize: 'cover', backgroundPosition: 'center center' } }
              >
              </div>
              <HeaderGame>RRRRRRR</HeaderGame>
            </li>
          )
        }) }
        { loading && <Title>Loading ...</Title> }
      </ListContainer>
    </>
  );
}

export default ListGames;