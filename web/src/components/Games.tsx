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




// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { A11y } from 'swiper';
// import 'swiper/css';

// import getAllGames from '../api/getAllGames';
// import { Game } from '../types/Game';

// import GameBanner from './GameBanner';

// const Games = () => {
//   const [games, setGames] = useState<Game[]>([]);

//   useEffect(() => {
//     (async () => setGames(await getAllGames()))();
//   }, []);
  
//   return (
//     <Swiper
//       modules={[A11y]}
//       className='h-full w-full'
//       slidesPerView={6.5}
//       spaceBetween={5.5}
//       loop={true}
//     >
//       {
//         games.map(({ id, bannerUrl, title, _count: { ads } }) => (
//           <SwiperSlide key={id}>

//             <GameBanner
//               bannerUrl={bannerUrl}
//               adsCount={ads}
//               title={title}
//             />

//           </SwiperSlide>
//         ))
//       }
//     </Swiper>
//   )
// };

// export default Games;
