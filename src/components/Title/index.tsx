import { PropsWithChildren } from "react";

type TitleProps = PropsWithChildren & {
  className?: string;
};

function Title({ children, className }: TitleProps) {
  return (
    <h2
      className={`font-condensed text-3lg uppercase tracking-1 md:text-2xl md:tracking-4${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </h2>
  );
}

export default Title;
