import { useEffect, useState } from 'react';
import { Game } from '../../types/Game';
import getAllGames from '../../api/getAllGames';

const SelectGame = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => setGames(await getAllGames()))();
  }, []);

  return (
    <div className='flex flex-col gap-2'>

      <label htmlFor='game' className='font-semibold'>
        Qual o game?
      </label>

      <select
        id='game'
        name='game'
        className='bg-zinc-900 py-2 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none'
        defaultValue=''
      >
        <option disabled value=''>
          Selecione o game que deseja jogar
        </option>

        {
          games.map((game) => (
            <option key={game.id} value={game.id}>
              {game.title}
            </option>
          ))
        }

      </select>

    </div>
  )
};

export default SelectGame;
