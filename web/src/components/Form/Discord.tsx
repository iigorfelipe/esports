import Input from "./Input";

const Discord = () => {
  return (
    <div className='flex flex-col gap-1'>

      <label htmlFor='discord'>
        Qual seu Discord?
      </label>

      <Input name='discord' id='discord' type='text' placeholder='Usuário#0000'/>

    </div>
  )
};

export default Discord;
