import React, { useContext } from "react";
import Context from "../Layout/context/Context";

const VirtualKeyboard = () => {
  const { mistake } = useContext(Context);

  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
    ["Space"],
  ];
  return (
    <div className="flex flex-col items-center p-4 gap-3">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className={`${
                mistake.toUpperCase() == key &&
                "bg-red-500 scale-120 border border-white"
              } p-2 bg-gray-200  text-black font-semibold rounded shadow hover:bg-purple-400 hover:blur-md transition-all duration-300 ease-in-out`}
              style={{ minWidth: key === "Space" ? "250px" : "40px" }}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;
