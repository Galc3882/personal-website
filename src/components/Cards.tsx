import React from "react"; // Make sure to import React
import Card from "@/components/Card";

type CardCategory = "education" | "experience";

type CardData = {
  title: string;
  place: string;
  dates: string;
  description: string;
  bulletPoints: string[];
  icon: string;
};

type CardsByCategory = {
  [key in CardCategory]: CardData[];
};

interface Props {
  category: CardCategory; // Specify the prop type
}

const Cards: React.FC<Props> = ({ category }) => {
  const cards: CardsByCategory = {
    education: [
      {
        title: "Robotics Engineer",
        place: "University of Toronto",
        dates: "Sep 2020 - Present",
        description:
          "I am currently studying Engineering Science at the University of Toronto and will graduate in 2025 with a specialty in Robotics and a minor in Business and AI.",
        bulletPoints: [
          "Instrumental in driving a $1 million increase in revenue in 4 months by enhancing user experiences and optimizing workflows.",
          "Championed an optimization initiative by meticulously refactoring critical components of the application. This effort resulted in improved efficiency, stability, and was fortified by comprehensive end-to-end unit testing.",
          "Collaborated closely with the technical team to architect and implement REST APIs, facilitating seamless communication between the frontend and backend systems.",
          "Successfully integrated our platform services with over 40 well-known businesses, including notable brands like Sirplus and Aspiga.",
        ],
        icon: "/images/swapcommerce.png",
      },
    ],
    experience: [
      {
        title: "Robotics Engineer",
        place: "University of Toronto",
        dates: "Sep 2020 — Present",
        description:
          "I am currently studying Engineering Science at the University of Toronto and will graduate in 2025 with a specialty in Robotics and a minor in Business and AI.",
        bulletPoints: [
          "I am currently studying Engineering Science at the University of Toronto and will graduate in 2025 with a specialty in Robotics and a minor in Business and AI.",
          "I am currently studying Engineering Science at the University of Toronto and will graduate in 2025 with a specialty in Robotics and a minor in Business and AI.",
        ],
        icon: "/images/swapcommerce.png",
      },
    ],
  };

  return (
    <>
      {cards[category].map((card, index) => (
        <Card
          key={index} // Add a unique key for each card
          title={card.title}
          place={card.place}
          dates={card.dates}
          description={card.description}
          bulletPoints={card.bulletPoints}
          icon={card.icon}
        />
      ))}
    </>
  );
};

export default Cards;
