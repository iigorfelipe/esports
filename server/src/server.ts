import express from 'express';
import { PrismaClient } from '@prisma/client';
import * as H from './helpers';
 
const app = express();

app.use(express.json());

const prisma = new PrismaClient({
  log: ['query']
});

app.get('/games', async (_req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  });

  return res.json(games);
});

app.post('/games/:id/ads', async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const hourStart = H.convertHourStringToMinutes(body.hourStart);
  const hourEnd = H.convertHourStringToMinutes(body.hourEnd);

  const ad = await prisma.ad.create({
    data: {
      gameId: id,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart,
      hourEnd,
      useVoiceChannel: body.useVoiceChannel
    }
  });

  return res.status(201).json(ad); 
});

app.get('/games/:id/ads', async (req, res) => {
  const { id } = req.params;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true
    },
    where: {
      gameId: id
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return res.json(ads.map((ad) => {
    const hourStart = H.convertMinutesToHourString(ad.hourStart);
    const hourEnd = H.convertMinutesToHourString(ad.hourEnd);

    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart,
      hourEnd,
    }
  }));
});

app.get('/ads/:id/discord', async (req, res) => {
  const { id } = req.params;

  const ad = await prisma.ad.findUniqueOrThrow ({
    select: {
      discord: true
    },
    where: {
      id,
    }
  });

  return res.status(201).json({
    discord: ad.discord
  });
});

app.listen(3001);
