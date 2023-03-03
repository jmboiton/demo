import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return (
    <header className="w-full bg-black py-13 px-8">
      <div className="font-condensed text-4lg font-bold text-white md:text-3xl">
        <div className="relative flex items-center justify-between md:justify-center md:px-9 xl:px-12">
          <h1 className="block">{children}</h1>
          <div className="inline-block w-8 cursor-pointer md:absolute md:top-1/2 md:right-0 md:w-9 md:-translate-y-1/2 xl:w-12">
            <div className="mb-2.5 h-[0.1875rem] w-8 bg-white md:w-9 xl:w-12"></div>
            <div className="mb-2.5 h-[0.1875rem] w-8 bg-white md:w-9 xl:w-12"></div>
            <div className="h-[0.1875rem] w-8 bg-white md:w-9 xl:w-12"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
