import React, { useContext, useEffect } from "react";
import Context from "../Layout/context/Context";

export default function TypeTasker({ task, input }) {
  const {
    setMistake,
    setInput,
    setTask,
    isRunning,
    setTime,
    setIsRunning,
    setNumberOfMistakes,
    setWpm,
    setAccuracy,
    time,
    numberOfMistakes,
    count,
    setCount,
  } = useContext(Context);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const currentWord = task.split("")[count];

  useEffect(() => {
    if (!input) return;

    if (input === currentWord) {
      setCount((prev) => prev + 1);
      setMistake("");
      setInput("");
      setIsRunning(true);
    } else {
      if (input !== "") {
        setMistake(input);
        setNumberOfMistakes((prev) => prev + 1);
      }
    }
  }, [input]);

  useEffect(() => {
    if (count === task.length) {
      const accuracy = Math.floor(
        ((task.length - numberOfMistakes) / task.length) * 100
      );
      setInput("");
      const wpm = Math.floor(task.split(" ").length / (time / 60));
      setTask("");
      setIsRunning(false);
      setWpm(wpm);
      setAccuracy(accuracy + "%");
    }
  }, [count]);

  return (
    <div className="p-5 bg-white/50 rounded-md text-2xl transition-all duration-300 max-w-200 ease-in-out">
      {task.length > 0 &&
        task.split("").map((char, index) => (
          <span
            className={`${
              count === index &&
              "text-white border-b-2 border-b-white box-border"
            } min-w-[12px] overflow-hidden w-fit mr-1 inline-block`} // Use w-[40px] for a fixed width
            key={index}
          >
            {char}
          </span>
        ))}
    </div>
  );
}
