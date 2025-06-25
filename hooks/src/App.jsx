// 1. Create the context
import React from "react";
import { useState, useContext, createContext } from "react";

const CounterContext = React.createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <CounterDisplay />
      <CounterButtons />
    </CounterContext.Provider>
  );
}

function CounterDisplay() {
  const { count } = useContext(CounterContext);
  return <h2 style={{
    justifyContent: "center",  // horizontal center
    alignItems: "center",      // vertical center
   }}>
    Count: {count}</h2>;
}

function CounterButtons() {
  const { setCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
}
export default App