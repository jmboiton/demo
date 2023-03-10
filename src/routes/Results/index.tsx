import { useNavigate } from "react-router-dom";
import ButtonLink from "components/ButtonLink";
import Progress from "components/Progress";
import BestMatch from "components/BestMatch";

function Results() {
  const navigate = useNavigate();

  return (
    <div className="animated-fade-in w-full py-7 pb-16 md:pb-0">
      <div>
        <Progress current={6} className="mb-8 md:mb-13 xl:mb-16" />
        <h2 className="mb-2 px-6 text-center font-condensed text-5lg uppercase leading-2tight tracking-1 md:mb-6 md:text-4xl md:leading-tighter md:tracking-4">
          Meet your new
          <br className="lg:hidden" /> favorite coffee.
        </h2>
        <p className="mb-4 px-7 text-center text-2sm md:mb-6">
          Here’s what we recommend for your busy days, quiet moments, and
          upcoming adventures.
        </p>
        <div className="mb-7 text-center xl:mb-11">
          <ButtonLink className="mx-3 xl:mx-7">Email my results</ButtonLink>
          <ButtonLink className="mx-3 xl:mx-7" onClick={() => navigate("/")}>
            Retake the quiz
          </ButtonLink>
        </div>
        <div className="mx-auto mb-24 px-6 lg:container">
          <BestMatch />
        </div>
      </div>
      <div className="h-24 bg-black"></div>
    </div>
  );
}

export default Results;
