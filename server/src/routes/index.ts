import { Router } from 'express';
import GameController from '../controllers/GameController';

const route = Router();

route.get('/games', GameController.getAllGames);

route.post('/games/:id/ads', GameController.createAd);

route.get('/games/:id/ads', GameController.getAdsByGame);

route.get('/ads/:id/discord', GameController.getDiscordByAd);

export default route;
