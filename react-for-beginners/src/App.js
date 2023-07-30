import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");

  useEffect(() => {
    console.log("Call The API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("Search For: ", keyword);
  }, [keyword]);

  return (
    <React.StrictMode>
      <div>
        <h1>{counter}</h1>
        <h1 className={styles.title}>Welcome back!!!</h1>
        <Button text={"Continue"} />
        <button onClick={onClick}>Click Me</button>
      </div>
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here..."
        />
      </div>
    </React.StrictMode>
  );
};

export default App;
