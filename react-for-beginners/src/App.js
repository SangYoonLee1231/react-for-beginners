import React, { useState, useEffect } from "react";

const Hello = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const App = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <React.StrictMode>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      </div>
    </React.StrictMode>
  );
};

export default App;
