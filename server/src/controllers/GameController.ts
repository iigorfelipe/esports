import { Request, Response } from 'express';
import GameService from '../services/GameService';
import * as H from '../helpers';

class GameController {
  private service = new GameService();

  getAllGames = async (_req: Request, res: Response) => {
    const games = await this.service.getAllGames();

    return res.json(games);
  };

  createAd = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
      name, yearsPlaying, discord, weekDays, hourStart, hourEnd, useVoiceChannel,
    } = req.body;
    
    const ad = await this.service.createAd({
      data: {
        gameId: id,
        name,
        yearsPlaying,
        discord,
        weekDays: weekDays.join(','),
        hourStart: H.convertHourStringToMinutes(hourStart),
        hourEnd: H.convertHourStringToMinutes(hourEnd),
        useVoiceChannel
      }
    });

    return res.status(201).json(ad); 
  };

  getAdsByGame = async (req: Request, res: Response) => {
    const { id } = req.params;

    const ads = await this.service.getAdsByGame(id);
  
    const adsByGame = ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: H.convertMinutesToHourString(ad.hourStart),
        hourEnd: H.convertMinutesToHourString(ad.hourEnd),
      }
    });

    return res.json(adsByGame);
  };

  getDiscordByAd = async (req: Request, res: Response) => {
    const { id } = req.params;

    const discord = await this.service.getDiscordByAd(id);

    return res.json({ discord });
  };

};

export default new GameController();
