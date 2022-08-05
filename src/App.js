import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <h1 className="h">Mourya Project Simple Counting</h1>
      <div className="App">
        <button className="btn" onClick={increase}>
          +
        </button>
        <span className="cn">{count}</span>
        <button className="btn" onClick={decrease}>
          -
        </button>
        <br />
      </div>
    </>
  );
}
