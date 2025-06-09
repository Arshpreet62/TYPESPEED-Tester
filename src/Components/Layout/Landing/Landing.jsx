import React from "react";
import { motion } from "motion/react";

export default function Landing() {
  const Array = [
    "P",
    "R",
    "E",
    "S",
    "S",
    " ",
    "A",
    "N",
    "Y",
    " ",
    "K",
    "E",
    "Y",
    " ",
    "T",
    "O",
    " ",
    "S",
    "T",
    "A",
    "R",
    "T",
  ];
  return (
    <div className="flex justify-center items-center bg-[#2b0130] flex-1 w-full p-5 overflow-hidden">
      <div
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/close-up-woman-hands-typing-laptop-keyboard-professional-online-gamer-hand-fingers-notebook-keyboard-neon-color-sitting-gaming-desk-woman-chatting-concept-image_157125-14944.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col  max-h-[800px] max-w-[1200px] w-full h-full  rounded-4xl shadow-[0px_0px_20px] shadow-purple-400/50 justify-end p-5 gap-10"
      >
        <div className="h-100 w-full flex justify-center items-center ">
          {Array.map((letter, index) => {
            return (
              <motion.span
                initial={{ opacity: 0, y: -150 }}
                animate={{ opacity: 1, y: 100 }}
                transition={{ duration: 0.4 + index * 0.05 }}
                key={index}
                className="text-white/50 w-10 text-6xl font-semibold "
              >
                {letter}
              </motion.span>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-100 w-full flex flex-col gap-5 justify-center items-start"
        >
          <h3 className="text-white text-8xl font-semibold ">Velocity Speed</h3>
          <h3 className="text-white/90 text-5xl font-semibold ">
            test your speed the future
          </h3>
        </motion.div>
      </div>
    </div>
  );
}
