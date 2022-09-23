import { FormEvent, useState } from 'react';

import createAd from '../../api/createAd';

import SelectGame from './SelectGame';
import Nickname from './Nickname';
import YearsPlaying from './YearsPlaying';
import Discord from './Discord';
import WeekDays from './WeekDays';
import HourAvailable from './HourPlaying';
import VoiceChannel from './CheckBox';
import Footer from './Footer';

const Form = () => {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  const handleCreateAd = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      createAd(data.game, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel,
      });

      alert('Anúncio criado com sucesso!');
    } catch (err) {
      console.log(err);
      alert('Erro ao criar anúncio!');
    }
  }

  return (
    <form onSubmit={handleCreateAd} className='mt-4 flex flex-col gap-4'>

      <SelectGame />

      <Nickname />

      <div className='grid grid-cols gap-4'>

        <YearsPlaying />

        <Discord />

      </div>

      <div className='flex gap-4'>

        <WeekDays weekDays={weekDays} setWeekDays={setWeekDays} />

        <HourAvailable />

      </div>

      <VoiceChannel useVoiceChannel={useVoiceChannel} setUseVoiceChannel={setUseVoiceChannel} />

      <Footer />

    </form>
  )
};

export default Form;
