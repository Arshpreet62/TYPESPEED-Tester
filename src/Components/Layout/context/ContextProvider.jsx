import React, { useState } from "react";
import Context from "./Context";

export default function ContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [mistake, setMistake] = useState("");
  const [task, setTask] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState("100%");
  const [count, setCount] = useState(0);

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        task,
        setTask,
        mistake,
        setMistake,
        time,
        setTime,
        isRunning,
        setIsRunning,
        numberOfMistakes,
        setNumberOfMistakes,
        wpm,
        setWpm,
        accuracy,
        setAccuracy,
        count,
        setCount,
      }}
    >
      {children}
    </Context.Provider>
  );
}
