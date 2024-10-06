import { Option } from "../common/components/Select";
import { Rule as RuleType } from "../types/types";

const VALUES: { [key in RuleType["field"] as string]: (string | number)[] } = {
  "": [],
  Language: ["English", "Hindi", "Gujarati", "Kanadda"],
  Rating: [5, 4, 3, 2, 1],
  Theme: ["Product Feedback", "Platform", "Offers", "Performance"],
  Reason: ["Bad service", "Not delivered in good condition"],
  "Time Period": ["1 week", "1 month", "3 months"],
  "Sub-theme": ["theme a", "theme b"],
  "Customer ID": ["123", "345", "789"],
  Source: ["twitter", "instagram", "googleads"],
};

export const useValues = (field: RuleType["field"]): Option[] => {
  const values = (VALUES[field || ""] || []).map((value) => ({
    label: value.toString(),
    value: value,
  }));

  return values;
};
