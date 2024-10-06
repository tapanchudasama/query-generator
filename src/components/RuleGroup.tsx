import { FC } from "react";
import { RuleGroup as RuleGroupType } from "../types/types";
import { Button } from "../common/components/Button";
import { Conjunction } from "./Conjunction";
import { Rule } from "./Rule";
import { DeleteIcon } from "../common/components/DeleteIcon";
import { useRuleQuery } from "../hooks/useRuleQuery";
import { ActiveQuery } from "./ActiveQuery";
import { useRuleGroups } from "../hooks/useRuleGroups";

export const RuleGroup: FC<{
  ruleGroup: RuleGroupType;
  onDelete: (id: string) => void;
}> = ({ ruleGroup, onDelete }) => {
  const {
    rules,
    conjunction,
    handleConjunctionUpdate,
    handleRuleAdd,
    handleRuleDelete,
    handleRuleUpdate,
  } = useRuleGroups();

  const { queryString } = useRuleQuery(rules, conjunction);

  return (
    <div className="p-8 rounded-lg w-full bg-slate-900 border border-neutral-600">
      <div>
        <div className="flex justify-between items-center space-x-4">
          <Conjunction
            activeConjunction={conjunction}
            updateConjunction={handleConjunctionUpdate}
          />
          <ActiveQuery query={queryString} />
          <div className="text-right">
            <DeleteIcon onClick={() => onDelete(ruleGroup.id)} />
          </div>
        </div>
        <div className="space-y-4 pt-8 w-full">
          {rules.map((rule) => {
            return (
              <Rule
                rule={rule}
                onRuleChange={handleRuleUpdate}
                handleRuleDelete={handleRuleDelete}
              />
            );
          })}
        </div>
      </div>
      <Button onClick={handleRuleAdd}>+ Add filter</Button>
    </div>
  );
};
