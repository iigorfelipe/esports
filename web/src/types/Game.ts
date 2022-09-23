export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export interface GameBannerProps {
  bannerUrl: string;
  adsCount: number,
  title: string,
}