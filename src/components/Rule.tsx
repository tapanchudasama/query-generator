import { FC, useEffect, useState } from "react";
import { Select } from "../common/components/Select";
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
};

export const Rule: FC<{
  rule: RuleType;
  onRuleChange: (rule: RuleType) => void;
  handleRuleDelete: (id: string) => void;
}> = ({ rule, onRuleChange, handleRuleDelete }) => {
  useEffect(() => {
    onRuleChange(rule);
  }, [rule]);

  return (
    <div className="flex items-end space-x-4">
      <Select
        placeholder="Select field"
        label="Field"
        dropdownOptions={FIELDS.map((field) => ({
          label: field,
          value: field,
        }))}
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
        dropdownOptions={CONDITIONS.map((condition) => ({
          label: condition,
          value: condition,
        }))}
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
