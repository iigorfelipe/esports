import { Check } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';

type Props = {
  useVoiceChannel: boolean;
  setUseVoiceChannel: React.Dispatch<React.SetStateAction<boolean>>;
}

const VoiceChannel = ({ useVoiceChannel, setUseVoiceChannel }: Props) => {
  return (
    <label className='mt-2 flex items-center gap-2 text-sm'>

      <Checkbox.Root
        className='w-6 h-6 p-1 rounded bg-zinc-900'
        checked={useVoiceChannel}
        onCheckedChange={(checked) => {
          if (checked === true) {
            setUseVoiceChannel(true);
          } else {
            setUseVoiceChannel(false);
          }
        }}
      >

        <Checkbox.Indicator>
          <Check className='w-4 h-4 text-emerald-400' />
        </Checkbox.Indicator>

      </Checkbox.Root>
      Costumo me conectar ao chat de voz
    </label>
  )
};

export default VoiceChannel;
