import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonLinkProps = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonLink({ children, onClick, type, className }: ButtonLinkProps) {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={`relative pb-1 text-lg after:absolute after:left-0 after:right-0 after:bottom-0 after:block after:border-b after:border-black hover:after:border-green-200 hover:text-green-200${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </button>
  );
}

export default ButtonLink;
