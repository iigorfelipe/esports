import { SetStateAction } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { days } from '../../helpers/weekDays';

type Props = {
  weekDays: string[];
  setWeekDays: React.Dispatch<SetStateAction<string[]>>;
}

const WeekDays = ({ weekDays, setWeekDays }: Props) => {
  return (
    <div className='flex flex-col gap-2'>

      <label htmlFor='weekDays'>
        Quando costuma jogar?
      </label>

      <ToggleGroup.Root
        type='multiple'
        className='grid grid-cols-4 gap-2'
        value={weekDays}
        onValueChange={setWeekDays}
      >

        {
          days.map(({ value, title, text}) => (
            <ToggleGroup.Item
              value={value}
              title={title}
              className={
                `w-10 h-6 rounded ${
                  weekDays.includes(value)
                    ? 'bg-violet-500'
                    : 'bg-zinc-900'
                }`
              }
            >
              {text}
            </ToggleGroup.Item>
          ))
        }

      </ToggleGroup.Root>

    </div>
  )
};

export default WeekDays;
