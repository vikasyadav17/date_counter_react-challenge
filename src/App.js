import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function reduceStep() {
    setStep((s) => s - 1);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function reduceCount() {
    setCount((s) => s - step);
  }

  function addCount() {
    if (step === 0) {
      setCount((s) => s + 1);
    } else setCount((s) => s + step);
  }
  const date = new Date("july 25 2023");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={reduceStep}>-</button>
        <span> Step:{step}</span>
        <button onClick={addStep}>+</button>
      </div>
      <div>
        <button onClick={reduceCount}>-</button>
        <span> Count:{count}</span>
        <button onClick={addCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
