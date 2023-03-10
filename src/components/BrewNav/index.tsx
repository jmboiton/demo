import type { OptionValue } from "components/OptionCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type BrewNavProps = {
  brewMethod: OptionValue;
};

function BrewNav({ brewMethod }: BrewNavProps) {
  const [className, setClassName] = useState("translate-y-full opacity-0");

  useEffect(() => {
    setClassName("");
  }, []);

  return (
    <div
      className={`${className} duration-350 fixed left-0 right-0 bottom-0 z-2 text-center transition ease-in-out md:relative md:left-auto md:right-auto md:bottom-auto md:my-20 xl:mt-10`}
    >
      <Link
        to="/results"
        state={{ brewMethod }}
        className="block bg-black p-5 text-center font-condensed text-sm uppercase tracking-5 text-white transition-colors hover:bg-white hover:text-black md:inline-block md:rounded md:py-3 md:px-4"
      >
        Continue
      </Link>
    </div>
  );
}

export default BrewNav;
