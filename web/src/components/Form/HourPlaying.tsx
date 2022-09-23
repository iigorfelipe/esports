import Input from './Input';

const HourAvailable = () => {
  return (
    <div className='flex flex-col gap-2 flex-1'>

      <label htmlFor='hourStart'>
        Qual horário do dia?
      </label>

      <div className='grid grid-cols-2 gap-2'>
        <Input name='hourStart' id='hourStart' type='time' placeholder='De' />
        <Input name='hourEnd' id='hourEnd' type='time' placeholder='Até' />
      </div>

    </div>
  )
};

export default HourAvailable;
