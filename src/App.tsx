import React, { useState } from "react";

const App = () => {
  const initialStates = {
    name: "",
    price: 1000,
  };

  const [name, setName] = useState(initialStates.name);
  const [price, setPrice] = useState(initialStates.price);

  const reset = () => {
    setPrice(initialStates.price);
    setName(initialStates.name);
  };

  return (
    <>
      <p>
        現在の{name}は、{price}です。
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default App;
