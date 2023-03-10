import baristaIcon from "assets/pretty-much-a-barista-desktop.svg";
import { Link } from "react-router-dom";

function Barista() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center pb-16 md:pb-0">
      <div className="animated-bg absolute top-0 bottom-0 z-1 h-full w-screen bg-green-100"></div>
      <div className="z-2 md:pt-20">
        <div className="py-4 px-6 text-center">
          <div className="animated-slide-down mb-2 flex justify-center">
            <img src={baristaIcon} alt="pretty-much-a-barista" />
          </div>
          <p className="animated-slide-up tracking-2 md:text-xl md:tracking-3">
            We’ll find coffee
            <br className="md:hidden" /> that’s on your level.
          </p>
        </div>
      </div>
      <div className="animated-slide-up fixed left-0 right-0 bottom-0 z-2 md:relative md:left-auto md:right-auto md:bottom-auto md:mt-20">
        <Link
          to="/q2"
          className="tracking-5 block bg-black p-5 text-center font-condensed text-sm uppercase text-white transition-colors hover:bg-white hover:text-black md:inline-block md:rounded md:py-3 md:px-4"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Barista;
