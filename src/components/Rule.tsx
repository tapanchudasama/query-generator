import { FC, useEffect } from "react";
import { Select } from "../common/components/Select";
import { Rule as RuleType } from "../types/types";
import { DeleteIcon } from "../common/components/DeleteIcon";
import { useFields } from "../hooks/useFields";
import { useConditions } from "../hooks/useConditions";
import { useValues } from "../hooks/useValues";

export const Rule: FC<{
  rule: RuleType;
  onRuleChange: (rule: RuleType) => void;
  handleRuleDelete: (id: string) => void;
}> = ({ rule, onRuleChange, handleRuleDelete }) => {
  useEffect(() => {
    onRuleChange(rule);
  }, [rule, onRuleChange]);

  const fields = useFields();
  const conditions = useConditions();
  const values = useValues(rule.field);

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
        dropdownOptions={values}
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
