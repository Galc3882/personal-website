"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CardCategory } from "@/types/Categories";

interface Props {
  onCategoryChange: (category: CardCategory) => void;
}

const CategorySelect = ({ onCategoryChange }: Props) => {
  const buttons: CardCategory[] = ["Experience", "Education", "Projects"];
  const [selected, setSelected] = useState(0);

  const handleButtonClick = (category: CardCategory, index: number) => {
    setSelected(index);
    onCategoryChange(category);
    const buttonsContainer = document.querySelector(".category-buttons");
    buttonsContainer?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const width = typeof window !== "undefined" ? window.innerWidth < 425 ? 88 : 120 : 120;
  return (
    <div className="flex justify-center phone:px-2">
      <div className="relative z-0 flex items-center justify-around overflow-hidden rounded-md bg-darker">
        <motion.svg
          width="100%"
          height="48"
          initial="hidden"
          animate="visible"
          className="absolute z-20"
        >
          <motion.rect
            x="0"
            width={`${width}px`}
            height="100%"
            fill="black"
            animate={{
              x: selected * width,
              transition: {
                duration: 0.23,
              },
            }}
            transition={{ type: "spring", stiffness: 25 }}
          />
        </motion.svg>
        {buttons.map((button, index) => (
          <span
            key={button}
            className={`category-buttons z-20 w-[120px] flex-1 cursor-pointer select-none py-3 text-center phone:w-[88px] phone:text-sm`}
            onClick={() => handleButtonClick(button, index)}
          >
            {button}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
