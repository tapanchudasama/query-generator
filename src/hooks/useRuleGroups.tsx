import { useState } from "react";
import { getRandomId } from "../utils";
import { Rule as RuleType, RuleGroup as RuleGroupType } from "../types/types";

export const useRuleGroups = () => {
  const [rules, setRules] = useState<RuleType[]>([
    {
      type: "rule",
      id: getRandomId(),
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
        id: getRandomId(),
        type: "rule",
      },
    ]);
  };

  const handleConjunctionUpdate = (
    conjunction: RuleGroupType["conjunction"]
  ) => {
    setConjunction(conjunction);
  };

  return {
    rules,
    conjunction,
    handleConjunctionUpdate,
    handleRuleAdd,
    handleRuleDelete,
    handleRuleUpdate,
  };
};
