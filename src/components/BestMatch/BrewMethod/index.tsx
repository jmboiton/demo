import SubTitle from "components/BestMatch/SubTitle";
import brewOptionsData from "components/BrewOptions/brew-options-data";
import type { OptionValue } from "components/OptionCard";
import { useLocation } from "react-router-dom";
import startsWithVowel from "utils/startsWithVowel";

interface LocationParams {
  state: {
    brewMethod: OptionValue;
  };
}

function BrewMethod() {
  const { state } = useLocation() as LocationParams;
  const brewMethod = state && state.brewMethod;

  if (!brewMethod) {
    return null;
  }

  const brewData = brewOptionsData.find(
    (option) => option.value === brewMethod
  );

  if (!brewData) {
    return null;
  }

  const article = startsWithVowel(brewMethod)
    ? "an"
    : brewMethod === "pods"
    ? ""
    : "a";

  return (
    <div className="px-6 py-10 md:py-6">
      <SubTitle>brew method</SubTitle>
      <div className="flex items-center md:flex-col">
        <div className="mr-4 flex h-21 w-21 shrink-0 grow-0 basis-21 items-center justify-center md:mr-0 md:mb-4">
          <img src={brewData.img.src} alt={brewData.img.alt} />
        </div>
        <p className="text-2sm tracking-2 md:text-center">
          Brews a delicious cup with {article} {brewData.label.toLowerCase()}
        </p>
      </div>
    </div>
  );
}

export default BrewMethod;
