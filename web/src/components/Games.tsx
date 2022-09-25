import { useEffect, useState } from 'react';
import Carousel from 'nuka-carousel';
import getAllGames from '../api/getAllGames';
import { Game } from '../types/Game';

import GameBanner from './GameBanner';

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => setGames(await getAllGames()))();
  }, []);

  return (
    <Carousel
      wrapAround={true}
      slidesToShow={6.5}
      cellSpacing={5.5}
      withoutControls={true}
    >
      {
        games.map(({ id, bannerUrl, title, _count: { ads } }) => (

          <GameBanner
            key={id}
            bannerUrl={bannerUrl}
            adsCount={ads}
            title={title}
          />

        ))
      }
    </Carousel>
  )
};

export default Games;
