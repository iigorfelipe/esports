import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className='bg-zinc-900 py-2 px-4 rounded text-sm placeholder:text-zinc-500'
    />
  )
};

export default Input;
