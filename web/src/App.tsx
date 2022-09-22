import './styles/main.css';
import logoImg from './assets/logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/AdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import CreateAdModal from './components/AdModal';
import axios from 'axios';

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('https://esports-backend.herokuapp.com/games')
      .then((response) => setGames(response.data))
  }, []);

  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center my-9'>
      <img src={logoImg} alt='' />

      <h1 className='text-6xl text-white font-black mt-12'>
        Seu <span className='text-transparent bg-nlwGradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-12'>
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

      <Dialog.Root>

        <CreateAdBanner />
        <CreateAdModal />        

      </Dialog.Root>

    </div>
  );
};

export default App;
