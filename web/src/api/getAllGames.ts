import api from '.';
import { Game } from '../types/Game';

const getAllGames = async () => { 
  const { data } = await api.get<Game[]>('/games');

  return data;
};

export default getAllGames;