export type OptionValue =
  | "coffee-maker"
  | "french-press"
  | "pour-over"
  | "aeropress"
  | "espresso"
  | "pods"
  | "moka-pot";

export type OptionType = {
  bgColor: string;
  img: {
    src: string;
    alt: string;
  };
  label: string;
  value: OptionValue;
  className?: string;
};

export type OptionCardProps = OptionType & {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  optionSelected: string | null;
};

function OptionCard({
  bgColor,
  img: { src, alt },
  label,
  value,
  onChange,
  checked,
  optionSelected,
  className,
}: OptionCardProps) {
  let cardColor = bgColor;
  let hoverStyle = "hover:bg-white";
  let cardOpacity = "";

  if (optionSelected) {
    if (checked) {
      hoverStyle = "";
    } else {
      cardColor = "bg-beige-200";
      cardOpacity = "opacity-50";
    }
  }

  return (
    <div
      className={`animated-card w-38 basis-1/2 origin-bottom p-[0.3125rem] md:basis-38 xl:absolute xl:pb-[2200px] transition-transform${
        className ? ` ${className}` : ""
      }`}
    >
      <label
        className={`${cardColor} ${cardOpacity} ${hoverStyle} relative block cursor-pointer p-5 px-6 text-center transition-colors duration-300 ease-in-out`}
      >
        <input
          type="radio"
          name="brew-method"
          value={value}
          onChange={onChange}
          checked={checked}
          className="absolute top-1/2 left-1/2 -z-1 appearance-none"
        />
        <div className="mb-3 flex justify-center">
          <img src={src} alt={alt} className="h-12 md:h-20" />
        </div>
        <p className="mb-3 text-2sm md:text-xs">{label}</p>
      </label>
    </div>
  );
}

export default OptionCard;
