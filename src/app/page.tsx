"use client";

import About from "@/components/About";
import Cards from "@/components/Cards";
import Contact from "@/components/Contact";
import RadioButtons from "@/components/RadioButtons";
import { useState } from "react";

export default function HomePage() {
  const [category, setCategory] = useState("education");
  return (
    <>
      <Contact />
      <div className="px-10">
        <About />
        <div className="h-4" />
        <RadioButtons />
        <Cards category={category} />
      </div>
    </>
  );
}
