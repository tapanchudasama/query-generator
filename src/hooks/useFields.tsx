import { Option } from "../common/components/Select";
import { Rule as RuleType } from "../types/types";

const FIELDS: Array<RuleType["field"]> = [
  "Theme",
  "Sub-theme",
  "Reason",
  "Language",
  "Source",
  "Rating",
  "Time Period",
  "Customer ID",
];

export const useFields = (): Option[] => {
  const fields = FIELDS.filter((field) => !!field).map((field) => ({
    label: field,
    value: field,
  })) as Option[];

  return fields;
};
