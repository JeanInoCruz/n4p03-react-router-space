export default function Home() {
  return (
    <div className="pt-6 md:pt-10 h-screen w-screen bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover overflow-x-clip">
      <div className="mt-6 md:mt-10 lg:mt-40 lg:pt-32 flex flex-col gap-20 lg:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 md:px-24">
        <div className="flex flex-col 2gap-6 text-center lg:text-left font-Barlow+Condensed text-gray-400 w-full lg:w-[38%]">
          <h1 className="text-base md:text-xl lg:text-[1.5rem] tracking-[2.7px] md:tracking-[4px]">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h2 className="font-Bellefair text-white text-[5rem] md:text-[150px]">
            SPACE
          </h2>
          <p className="font-Barlow text-[0.9rem] md:text-base lg:text-md leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex items-center justify-center font-Bellefair">
          <div className="flex items-center justify-center bg-white text-xl md:text-[2rem] w-[9.375rem] h-[9.375rem] md:w-[17.125rem] md:h-[17.125rem] rounded-full hover:scale-110 duration-300">
            EXPLORE
          </div>
        </div>
      </div>
    </div>
  );
}
