import { FC } from "react";
import { RuleGroup } from "../types/types";

const SUPPORTED_CONJUNCTIONS: Array<RuleGroup["conjunction"]> = ["AND", "OR"];

export const Conjunction: FC<{
  activeConjunction: RuleGroup["conjunction"];
  updateConjunction: (conjunction: RuleGroup["conjunction"]) => void;
}> = ({ activeConjunction, updateConjunction }) => {
  const handleClick = (conjunction: RuleGroup["conjunction"]) => {
    updateConjunction(conjunction);
  };

  return (
    <div className="inline-flex rounded-md uppercase font-semibold text-center text-sm text-white bg-slate-800 border-slate-600">
      {SUPPORTED_CONJUNCTIONS.map((conjunction) => {
        return (
          <div
            onClick={() => handleClick(conjunction as RuleGroup["conjunction"])}
            className={`cursor-pointer rounded-lg w-14 ${
              activeConjunction === conjunction
                ? "bg-blue-600"
                : "bg-transparent"
            } p-2`}
          >
            {conjunction}
          </div>
        );
      })}
    </div>
  );
};
