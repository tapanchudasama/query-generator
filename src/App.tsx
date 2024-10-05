import { useState } from "react";
import "./App.css";
import { Button } from "./common/components/Button";
import { RuleGroup as RuleGroupType } from "./types/types";
import { RuleGroup } from "./components/RuleGroup";

function App() {
  const [ruleGroups, setRuleGroups] = useState<RuleGroupType[]>([
    {
      type: "rule_group",
      id: Date.now().toString(),
      children: [
        {
          type: "rule",
          id: Date.now().toString(),
        },
      ],
      not: false,
      conjunction: "AND",
    },
  ]);

  const handleRuleGroupAdd = () =>
    setRuleGroups([
      ...ruleGroups,
      {
        type: "rule_group",
        id: Date.now().toString(),
        children: [
          {
            type: "rule",
            id: Date.now().toString(),
          },
        ],
        not: false,
        conjunction: "AND",
      },
    ]);

  const handleRuleGroupDelete = (deletedRuleGroupId: string) => {
    const newGroups = ruleGroups.filter(({ id }) => id !== deletedRuleGroupId);
    setRuleGroups(newGroups);
  };

  return (
    <main className="h-full container mx-auto">
      <div className="shadow-lg rounded-xl">
        <section className="bg-blue-600 p-8 rounded-t-xl space-y-2">
          <p className="text-2xl text-white font-semibold">Build your query</p>
          <p className="text-md text-neutral-300">
            The query you create will be saved in your active view.
          </p>
        </section>
        <section className="bg-slate-800 rounded-b-xl p-8">
          <div className="space-y-4">
            {ruleGroups.map((ruleGroup) => (
              <RuleGroup
                ruleGroup={ruleGroup}
                onDelete={handleRuleGroupDelete}
              />
            ))}
          </div>
          <Button onClick={handleRuleGroupAdd}>+ Add new group filter</Button>
        </section>
      </div>
    </main>
  );
}

export default App;
