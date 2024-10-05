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

const VALUES: RuleType["value"] = [
  "Product Feedback",
  "Offers",
  "Platform",
  "Performance",
];

export const Rule: FC<{
  onRuleChange: (rule: RuleType) => void;
  handleRuleDelete: () => void;
}> = ({ onRuleChange, handleRuleDelete }) => {
  const [rule, setRule] = useState<RuleType>({
    type: "rule",
  });

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
          setRule({
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
          setRule({
            ...rule,
            condition: value as RuleType["condition"],
          });
        }}
      />
      <Select
        placeholder="Select criteria"
        label="Criteria"
        dropdownOptions={VALUES.map((value) => ({
          label: value,
          value: value,
        }))}
        onChange={(value) => {
          setRule({
            ...rule,
            value: [value] as RuleType["value"],
          });
        }}
      />
      <DeleteIcon onClick={handleRuleDelete} />
    </div>
  );
};
