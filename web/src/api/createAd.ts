import api from '.';
import { AdPost } from '../types/Ad';

const createAd = async (id: FormDataEntryValue, obj: AdPost) => {
  const { data } = await api.post(`/games${id}/ads`, obj);

  return data;
};

export default createAd;
