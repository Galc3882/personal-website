import Image from "next/image";
import { CardData } from "@/types/CardData";

export function ExperienceCard({
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
          <Image
            src={icon!}
            alt="icon"
            width={60}
            height={60}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-end gap-3">
            <h1 className={`max-w-xl text-2xl font-bold`}>{title}</h1>
            <h2 className="text-md">{place}</h2>
          </div>
          <h2 className="text-md">{dates}</h2>
        </div>
      </div>
      {description.map((paragraph, index) => {
        return (
          <p key={index} className="text-md max-w-6xl text-justify">
            {paragraph}
          </p>
        );
      })}
      <ul className="shadow-3xl mx-9 h-fit list-disc rounded-3xl leading-7">
        {bulletPoints!.map((bulletPoint, index) => {
          return (
            <li key={index} className="text-md max-w-6xl text-justify">
              {bulletPoint}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function EducationCard({
  title,
  place,
  dates,
  description,
  bulletPoints,
  subBulletPoints,
  icon,
}: CardData) {
  return (
    <div className="mx-auto my-5 flex max-w-4xl flex-col gap-3 rounded-3xl bg-card p-6 drop-shadow-lg">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col justify-center">
          <Image
            src={icon!}
            alt="icon"
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className={`max-w-2xl text-2xl font-bold`}>{title}</h1>
          <h2 className="text-lg">{place}</h2>
          <h2 className="text-md">{dates}</h2>
        </div>
      </div>
      {description.map((paragraph, index) => {
        return (
          <p key={index} className="text-md max-w-6xl text-justify">
            {paragraph}
          </p>
        );
      })}
      <ul className="shadow-3xl mx-9 h-fit list-disc rounded-3xl leading-7">
        {bulletPoints!.map((bulletPoint, index) => {
          return (
            <li key={index} className="text-md max-w-6xl text-justify">
              {bulletPoint}
              {subBulletPoints && bulletPoints!.length - 1 == index && (
                <ul className="ml-6 list-disc">
                  {subBulletPoints.map((subBulletPoint, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-md max-w-6xl text-justify"
                    >
                      {subBulletPoint}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ProjectCard({ title, dates, description, link }: CardData) {
  return (
    <div className="mx-auto my-5 flex max-w-4xl flex-col gap-3 rounded-3xl bg-card p-6 drop-shadow-lg">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col justify-center"></div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-end gap-3">
            <h1 className={`max-w-xl text-2xl font-bold`}>{title}</h1>
          </div>
          <h2 className="text-md">{dates}</h2>
        </div>
      </div>
      {description.map((paragraph, index) => {
        return (
          <p key={index} className="text-md max-w-6xl text-justify">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}
