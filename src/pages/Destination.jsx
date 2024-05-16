import { useState, useEffect } from "react";
import moon from "../assets/images/destination/image-moon.png";
import mars from "../assets/images/destination/image-mars.png";
import europa from "../assets/images/destination/image-europa.png";
import titan from "../assets/images/destination/image-titan.png";
import data from "../data/data.json";

export default function Destination() {
  const [active, setActive] = useState(0);
  const images = [moon, mars, europa, titan];

  useEffect(() => {
    const timer_update = setTimeout(() => {
      const data_copy = data.destinations;
      setActive((index) => (index + 1) % data_copy.length);
    }, 10000);

    return () => clearTimeout(timer_update);
  }, [active]);

  return (
    <div className="w-screen lg:h-screen pb-5 lg:pt-10 bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover md:overflow-clip">
      <div className="flex flex-col gap-10 xl:gap-16 md:px-16 lg:px-20 xl:px-36 lg:mt-36 items-center justify-between max-w-[1440px] mx-auto text-gray-300">
        <h1 className="w-full lxg:pb-10 text-white text-base md:text-[1.75rem] font-Barlow+Condensed mt-10 pl-8 lg:my-0 lg:ml-0 lg:mct-36 xl:mb-24x">
          <span className="opacity-30 mr-3">01</span>PICK YOUR DESTINATION
        </h1>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-10 h-4/5x w-full px-6 md:px-20x">
          <div className="flex items-center w-full px-8 md:px-0">
            <img
              src={images[active]}
              alt={data.destinations[active].name}
              className="object-contain animate-[spin_130s_linear_infinite] mx-auto"
            />
          </div>
          <div className="grid gap-1 lg:gap-10 xl:gap-16 w-full lg:mt-10 text-center lg:text-left">
            <div className="flex justify-between w-full md:w-3/5 mx-auto lg:w-full">
              {data.destinations.map((dest, index) => (
                <button
                  key={dest.name}
                  onClick={() => setActive(index)}
                  className={`border-b-4 pb-3 uppercase ${
                    index === active ? "border-white" : "border-white/50"
                  } hover:border-white tracking-[2.7px]`}
                >
                  {dest.name}
                </button>
              ))}
            </div>
            <div className="border-b border-white/30 py-10 mb-10 lg:mb-0 w-full">
              <h3 className="text-white font-Bellefair text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.25rem] mb-6 uppercase leading-[3rem]">
                {data.destinations[active].name}
              </h3>
              <p className="text-[15px] text-center lg:text-left md:text-base lg:text-lg opacity-60 font-Barlow md:leading-[1.5rem] lg:leading-[2rem] shrink m=x-w-[29rem] mx-auto lg:mx-0">
                {data.destinations[active].description}
              </p>
            </div>
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between w-4/5 mx-auto lg:w-full text-white">
              <div className="">
                <p className="uppercase text-sm tracking-[2.362px] opacity-50 font-Barlow+Condensed">
                  Avg. distance
                </p>
                <p className="font-Bellefair text-[1.75rem] pt-2 uppercase">
                  {data.destinations[active].distance}
                </p>
              </div>
              <div className="">
                <p className="uppercase text-sm tracking-[2.362px] opacity-50 font-Barlow+Condensed">
                  Est. travel time
                </p>
                <p className="font-Bellefair text-[1.75rem] pt-2 uppercase">
                  {data.destinations[active].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
