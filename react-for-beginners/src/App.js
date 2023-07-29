import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("i run all the time");

  useEffect(() => {
    console.log("Call The API");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default App;
