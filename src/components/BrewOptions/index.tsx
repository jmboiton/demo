import OptionCard from "components/OptionCard";
import brewOptionsData from "components/BrewOptions/brew-options-data";

type BrewOptionsProps = {
  optionSelected: null | string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function BrewOptions({ optionSelected, onChange }: BrewOptionsProps) {
  return (
    <div className="container mx-auto mb-9 flex flex-wrap justify-center px-6 xl:relative xl:min-h-[240px]">
      {brewOptionsData.map((option) => (
        <OptionCard
          key={option.label}
          {...option}
          checked={option.value === optionSelected}
          optionSelected={optionSelected}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export default BrewOptions;
