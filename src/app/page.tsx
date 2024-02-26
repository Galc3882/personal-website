"use client";

import About from "@/components/About";
import Cards from "@/components/Cards";
import Contact from "@/components/Contact";
import CategorySelect from "@/components/CategorySelect";
import { CardCategory } from "@/types/Categories";
import { useState } from "react";
import { useMediaQuery } from '@mui/material';

export default function HomePage() {
  const [category, setCategory] = useState<CardCategory>("Experience");
  const handleCategoryChange = (category: CardCategory) => {
    setCategory(category);
  };
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <>
      <Contact />
      <div className="px-10 tablet:px-5 phone:px-0">
        <About />
        <div className="h-4" />
        <CategorySelect
          onCategoryChange={handleCategoryChange}
          isMobile={isMobile}
        />
        <Cards category={category} />
        <div className="hidden h-[50px] stablet:block" />
      </div>
    </>
  );
}
