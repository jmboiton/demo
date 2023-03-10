import { PropsWithChildren } from "react";

type StepProps = PropsWithChildren & {
  variant?: string;
};

function Step({ variant, children }: StepProps) {
  let variantClasses = "";
  switch (variant) {
    case "active":
      variantClasses = "border-yellow bg-yellow text-white";
      break;
    case "completed":
      variantClasses = "border-black bg-black text-white";
      break;
    default:
      variantClasses = "border-black bg-white";
      break;
  }
  return (
    <div
      className={`flex h-6 w-6 items-center justify-center rounded-full border ${variantClasses}`}
    >
      <span className="font-condensed text-xs font-bold tracking-2">
        {children}
      </span>
    </div>
  );
}

export default Step;
