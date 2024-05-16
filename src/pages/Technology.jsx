import { useEffect, useState } from "react";
import vehicle_portrait from "../assets/images/technology/image-launch-vehicle-portrait.jpg";
import vehicle_landscape from "../assets/images/technology/image-launch-vehicle-landscape.jpg";
import capsule_portrait from "../assets/images/technology/image-space-capsule-portrait.jpg";
import capsule_landscape from "../assets/images/technology/image-space-capsule-landscape.jpg";
import port_landscape from "../assets/images/technology/image-spaceport-landscape.jpg";
import port_portrait from "../assets/images/technology/image-spaceport-portrait.jpg";
import data from "../data/data.json";

export default function Technology() {
  const [active, setActive] = useState(0);

  const image = [
    {
      portrait: vehicle_portrait,
      landscape: vehicle_landscape,
      alt: "space vehicle",
    },
    {
      portrait: port_portrait,
      landscape: port_landscape,
      alt: "space port photo",
    },
    {
      portrait: capsule_portrait,
      landscape: capsule_landscape,
      alt: "space capsule",
    },
  ];

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const array_length = data.technology.length;
      setActive((active) => (active + 1) % array_length);
    }, 10000);
    return () => clearTimeout(timeOut);
  }, [active]);

  return (
    <div className="pt-6 md:pt-10 h-screen w-screen bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover bg-no-repeat overflow-clip">
      <div className="lg:pl-24 xl:pl-36 max-w-[1440px] mx-auto">
        <h1 className="text-white text-base md:text-[1.75rem] text-center md:text-left font-Barlow+Condensed my-10 md:ml-8 lg:mmy-0 lg:ml-0 lg:mt-36">
          <span className="opacity-30 mr-3">03</span>SPACE LAUNCH 101
        </h1>
        <div className="lg:hidden">
          <img
            src={image[active].landscape}
            alt="space launch vehicle"
            className="align-right w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 text-white xl:justify-between">
          <div className="flex items-center lg:w-3/5">
            <div className="flex flex-col  w-full text-center lg:text-left lg:flex-row gap-12">
              <div className="flex lg:flex-col mt-8 lg:mt-0 justify-center gap-2 lg:justify-around font-Bellefair">
                {[1, 2, 3].map((btn, index) => (
                  <button
                    key={btn.toString()}
                    onClick={() => setActive(index)}
                    className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full ${
                      active == index ? "bg-white text-black" : "text-white"
                    } border border-white/50 hover:border-white text-base md:text-[1.9rem]`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              <div className="grid md:gap-8 text-gray-300 h-[1v8.75rem] px-8 lg:px-0">
                <h2 className="text-sm md:text-base lg:text-2xl font-Barlow+Condensed tracking-[2.7px]">
                  THE TERMINOLOGY ...
                </h2>
                <h3 className="text-white font-Bellefair text-2xl md:text-[2.5rem] lg:text-[3.4rem] uppercase leading-[3rem]">
                  {data.technology[active].name}
                </h3>
                <p className="text-[15px] text-center lg:text-left md:text-base lg:text-lg opacity-60 font-Barlow md:leading-[1.5rem] lg:leading-[2rem] shrink max-w-[29rem] mx-auto">
                  {data.technology[active].description}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-2/5">
            <img
              src={image[active].portrait}
              alt="space launch vehicle"
              className="-pr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
