import React, { useContext } from "react";
import Keys from "../../ui/Keys";
import TypeTasker from "../../ui/TypeTasker";
import Context from "../context/Context";
import { faker } from "@faker-js/faker";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const {
    input,
    setInput,
    task,
    setTask,
    setCount,
    setNumberOfMistakes,
    setWpm,
    setAccuracy,
    time,
    setTime,
    numberOfMistakes,
    accuracy,
    wpm,
  } = useContext(Context);

  // const sentences = [
  //   "The quick brown fox jumps over the lazy dog",
  //   "Coding is both an art and a science",
  //   "React makes building UIs easy and efficient",
  //   "A journey of a thousand miles begins with a single step",
  // ];

  const generateSentence = () => {
    // const randomIndex = Math.floor(Math.random() * sentences.length);
    // return sentences[randomIndex];
    const sentence = faker.hacker.phrase();
    return sentence;
  };
  const handle = (e) => {
    if (e.key === "Enter") {
      if (task.length > 0) {
        setTask("");
      } else {
        setTask(generateSentence());
      }
      setAccuracy("100%");
      setWpm(0);
      setNumberOfMistakes(0);
      setTime(0);
      setInput("");
      setCount(0);
    }
  };

  const handleInput = (e) => {
    if (e.key !== "Shift") {
      setInput(e.key);
    }
  };
  const keydown = (e) => {
    handle(e);
    if (task.length > 0 && e.key !== "Enter") {
      handleInput(e);
    }
  };
  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => keydown(e)}
      className="flex  w-full overflow-hidden flex-1 bg-[#4a0256] text-white p-5 items-center flex-col gap-5 "
    >
      <div className="h-fit w-400 relative flex flex-col  items-center gap-10 mt-30 ">
        <h2 className="text-5xl font-semibold ">Velocity Type</h2>
        <div className="flex h-10 w-full justify-center items-end gap-2 ">
          <h4 className="pb-1">Press Enter to..</h4>
          <div className="text-md font-semibold rounded-md px-5 py-2 bg-[#9620b0]">
            Start Typing..
          </div>
        </div>
        <h3 className="flex max-w-300 w-[80vh] justify-start text-2xl font-semibold">
          Generated text...
        </h3>
        {task.length > 0 ? (
          <motion.div
            initial={{ x: -250, rotate: -90 }}
            animate={{ x: task ? 0 : -200, rotate: task ? 0 : 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white/25  rounded-md flex flex-col items-center justify-around text-[20px] font-semibold text-white/80 gap-2 px-2 py-4 absolute right-70 top-10"
          >
            <h4 className="flex flex-col w-full  gap-1 items-center border-b-3 border-white/50 pb-2">
              M <span>{numberOfMistakes}</span>
            </h4>
            <h4 className="flex flex-col w-full  gap-1 items-center border-b-3 border-white/50 pb-2">
              W <span>{wpm}</span>
            </h4>
            <h4 className="flex flex-col w-full  gap-1 items-center border-b-3 border-white/50 pb-2">
              T <span>{time}</span>
            </h4>
            <h4 className="flex flex-col  gap-1 items-center w-full ">
              A<span>{accuracy}</span>
            </h4>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ x: 350, rotate: 90 }}
              animate={{
                x: task ? -350 : 0,
                rotate: task ? 0 : 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="bg-white/25 w-150 h-10 rounded-md flex items-center justify-around text-xl font-semibold text-white/80"
            >
              <h4 className="flex items-end gap-1">
                mistakes : {numberOfMistakes}
              </h4>
              <h4 className="flex items-end gap-1">WPM : {wpm}</h4>
              <h4 className="flex items-end gap-1">Time Taken : {time}</h4>
              <h4 className="flex items-end gap-1">Accuracy: {accuracy}</h4>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <div className="flex flex-col  items-center relative">
        <AnimatePresence>
          {task && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TypeTasker task={task} input={input} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: task ? 160 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute"
        >
          <Keys />
        </motion.div>
      </div>
    </div>
  );
}
