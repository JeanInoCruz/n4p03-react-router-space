import { useState } from "react";
import logo from "../assets/icons/logo.svg";
import close from "../assets/icons/icon-close.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const location = document.location.pathname;

  const links = [
    { name: "HOME", path: "/" },
    { name: "DESTINATION", path: "/destination" },
    { name: "CREW", path: "/crew" },
    { name: "TECHNOLOGY", path: "/technology" },
  ];
  return (
    <nav
      className="flex w-full absolute top-0 md:top-10 right-0
     justify-between items-center lg:pt-14 md:text-sm xl:text-base text-white z-10 pl-6 md:pl-8 md:h-20 h-24"
    >
      <Link to="/">
        <img src={logo} alt="logo" className="lg:ml-6" />
      </Link>
      <div className="hidden md:flex lg:h-24 items-center justify-between md:w-7/12 2xl:w-1/2 md:px-6 lg:px-16 xl:px-20 lg:gap-11 xl:gap-12 bg-opacity-5 rounded-l-lg backdrop-blur-lg bg-stone-100">
        {links.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setActive(index)}
            className={`border-b-4 ${index === active ? "border-white" : "border-white/50",
              location == link.path ? "border-white" : "border-transparent"
            } hover:border-white/50 md:py-6 lg:py-7`}
          >
            <span className="hidden lg:inline font-bold mr-3">0{index}</span>
            {link.name}
          </Link>
        ))}
      </div>

      {isOpen && (
        <div className="menu flex flex-col h-screen w-2/3 absolute top-0 right-0 bg-opacity-20 backdrop-blur-xl bg-stone-400 z-10 p-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden mr-6 mb-36"
          >
            <img src={close} alt="" className="w-10 absolute right-6 top-12" />
          </button>
          {links.map((link, index) => (
            <Link key={link.path} to={link.path} className="py-2">
              <span className="font-bold mr-3">0{index}</span>
              {link.name}
            </Link>
          ))}
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-6">
        <img src={hamburger} alt="" className="w-10" />
      </button>
    </nav>
  );
}
