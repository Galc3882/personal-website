"use client";

import Image from "next/image";
import OpenLinkIcon from "./icons/OpenLink";
import ExpandedArrowIcon from "./icons/ExpandedArrow";
import { CardData } from "@/types/CardData";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cardImageVariants = {
  selected: {
    rotateY: 180,
    transition: { duration: 0.35 },
  },
  unselected: {
    rotateY: 0,
    transition: { duration: 0.35 },
  },
};

export function ExperienceCard({
  listId,
  title,
  place,
  dates,
  description,
  bulletPoints,
  icon,
  image,
  selectedCard,
  handleCardClick,
}: CardData & { listId: string } & { selectedCard: boolean } & {
  handleCardClick: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.15, easeIn: true, duration: 0.3 }}
      animate={selectedCard ? "selected" : "unselected"}
      variants={cardImageVariants}
      viewport={{ once: true }}
      className="mx-auto my-5 flex max-w-5xl flex-col gap-3 rounded-3xl bg-card p-6 drop-shadow-lg tablet:m-3 tablet:p-5 sphone:m-2 sphone:p-2"
      id={listId}
    >
      {selectedCard && (
        <div className="inline-block cursor-pointer" onClick={handleCardClick}>
          <div className="text-center shadow-inner">
            <img
              className="m-auto rounded-3xl"
              src={image!}
              style={{ transform: "rotateY(180deg)" }}
            />
            <div
              className="absolute bottom-0 left-0 h-1/5 w-full items-center justify-center pt-10"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="relative mx-auto my-0 w-44 rounded-3xl bg-button p-2 text-center text-lg font-medium shadow-2xl hover:bg-buttonHover">
                Click to return
              </div>
            </div>
          </div>
        </div>
      )}
      {!selectedCard && (
        <>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col justify-center tablet:min-w-[50px]">
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
                <h1 className={`max-w-xl text-2xl font-bold tablet:text-lg`}>
                  {title}
                </h1>
                <h2 className="text-base tablet:hidden">{place}</h2>
              </div>
              <h2 className="hidden text-lg tablet:block">{place}</h2>
              <h2 className="text-base">{dates}</h2>
            </div>
          </div>
          {description.map((paragraph, index) => {
            return (
              <p key={index} className="max-w-6xl text-justify text-base">
                {paragraph}
              </p>
            );
          })}
          <div
            className="hidden w-full select-none tablet:block"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 0.15,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  key="content"
                >
                  <ul className="shadow-3xl mx-9 h-fit list-disc rounded-3xl leading-7 tablet:ml-3 tablet:mr-0">
                    {bulletPoints!.map((bulletPoint, index) => {
                      return (
                        <li
                          key={index}
                          className="max-w-6xl text-justify text-base tablet:text-left"
                        >
                          {bulletPoint}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mx-auto w-12">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isExpanded ? "expanded" : "notExpanded"}
                  initial={{
                    rotate: isExpanded ? -90 : 90,
                  }}
                  animate={{
                    rotate: isExpanded ? 0 : 180,
                    transition: {
                      type: "tween",
                      duration: 0.15,
                      ease: "circOut",
                    },
                  }}
                  exit={{
                    rotate: isExpanded ? -90 : 90,
                    transition: {
                      type: "tween",
                      duration: 0.15,
                      ease: "circIn",
                    },
                  }}
                >
                  <ExpandedArrowIcon />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <ul className="shadow-3xl mx-9 h-fit list-disc rounded-3xl leading-7 tablet:hidden">
            {bulletPoints!.map((bulletPoint, index) => {
              return (
                <li
                  key={index}
                  className="max-w-6xl text-justify text-base tablet:text-left"
                >
                  {bulletPoint}
                </li>
              );
            })}
          </ul>
          {image && (
            <button
              onClick={handleCardClick}
              className="relative mx-auto my-0 w-64 cursor-pointer rounded-3xl bg-button px-4 py-2 text-lg font-medium shadow-2xl transition-colors duration-300 hover:bg-buttonHover tablet:hidden"
            >
              Click to see a sneak peek
            </button>
          )}
        </>
      )}
    </motion.div>
  );
}

export function EducationCard({
  listId,
  title,
  place,
  dates,
  description,
  bulletPoints,
  subBulletPoints,
  icon,
}: CardData & { listId: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.15, easeIn: true, duration: 0.3 }}
      viewport={{ once: true }}
      className="mx-auto my-5 flex max-w-5xl flex-col gap-3 rounded-3xl bg-card p-6 drop-shadow-lg tablet:m-3 tablet:p-5 sphone:m-2 sphone:p-2"
      id={listId}
    >
      <div className="flex flex-row gap-3">
        <div className="flex flex-col justify-center tablet:min-w-[80px] phone:min-w-[60px]">
          <Image
            src={icon!}
            alt="icon"
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className={`max-w-2xl text-2xl font-bold tablet:text-lg`}>
            {title}
          </h1>
          <h2 className="text-lg">{place}</h2>
          <h2 className="text-base">{dates}</h2>
        </div>
      </div>
      {description.map((paragraph, index) => {
        return (
          <p key={index} className="max-w-6xl text-justify text-base">
            {paragraph}
          </p>
        );
      })}
      <div
        className="hidden w-full select-none tablet:block"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
              }}
              key="content"
            >
              <ul className="shadow-3xl mx-9 h-fit list-disc rounded-3xl leading-7 tablet:ml-3 tablet:mr-0">
                {bulletPoints!.map((bulletPoint, index) => {
                  return (
                    <li
                      key={index}
                      className="max-w-6xl text-justify text-base tablet:text-left"
                    >
                      {bulletPoint}
                      {subBulletPoints && bulletPoints!.length - 1 == index && (
                        <ul className="ml-6 list-disc tablet:ml-3">
                          {subBulletPoints.map((subBulletPoint, subIndex) => (
                            <li
                              key={subIndex}
                              className="max-w-6xl text-justify text-base tablet:text-left"
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
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mx-auto w-12">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isExpanded ? "expanded" : "notExpanded"}
              initial={{
                rotate: isExpanded ? -90 : 90,
              }}
              animate={{
                rotate: isExpanded ? 0 : 180,
                transition: {
                  type: "tween",
                  duration: 0.15,
                  ease: "circOut",
                },
              }}
              exit={{
                rotate: isExpanded ? -90 : 90,
                transition: {
                  type: "tween",
                  duration: 0.15,
                  ease: "circIn",
                },
              }}
            >
              <ExpandedArrowIcon />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <ul className="shadow-3xl mx-9 h-fit list-disc rounded-3xl leading-7 tablet:hidden">
        {bulletPoints!.map((bulletPoint, index) => {
          return (
            <li
              key={index}
              className="max-w-6xl text-justify text-base tablet:text-left"
            >
              {bulletPoint}
              {subBulletPoints && bulletPoints!.length - 1 == index && (
                <ul className="ml-6 list-disc tablet:ml-3">
                  {subBulletPoints.map((subBulletPoint, subIndex) => (
                    <li
                      key={subIndex}
                      className="max-w-6xl text-justify text-base tablet:text-left"
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
    </motion.div>
  );
}

export function ProjectCard({
  listId,
  title,
  dates,
  description,
  link,
  image,
  selectedCard,
  handleCardClick,
}: CardData & { listId: string } & { selectedCard: boolean } & {
  handleCardClick: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.15, easeIn: true, duration: 0.3 }}
      animate={selectedCard ? "selected" : "unselected"}
      variants={cardImageVariants}
      viewport={{ once: true }}
      className="mx-auto my-5 flex max-w-5xl flex-col gap-3 rounded-3xl bg-card p-6 drop-shadow-lg tablet:m-3 tablet:p-5 sphone:m-2 sphone:p-2"
      id={listId}
    >
      {selectedCard && (
        <div className="inline-block cursor-pointer" onClick={handleCardClick}>
          <div className="text-center shadow-inner">
            <img
              className="m-auto rounded-3xl"
              src={image!}
              style={{ transform: "rotateY(180deg)" }}
            />
            <div
              className="absolute bottom-0 left-0 h-1/5 w-full items-center justify-center pt-10"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="relative mx-auto my-0 w-44 rounded-3xl bg-button p-2 text-center text-lg font-medium shadow-2xl hover:bg-buttonHover">
                Click to return
              </div>
            </div>
          </div>
        </div>
      )}
      {!selectedCard && (
        <>
          <div className="flex flex-row justify-between gap-3">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row items-end gap-3">
                <h1 className={`max-w-2xl text-2xl font-bold tablet:text-lg`}>
                  {title}
                </h1>
              </div>
              <h2 className="text-base">{dates}</h2>
            </div>
            <div className="flex flex-col justify-center">
              <a href={link}>
                <OpenLinkIcon />
              </a>
            </div>
          </div>
          {description[0] && (
            <p className="max-w-6xl text-justify text-base">{description[0]}</p>
          )}
          {description[1] && (
            <div
              className="hidden w-full select-none tablet:block"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <AnimatePresence mode="wait">
                {isExpanded && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                        },
                        opacity: {
                          duration: 0.25,
                          delay: 0.15,
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.4,
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      },
                    }}
                    key="content"
                  >
                    {description.slice(1).map((paragraph, index) => {
                      return (
                        <p
                          key={index}
                          className="max-w-6xl text-justify text-base"
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mx-auto w-12">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isExpanded ? "expanded" : "notExpanded"}
                    initial={{
                      rotate: isExpanded ? -90 : 90,
                    }}
                    animate={{
                      rotate: isExpanded ? 0 : 180,
                      transition: {
                        type: "tween",
                        duration: 0.15,
                        ease: "circOut",
                      },
                    }}
                    exit={{
                      rotate: isExpanded ? -90 : 90,
                      transition: {
                        type: "tween",
                        duration: 0.15,
                        ease: "circIn",
                      },
                    }}
                  >
                    <ExpandedArrowIcon />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
          {description[1] &&
            description.slice(1).map((paragraph, index) => {
              return (
                <p
                  key={index}
                  className="max-w-6xl text-justify text-base tablet:hidden"
                >
                  {paragraph}
                </p>
              );
            })}
          {image && (
            <button
              onClick={handleCardClick}
              className="relative mx-auto my-0 w-64 cursor-pointer rounded-3xl bg-button px-4 py-2 text-lg font-medium shadow-2xl transition-colors duration-300 hover:bg-buttonHover tablet:hidden"
            >
              Click to see a sneak peek
            </button>
          )}
        </>
      )}
    </motion.div>
  );
}
