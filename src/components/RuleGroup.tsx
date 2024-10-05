import { FC, useState } from "react";
import { RuleGroup as RuleGroupType, Rule as RuleType } from "../types/types";
import { Button } from "../common/components/Button";
import { Conjunction } from "./Conjunction";
import { Rule } from "./Rule";
import { DeleteIcon } from "../common/components/DeleteIcon";
import { useRuleQuery } from "../hooks/useRuleQuery";
import { ActiveQuery } from "./ActiveQuery";

export const RuleGroup: FC<{
  ruleGroup: RuleGroupType;
  onDelete: (id: string) => void;
}> = ({ ruleGroup, onDelete }) => {
  const [rules, setRules] = useState<RuleType[]>([
    {
      type: "rule",
      id: Date.now().toString(),
    },
  ]);

  const [conjunction, setConjunction] =
    useState<RuleGroupType["conjunction"]>("AND");

  const handleRuleUpdate = (updatedRule: RuleType) => {
    const newRules = rules.map((currentRule) => {
      if (currentRule.id === updatedRule.id) {
        return updatedRule;
      }
      return currentRule;
    });

    setRules(newRules);
  };

  const handleRuleDelete = (deletedRuleId: string) => {
    const newRules = rules.filter((currentRule) => {
      if (currentRule.id === deletedRuleId) {
        return false;
      }
      return true;
    });

    setRules(newRules);
  };

  const handleRuleAdd = () => {
    setRules([
      ...rules,
      {
        id: Date.now().toString(),
        type: "rule",
      },
    ]);
  };

  const handleConjunctionUpdate = (
    conjunction: RuleGroupType["conjunction"]
  ) => {
    setConjunction(conjunction);
  };

  const { queryString } = useRuleQuery(rules, conjunction);

  console.log("@@@", queryString);

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
