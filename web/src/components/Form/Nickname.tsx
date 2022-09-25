import Input from './Input';

const Nickname = () => {
  return (
    <div className='flex flex-col gap-1'>

      <label htmlFor='name'>
        Seu nome (ou nickname)
      </label>

      <Input name='name' id='name' placeholder='Como te chamam dentro do game?'/>

    </div>
  )
};

export default Nickname;
