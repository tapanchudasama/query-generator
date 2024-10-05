import { FC, useEffect } from "react";
import { Option, Select } from "../common/components/Select";
import { Rule as RuleType } from "../types/types";
import { DeleteIcon } from "../common/components/DeleteIcon";

const CONDITIONS: Array<RuleType["condition"]> = [
  "Equals",
  "Does not equal",
  "Like",
  "Not like",
  "Is Empty",
  "Is",
  "Is not",
];

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

export const Rule: FC<{
  rule: RuleType;
  onRuleChange: (rule: RuleType) => void;
  handleRuleDelete: (id: string) => void;
}> = ({ rule, onRuleChange, handleRuleDelete }) => {
  useEffect(() => {
    onRuleChange(rule);
  }, [rule, onRuleChange]);

  const fields = FIELDS.filter((field) => !!field).map((field) => ({
    label: field,
    value: field,
  })) as Option[];

  const conditions = CONDITIONS.filter((condition) => !!condition).map(
    (condition) => ({
      label: condition,
      value: condition,
    })
  ) as Option[];

  return (
    <div className="flex items-end space-x-4">
      <Select
        placeholder="Select field"
        label="Field"
        dropdownOptions={fields}
        onChange={(value) => {
          onRuleChange({
            ...rule,
            field: value as RuleType["field"],
          });
        }}
      />
      <Select
        placeholder="Select condition"
        label="Condition"
        dropdownOptions={conditions}
        onChange={(value) => {
          onRuleChange({
            ...rule,
            condition: value as RuleType["condition"],
          });
        }}
      />
      <Select
        placeholder="Select criteria"
        label="Criteria"
        dropdownOptions={(VALUES[rule.field || ""] || []).map((value) => ({
          label: value.toString(),
          value: value,
        }))}
        onChange={(value) => {
          onRuleChange({
            ...rule,
            value: [value] as RuleType["value"],
          });
        }}
      />
      <DeleteIcon onClick={() => handleRuleDelete(rule.id)} />
    </div>
  );
};
