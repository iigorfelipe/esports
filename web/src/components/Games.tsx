import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import 'swiper/css';

import getAllGames from '../api/getAllGames';
import { Game } from '../types/Game';

import GameBanner from './GameBanner';

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => setGames(await getAllGames()))();
  }, []);
  
  return (
    <Swiper
      modules={[A11y]}
      className='h-full w-full'
      slidesPerView={6.5}
      spaceBetween={5.5}
      loop={true}
    >
      {
        games.map(({ id, bannerUrl, title, _count: { ads } }) => (
          <SwiperSlide>

            <GameBanner
              key={id} 
              bannerUrl={bannerUrl}
              adsCount={ads}
              title={title}
            />

          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

export default Games;
