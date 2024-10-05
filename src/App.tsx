import { useState } from "react";
import "./App.css";
import { Button } from "./common/components/Button";
import { Conjunction } from "./components/Conjunction";
import { Rule } from "./components/Rule";
import { Rule as RuleType } from "./types/types";

function App() {
  const [ruleCount, setRuleCount] = useState<number>(1);
  const [ruleGroupCount, setRuleGroupCount] = useState<number>(1);

  const handleRuleChange = (data: RuleType) => {
    console.log("@@@@", data);
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
          <div className="p-8 rounded-lg w-full bg-slate-900 border border-neutral-600">
            <div>
              <Conjunction />
              <div className="space-y-4 pt-8 w-full">
                {new Array(ruleCount).fill(1).map(() => (
                  <Rule
                    onRuleChange={handleRuleChange}
                    handleRuleDelete={() =>
                      setRuleCount((ruleCount) => ruleCount - 1)
                    }
                  />
                ))}
              </div>
            </div>
            <Button onClick={() => setRuleCount((ruleCount) => ruleCount + 1)}>
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
