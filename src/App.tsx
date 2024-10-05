import "./App.css";
import { Button } from "./common/components/Button";
import { Select } from "./common/components/Select";
import { Conjunction } from "./components/Conjunction";
import { Rule } from "./components/Rule";

function App() {
  return (
    <main className="h-full container mx-auto p-16">
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
                <Rule />
              </div>
            </div>
            <Button>+ Add filter</Button>
          </div>
          <Button>+ Add new group filter</Button>
        </section>
      </div>
    </main>
  );
}

export default App;
