"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const RadioButtons = () => {
  const buttons = ["education", "experience", "ps"];

  const [selected, setSelected] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="relative z-0 flex items-center justify-around overflow-hidden bg-darker">
        <motion.svg
          width="100%"
          height="48"
          // viewBox="0 0 120 48"
          initial="hidden"
          animate="visible"
          className="absolute z-20"
        >
          <motion.rect
            x="0"
            width="120px"
            height="100%"
            fill="black"
            animate={{
              x: selected * 120,
              transition: {
                duration: 0.23,
              },
            }}
            transition={{ type: "spring", stiffness: 25 }}
          />
        </motion.svg>
        {buttons.map((button, index) => {
          return (
            <span
              key={index}
              className={`z-20 w-[120px] flex-1 cursor-pointer select-none py-3 text-center`}
              onClick={() => setSelected(index)}
            >
              {button}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButtons;
