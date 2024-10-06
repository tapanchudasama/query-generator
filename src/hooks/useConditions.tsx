import { Option } from "../common/components/Select";
import { Rule as RuleType } from "../types/types";

const CONDITIONS: Array<RuleType["condition"]> = [
  "Equals",
  "Does not equal",
  "Like",
  "Not like",
  "Is Empty",
  "Is",
  "Is not",
];
export const useConditions = (): Option[] => {
  const conditions = CONDITIONS.filter((condition) => !!condition).map(
    (condition) => ({
      label: condition,
      value: condition,
    })
  ) as Option[];

  return conditions;
};
