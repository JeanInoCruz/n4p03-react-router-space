import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover text-white items-center justify-center p-9">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-Bellefair">Error 404</h1>
        <p>
          You seem lost... <br /> The requested url does not exist. You can
          click below to go back home
        </p>
        <Link
          to="/"
          className="mx-auto py-4 px-8 rounded-md bg-black/30 hover:bg-white/30 font-bold transition-all duration-1000"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
