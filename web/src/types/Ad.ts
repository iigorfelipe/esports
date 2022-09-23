export interface Ad {
  name: string,
  yearsPlaying: number,
  discord: string,
  weekDays: string[],
  hourStart: string,
  hourEnd: string,
  useVoiceChannel: boolean
}

export interface AdPost {
  name: FormDataEntryValue;
  yearsPlaying: number;
  discord: FormDataEntryValue;
  weekDays: number[];
  hourStart: FormDataEntryValue;
  hourEnd: FormDataEntryValue;
  useVoiceChannel: boolean;
}
