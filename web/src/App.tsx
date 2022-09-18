import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';
import logoImg from './assets/logo.svg';
import GameBanner from './components/GameBanner';

const App = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center my-9'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-12'>
        Seu <span className='text-transparent bg-nlwGradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-12'>
        <GameBanner bannerUrl="/game-1.png" adsCount={4} title="League of Legends" />
        <GameBanner bannerUrl="/game-2.png" adsCount={4} title="Dota 2" />
        <GameBanner bannerUrl="/game-3.png" adsCount={4} title="Counter Strike" />
        <GameBanner bannerUrl="/game-4.png" adsCount={4} title="Apex Legends" />
        <GameBanner bannerUrl="/game-5.png" adsCount={4} title="Fortnite" />
        <GameBanner bannerUrl="/game-6.png" adsCount={4} title="World of WarCraft" />
      </div>

      <div className='pt-1 bg-nlwGradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>

          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique seu anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
