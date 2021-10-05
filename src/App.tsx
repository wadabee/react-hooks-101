import React, { useState } from "react";

const App = () => {
  const initialStates = {
    name: "",
    price: 1000,
  };

  const [state, setState] = useState(initialStates);

  const { name, price } = state;

  return (
    <>
      <p>
        現在の{name}は、{price}です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(initialStates)}>Reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

export default App;
