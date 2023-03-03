import Product from "components/BestMatch/Product";
import SubTitle from "components/BestMatch/SubTitle";
import BrewMethod from "components/BestMatch/BrewMethod";
import lipsIcon from "assets/lips.svg";
import roastLevelIcon from "assets/roast-level.svg";
import sippingIcon from "assets/sipping-style.svg";

function BestMatch() {
  return (
    <div className="divide-y divide-dashed divide-black/50 bg-black/5 xl:flex xl:divide-y-0 xl:divide-x">
      <Product />
      <div className="divide-y divide-dashed divide-black/50 xl:flex xl:flex-col">
        <div className="px-6 py-10 md:py-6">
          <SubTitle>Why you’ll love it</SubTitle>
          <p className="text-center font-condensed uppercase leading-tighter tracking-1 md:text-2lg md:leading-[1.2] md:tracking-4 xl:mb-4">
            If you’ve ever taken a bite from a ripe red apple,
            <br className="hidden md:block" /> you’ll know the way this coffee
            tastes.{" "}
          </p>
        </div>
        <div className="divide-y divide-dashed divide-black/50 md:grid md:grid-cols-4 md:divide-y-0 md:divide-x xl:flex-grow">
          <div className="px-6 py-10 md:py-6">
            <SubTitle>Tasting Notes</SubTitle>
            <div className="flex items-center md:flex-col">
              <div className="mr-4 flex h-21 w-21 shrink-0 grow-0 basis-21 items-center justify-center md:mr-0 md:mb-4">
                <img src={lipsIcon} alt="Lips Tasting" width="63" />
              </div>
              <p className="text-2sm tracking-2 md:text-center">
                Red Apple, Lemongrass, Malt Chocolate
              </p>
            </div>
          </div>
          <div className="px-6 py-10 md:py-6">
            <SubTitle>roast level</SubTitle>
            <div className="flex items-center md:flex-col">
              <div className="mr-4 flex h-21 w-21 shrink-0 grow-0 basis-21 items-center justify-center md:mr-0 md:mb-4">
                <img
                  src={roastLevelIcon}
                  alt="Roast Level 5/10"
                  width="70"
                  height="70"
                />
              </div>
              <p className="text-2sm tracking-2 md:text-center">Medium</p>
            </div>
          </div>
          <div className="px-6 py-10 md:py-6">
            <SubTitle>sipping style</SubTitle>
            <div className="flex items-center md:flex-col">
              <div className="mr-4 flex h-21 w-21 shrink-0 grow-0 basis-21 items-center justify-center md:mr-0 md:mb-4">
                <img src={sippingIcon} alt="Sipping Style" width="77" />
              </div>
              <p className="text-2sm tracking-2 md:text-center">
                Great with milk/cream
              </p>
            </div>
          </div>
          <BrewMethod />
        </div>
      </div>
    </div>
  );
}

export default BestMatch;
