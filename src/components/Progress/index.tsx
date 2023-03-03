import Step from "components/Step";

type ProgressProps = {
  className?: string;
  current: number;
};

const steps = [1, 2, 3, 4, 5, 6];

function Progress({ className, current }: ProgressProps) {
  return (
    <div
      className={`flex justify-center gap-4 md:gap-8${
        className ? ` ${className}` : ""
      }`}
    >
      {steps.map((value) => {
        const variant =
          current === value ? "active" : current > value ? "completed" : "";

        return (
          <Step key={value} variant={variant}>
            {value}
          </Step>
        );
      })}
    </div>
  );
}

export default Progress;
