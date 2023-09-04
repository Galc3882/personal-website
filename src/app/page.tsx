"use client";

import About from "@/components/About";
import Cards from "@/components/Cards";
import Contact from "@/components/Contact";
import CategorySelect from "@/components/CategorySelect";
import { CardCategory } from "@/types/Categories";
import { useState } from "react";

export default function HomePage() {
  const [category, setCategory] = useState<CardCategory>("Experience");
  const handleCategoryChange = (category: CardCategory) => {
    setCategory(category);
  };
  return (
    <>
      <Contact />
      <div className="px-10">
        <About />
        <div className="h-4" />
        <CategorySelect onCategoryChange={handleCategoryChange} />
        <Cards category={category} />
      </div>
    </>
  );
}
