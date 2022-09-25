import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

const Footer = () => {
  return (
    <footer className='mt-1 flex justify-end gap-4'>

      <Dialog.Close
        type='button'
        className='bg-zinc-500 px-4 h-10 rounded-md font-semibold hover:bg-zinc-600'
      >
        Cancelar
      </Dialog.Close>

      <button
        type='submit'
        className='bg-violet-500 px-4 h-10 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
      >
        <GameController size={24}/>
        Encontrar duo
      </button>

    </footer>
  )
};

export default Footer;
