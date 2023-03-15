import { useState } from "react";
import getCSV from "./getCSV";
import questionsData from "./questions-data";

function QuestionsToCSV() {
  const [number, setNumber] = useState<null | number>(null);
  return (
    <div>
      <h2 className="my-10 font-condensed text-3lg font-bold uppercase">
        Task 3: Javascript Logic
      </h2>
      <div className="my-12 text-center">
        <button
          type="button"
          onClick={() => setNumber(getCSV(questionsData))}
          className="inline-block rounded bg-black p-5 py-3 px-4 text-center font-condensed text-sm uppercase tracking-5 text-white transition-colors hover:bg-white hover:text-black"
        >
          Generate CSV
        </button>
        {number && (
          <p className="p-5 text-center font-bold">
            Total number of combinations {number}
          </p>
        )}
      </div>
    </div>
  );
}

export default QuestionsToCSV;
