import Input from './Input';

const YearsPlaying = () => {
  return (
    <div className='flex flex-col gap-2'>

      <label htmlFor='yearsPlaying'>
        Joga há quantos anos?
      </label>

      <Input name='yearsPlaying' id='yearsPlaying' type='number' placeholder='Tudo bem ser ZERO'/>

    </div>
  )
};

export default YearsPlaying;
