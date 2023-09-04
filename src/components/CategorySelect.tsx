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
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-0 flex items-center justify-around overflow-hidden bg-darker">
        <motion.svg
          width="100%"
          height="48"
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
        {buttons.map((button, index) => (
          <span
            key={button}
            className={`z-20 w-[120px] flex-1 cursor-pointer select-none py-3 text-center`}
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
