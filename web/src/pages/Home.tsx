import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../assets/logo.svg';

import CreateAdBanner from '../components/AdBanner';
import CreateAdModal from '../components/AdModal';
import Games from '../components/Games';

const Home = () => {
  return (
    <div className='max-w-[1366px] mx-auto flex flex-col items-center px-4 sm:px-8 md:px-10 my-10 mb-20'>

      <img src={logoImg} alt='' />

      <h1 className='text-3xl font-black text-white lg:text-6xl mt-2'>
        Seu <span className='text-transparent bg-nlwGradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <Games />

      <Dialog.Root>

        <CreateAdBanner />
        <CreateAdModal />        

      </Dialog.Root>
    </div>
  );
};

export default Home;
