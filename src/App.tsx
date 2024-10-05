import { useState } from "react";
import "./App.css";
import { Button } from "./common/components/Button";
import { Conjunction } from "./components/Conjunction";
import { Rule } from "./components/Rule";
import { RuleGroup, Rule as RuleType } from "./types/types";
import { useRuleQuery } from "./hooks/useRuleQuery";
import { ActiveQuery } from "./components/ActiveQuery";

function App() {
  const [rules, setRules] = useState<RuleType[]>([
    {
      type: "rule",
      id: Date.now().toString(),
    },
  ]);
  const [conjunction, setConjunction] =
    useState<RuleGroup["conjunction"]>("AND");

  const [ruleGroupCount, setRuleGroupCount] = useState<number>(1);

  const { query } = useRuleQuery(rules, conjunction);

  const handleRuleUpdate = (data: RuleType) => {
    const newRules = rules.map((rule) => {
      if (rule.id === data.id) {
        return data;
      }
      return rule;
    });

    setRules(newRules);
  };

  const handleRuleDelete = (id: string) => {
    const newRules = rules.filter((rule) => {
      if (rule.id === id) {
        return false;
      }
      return true;
    });

    setRules(newRules);
  };

  const handleConjunctionUpdate = (conjunction: RuleGroup["conjunction"]) => {
    setConjunction(conjunction);
  };

  // console.log("@@@@", query);

  return (
    <main className="h-full container mx-auto">
      <div className="shadow-lg rounded-xl">
        <section className="bg-blue-600 p-8 rounded-t-xl space-y-2">
          <p className="text-2xl text-white font-semibold">Build your query</p>
          <ActiveQuery query={query} />
          <p className="text-md text-neutral-300">
            The query you create will be saved in your active view.
          </p>
        </section>
        <section className="bg-slate-800 rounded-b-xl p-8">
          <div className="p-8 rounded-lg w-full bg-slate-900 border border-neutral-600">
            <div>
              <Conjunction
                activeConjunction={conjunction}
                updateConjunction={handleConjunctionUpdate}
              />
              <div className="space-y-4 pt-8 w-full">
                {rules.map((rule) => (
                  <Rule
                    rule={rule}
                    onRuleChange={handleRuleUpdate}
                    handleRuleDelete={handleRuleDelete}
                  />
                ))}
              </div>
            </div>
            <Button
              onClick={() => {
                setRules([
                  ...rules,
                  { id: Date.now().toString(), type: "rule" },
                ]);
              }}
            >
              + Add filter
            </Button>
          </div>
          <Button
            onClick={() =>
              setRuleGroupCount((ruleGroupCount) => ruleGroupCount + 1)
            }
          >
            + Add new group filter
          </Button>
        </section>
      </div>
    </main>
  );
}

export default App;
