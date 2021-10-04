import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((prevCount) => prevCount + 1);
  const decrement2 = () => setCount((prevCount) => prevCount - 1);

  const reset = () => setCount(0);

  const double = () => setCount((prevCount) => prevCount * 2);

  const divide = () =>
    setCount((prevCount) => {
      if (prevCount % 3 === 0) {
        return prevCount / 3;
      }
      return prevCount;
    });

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divide}>3の倍数の時だけ3で割る</button>
      </div>
    </div>
  );
};

export default App;
