import { SetStateAction } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

type Props = {
  weekDays: string[];
  setWeekDays: React.Dispatch<SetStateAction<string[]>>;
}

const WeekDays = ({ weekDays, setWeekDays }: Props) => {
  return (
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
  )
};

export default WeekDays;
