import ButtonLink from "components/ButtonLink";
import Progress from "components/Progress";
import BrewNav from "components/BrewNav";
import BrewOptions from "components/BrewOptions";
import Title from "components/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { OptionValue } from "components/OptionCard";

type OptionSelectedType = OptionValue | null;

function BrewQuestion() {
  const navigate = useNavigate();
  const [optionSelected, setOptionSelected] =
    useState<OptionSelectedType>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionSelected(event.target.value as OptionValue);
  };

  return (
    <div className="animated-fade-in w-full py-7 pb-16 md:pb-0">
      <div>
        <Progress current={2} className="mb-8" />
        <Title className="mb-8 px-4 text-center">
          How do you brew at home?
        </Title>
      </div>

      <BrewOptions
        optionSelected={optionSelected}
        onChange={handleOptionChange}
      />

      {optionSelected && <BrewNav brewMethod={optionSelected} />}

      <div className="container mx-auto flex justify-between p-6 md:mt-16 md:pb-8">
        <ButtonLink
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="inline-block pr-2">
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10L0.999999 5.5L5 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Back
        </ButtonLink>

        <ButtonLink>
          Why it matters <span className="inline-block pl-2">+</span>
        </ButtonLink>
      </div>
    </div>
  );
}

export default BrewQuestion;
