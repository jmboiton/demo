import { PropsWithChildren } from "react";

type SubTitleProps = PropsWithChildren & {
  className?: string;
};

function SubTitle({ children, className }: SubTitleProps) {
  return (
    <h4
      className={`mb-8 font-condensed text-2xs uppercase tracking-[0.16em] opacity-70 md:mb-6 xl:mb-10${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </h4>
  );
}

export default SubTitle;
