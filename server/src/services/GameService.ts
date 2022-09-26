import { PrismaClient } from '@prisma/client';

class GameService {
  private prisma = new PrismaClient();

  getAllGames = async () => {
    const games = await this.prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true
          }
        }
      }
    });

    return games;
  };

  createAd = async (data: any) => {
    const ad = await this.prisma.ad.create(data);

    return ad;
  };

  getAdsByGame = async (id: string) => {  
    const ads = await this.prisma.ad.findMany({
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

    return ads;
  };

  getDiscordByAd = async (id: string) => {
    const ad = await this.prisma.ad.findUniqueOrThrow ({
      select: {
        discord: true
      },
      where: {
        id,
      }
    });

    return ad;
  };
};

export default GameService;
