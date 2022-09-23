import { useEffect, useState } from 'react';

import getAllGames from '../api/getAllGames';
import { Game } from '../types/Game';

import GameBanner from './GameBanner';

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => setGames(await getAllGames()))();
  }, []);
  
  return (
    <div className="grid grid-cols-6 gap-6 mt-16">

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

    </div>
  )
};

export default Games;
