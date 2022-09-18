interface GameBannerProps {
  bannerUrl: string;
  adsCount: number,
  title: string,
}

const GameBanner = ({ bannerUrl, adsCount, title }: GameBannerProps) => {
  return (
    <a href='' className='relative rounded-lg overflow-hidden'>

      <img src={bannerUrl} alt="" />

      <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>

        <strong className='font-bold text-white block'>
          {title}
        </strong>

        <span className='text-zinc-300 text-sm block'>
          {adsCount} anúncio(s)
        </span>

      </div>
    </a>
  )
};

export default GameBanner