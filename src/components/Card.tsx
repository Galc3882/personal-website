import Image from "next/image";
import { CardData } from "@/types/CardData";

export default function Card({
  title,
  place,
  dates,
  description,
  bulletPoints,
  icon,
}: CardData) {
  return (
    <div className="mx-auto my-5 flex max-w-4xl flex-col gap-3 rounded-3xl bg-card p-6 drop-shadow-lg">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col justify-center">
          {icon && (
            <Image
              src={icon}
              alt="icon"
              width={60}
              height={60}
              className="rounded-md"
            />
          )}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-end gap-3">
            <h1 className="max-w-xl text-2xl font-bold">{title}</h1>
            <h2 className="text-md">{place}</h2>
          </div>
          <h2 className="text-md">{dates}</h2>
        </div>
      </div>
      <p className="text-md max-w-6xl">{description}</p>
      {bulletPoints.length > 0 && (
        <ul className="shadow-3xl mx-9 h-fit list-disc rounded-3xl leading-7">
          {bulletPoints.map((bulletPoint, index) => {
            return (
              <li key={index} className="text-md max-w-6xl text-justify">
                {bulletPoint}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}