import "./App.css";
import Header from "./Header";
import Counter from "./Counter";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    if (counters.length < 4) {
      const newCounter = [...counters];
      newCounter.push(0);
      setCounters(newCounter);
    }
  };

  return (
    <div>
      <div className="container">
        <Header />
        <button onClick={addCounter} className="btn-add-counter">
          ADD COUNTER
        </button>

        <Counter counters={counters} setCounters={setCounters} />
      </div>
    </div>
  );
}

export default App;
