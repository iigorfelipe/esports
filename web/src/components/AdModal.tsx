import { Check, GameController } from 'phosphor-react';
import Input from './Form/input';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useEffect, useState } from 'react';
import { Game } from '../App';

const CreateAdModal = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/games')
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, []);

  return (
    <Dialog.Portal>

      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

      <Dialog.Content className='fixed bg-[#2A2634] py-4 px-6 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>

        <Dialog.Title className='text-3xl font-black'>
          Publique um anúncio
        </Dialog.Title>

          <form className='mt-4 flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
              <label htmlFor='game' className='font-semibold'>Qual o game?</label>
              <select
                id='game'
                className='bg-zinc-900 py-2 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none'
                defaultValue=''
              >
                <option disabled value="">Selecione o game que deseja jogar</option>
                {
                  games.map((game) => (
                    <option key={game.id} value={game.id}>
                      {game.title}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>Seu nome (ou nickname)</label>
              <Input id='name' placeholder='Como te chamam dentro do game?'/>
            </div>

            <div className='grid grid-cols gap-4'>

              <div className='flex flex-col gap-2'>
                <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                <Input id='yearsPlaying' type='number' placeholder='Tudo bem ser ZERO'/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='discord'>Qual seu Discord?</label>
                <Input id='discord' type='text' placeholder='Usuário#0000'/>
              </div>

            </div>

            <div className='flex gap-4'>

              <div className='flex flex-col gap-2'>
                <label htmlFor='weekDays'>Quando costuma jogar?</label>

                <ToggleGroup.Root
                  type='multiple'
                  className='grid grid-cols-4 gap-2'
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item
                    value='0'
                    title='Domingo'
                    className={
                      `w-6 h-6 rounded ${
                        weekDays.includes('0')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`
                    }
                  >
                    D
                  </ToggleGroup.Item>
                  
                  <ToggleGroup.Item
                    value='1'
                    title='Segundo'
                    className={
                      `w-6 h-6 rounded ${
                        weekDays.includes('1')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`
                    }
                  >
                    S
                  </ToggleGroup.Item>
                  
                  <ToggleGroup.Item
                    value='2'
                    title='Terça'
                    className={
                      `w-6 h-6 rounded ${
                        weekDays.includes('2')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`
                    }
                  >
                    T
                  </ToggleGroup.Item>
                  
                  <ToggleGroup.Item
                    value='3'
                    title='Quarta'
                    className={
                      `w-6 h-6 rounded ${
                        weekDays.includes('3')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`
                    }
                  >
                    Q
                  </ToggleGroup.Item>
                  
                  <ToggleGroup.Item
                    value='4'
                    title='Quinta'
                    className={
                      `w-6 h-6 rounded ${
                        weekDays.includes('4')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`
                    }
                  >
                    Q
                  </ToggleGroup.Item>
                  
                  <ToggleGroup.Item
                    value='5'
                    title='Sexta'
                    className={
                      `w-6 h-6 rounded ${
                        weekDays.includes('5')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`
                    }
                  >
                    S
                  </ToggleGroup.Item>
                  
                  <ToggleGroup.Item
                    value='6'
                    title='Sábado'
                    className={
                      `w-6 h-6 rounded ${
                        weekDays.includes('6')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`
                    }
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>

              </div>

              <div className='flex flex-col gap-2 flex-1'>

                <label htmlFor='hourStart'>Qual horário do dia?</label>
                <div className='grid grid-cols-2 gap-2'>
                  <Input id='hourStart' type='time' placeholder='De' />
                  <Input id='hourEnd' type='time' placeholder='Até' />
                </div>

              </div>

            </div>

            <label className='mt-2 flex items-center gap-2 text-sm'>
              <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900'>

                <Checkbox.Indicator>
                  <Check className='w-4 h-4 text-emerald-400' />
                </Checkbox.Indicator>

              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </label>

            <footer className='mt-2 flex justify-end gap-4'>

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

          </form>

      </Dialog.Content>

    </Dialog.Portal>
  )
};

export default CreateAdModal;
