import { ExperienceCard, EducationCard, ProjectCard } from "@/components/Card";
import { CardCategory } from "@/types/Categories";
import { CardData } from "@/types/CardData";
import { useState } from "react";

const cards: Record<CardCategory, CardData[]> = {
  Experience: [
    {
      title: "Full Stack Software Developer",
      place: "Swap Commerce",
      dates: "May - Sep 2021",
      description: [
        "Designed and developed an enterprise-grade administrative dashboard using Flutter and Dart at Swap Commerce. Ensured seamless performance while establishing secure connections to the company's codebase.",
      ],
      bulletPoints: [
        "Instrumental in driving a $1 million increase in revenue in 4 months by enhancing user experiences and optimizing workflows.",
        "Championed an optimization initiative by meticulously refactoring critical components of the application. This effort resulted in improved efficiency, stability, and was fortified by comprehensive end-to-end unit testing.",
        "Collaborated closely with the technical team to architect and implement REST APIs, facilitating seamless communication between the frontend and backend systems.",
        "Successfully integrated our platform services with over 40 well-known businesses, including notable brands like Sirplus and Aspiga.",
      ],
      icon: "/images/swapcommerce.png",
    },
    {
      title: "Lane Detection Software Engineer",
      place: "GM-SAE AutoDrive Challenge / aUToronto UofT",
      dates: "Sep 2021 - Sep 2022",
      description: [
        "As a Lane Detection Software Engineer for the GM-SAE AutoDrive Challenge at aUToronto UofT, I undertook groundbreaking initiatives to advance autonomous driving technology. I developed and optimized a state-of-the-art deep neural network utilizing supervised and self-supervised learning techniques with OpenCV2 and PyTorch. This cutting-edge technology enabled precise detection of driving lanes and stopping lines, propelling the team to secure a remarkable 6 consecutive victories in Year 2 of the AutoDrive Challenge II.",
      ],
      bulletPoints: [
        "Developed and optimized a sophisticated deep neural network using the power of supervised and self-supervised learning. Through a fusion of OpenCV2 and PyTorch, I crafted an intelligent system capable of detecting driving lanes and stopping lines with unparalleled precision.",
        "Played a pivotal role in the team's remarkable success, securing 6 consecutive victories in Year 2 of the AutoDrive Challenge II. My lane detection algorithm stood as a cornerstone of our triumphs, pushing the boundaries of accuracy and performance.",
        "Pushing the envelope further, I harnessed the capabilities of classical lane detection approaches and computer vision techniques using C++. This strategic integration yielded a remarkable accuracy rate of 98% even when faced with the most challenging and diverse datasets.",
        "Collaborated seamlessly with a multidisciplinary team of engineers, pooling our collective expertise to architect and implement robust REST APIs. This enabled flawless communication between our cutting-edge lane detection system and the intricate backend infrastructure.",
        "By continually optimizing the neural network and fine-tuning the detection algorithms, I ensured that our autonomous vehicle remained on the forefront of precision and safety, setting new benchmarks in lane detection technology.",
      ],
      icon: "/images/autodrive.jpg",
      image: "/images/aUToronto.jpg",
    },
    {
      title: "Graphical User Interface Team Lead",
      place: "GM-SAE AutoDrive Challenge / aUToronto UofT",
      dates: "Jan 2021 - Sep 2021",
      description: [
        "Led a team to successful completion of Year 1 in the AutoDrive Challenge II, revolutionizing cross-team collaboration through innovative tools and problem-solving strategies.",
      ],
      bulletPoints: [
        "Architected and oversaw the development of cutting-edge graphical tools that facilitated real-time ROS 2 publisher data debugging, enhancing the accuracy and efficiency of debugging processes.",
        "Exercised adept leadership, organizational prowess, and technical acumen in C++ and Python to craft visually stunning and user-friendly graphical visualizations, setting new standards for interface design within the project.",
        "Orchestrated seamless integration among diverse teams by building tools for cross-team collaboration, a critical component in resolving intricate challenges encountered during the AutoDrive Challenge II.",
        "Empowered the team through effective communication and mentorship, fostering an environment of continuous learning and growth that was pivotal in achieving project milestones.",
      ],
      icon: "/images/autodrive.jpg",
    },
    {
      title: "Co-Founder",
      place: "Tunescape",
      dates: "May 2021 - Sep 2021",
      description: [
        "Co-founded Tunescape, an innovative startup that revolutionized music recommendation by merging cutting-edge technology with musical expertise.",
      ],
      bulletPoints: [
        "Conceptualized and led the development of an advanced song recommendation service, leveraging a proprietary algorithm designed to foreground underlying musical characteristics.",
        "Pioneered the integration of intricate features such as key signature and tempo, catering to users with musical training and discerning taste.",
        "Engineered Tunescape's recommendation system to provide unparalleled specificity, offering users a seamless journey through the vast landscape of music genres they truly enjoy.",
        "Selected from a highly competitive pool of 170 applicants, Tunescape secured a coveted spot in the prestigious University of Toronto Hatchery program.",
        "Distinguished further by progressing to the second round, marking our startup as one of only 9 exceptional groups out of the initial cohort.",
      ],
      icon: "/images/Tunescape-Logo.png",
    },
    {
      title: "Member of the Board of Directors",
      place: "Engineering Society, University of Toronto",
      dates: "Sep 2020 - Sep 2021",
      description: [
        "Elected by the 1st-year engineering class to serve on the Board of Directors at the prestigious Engineering Society of the University of Toronto. Represented the voices and interests of over 1000 students at the highest level of governance within the Faculty of Applied Science and Engineering.",
      ],
      bulletPoints: [
        "Advocated for the needs of first-year students, ensuring their concerns were heard and addressed by holding the Officers and Directors of the Society accountable.",
        "Active participant in critical decision-making processes, contributing to shaping the future direction of the Engineering community.",
        "Through this role, gained a comprehensive insight into the challenges and aspirations of fellow students, allowing for collaborative efforts to develop effective solutions for the betterment of the Engineering society.",
        "Recognized for dedication and leadership with the prestigious Engineering Society Centennial Award, presented by the University of Toronto Engineering Society in April 2021.",
      ],
      icon: "/images/engsoc.png",
    },
    {
      title: "Full Stack Web Developer",
      place: "EYweb",
      dates: "Oct 2020 - Aug 2021",
      description: [
        "Proficiently implemented dynamic websites and engaging landing pages using an array of technologies, including JavaScript, CSS, and PHP.",
      ],
      bulletPoints: [
        "Transcribed client visions into reality, crafting responsive layouts and functional components that aligned precisely with specifications.",
        "Expertly customized websites across diverse platforms, ensuring the production of efficient, maintainable, and well-documented code.",
        "Provided invaluable technical consultancy to clients and management, guiding the selection of technologies that maximized functionality, security, and privacy, while also minimizing development timelines.",
        "Engineered automation solutions using Python, streamlining labor-intensive tasks in e-commerce and translation workflows.",
        "Demonstrated proficiency in both hardware and software management, skillfully handling critical security risks and optimizing operational costs.",
      ],
      icon: "/images/eyweb.jpg",
    },
  ],
  Education: [
    {
      title:
        "Bachelor of Applied Science in Engineering Science with PEY Co-op",
      place: "University of Toronto",
      dates: "Sep 2021 - Apr 2025",
      description: [
        "I am currently studying Engineering Science at the University of Toronto and will graduate in 2025 with a specialty in Robotics and a minor in Business and AI.",
        "Noteworthy Achievements:",
      ],
      bulletPoints: [
        "Distinguished  by  the  Engineering  Society:  Recipient  of  the  prestigious Centennial Award (Apr 2022), recognizing commitment and dedication through active participation in extracurricular activities.",
        "Dean’s Honours List: Recognized twice in a row for academic excellence, earning a place on the Dean's Honours List at the University of Toronto.",
        "Top Performer: Achieved a perfect grade of 100 in the course ESC180 (Data  Structures  and  Python),  showcasing  exceptional  aptitude  and understanding.",
        "Noteworthy courses:",
      ],
      subBulletPoints: [
        "CSC384H1: Introduction to Artificial Intelligence",
        "ROB301H1: Introduction to Robotics",
        "MAT292H1: Ordinary Differential Equations",
        "ROB310H1: Mathematics for Robotics",
        "ECE286H1: Probability and Statistics",
        "CSC263H1: Data Structures and Analysis",
      ],
      icon: "/images/uoft.jpg",
    },
  ],
  Projects: [
    {
      title: "Self Supervised Data Labeling ML",
      dates: "Aug 2022",
      description: [
        "This method is used for automatically labeling data points in a dataset, using a technique called 'self-supervised learning'. The technique is based on the idea that if a machine learning algorithm can learn to label data points on its own, then it can be used to label new data points that are not in the training set. This would be useful for tasks such as image classification, where it is often difficult to obtain labels for all of the data points.",
        "This repository contains two self-supervised data labeling machine learning models based on the VGG16 model and ResNet152 with multi-GPU training and automatic hyperparameter tuning that can be used for traffic light classification. The VGG16 model was able to classify the traffic light images with an accuracy of above 99% for the LISA dataset and an accuracy of above 94% for the MIT dataset. The ResNet152 model was able to classify the traffic light images with an accuracy of above 99% for the LISA dataset and an accuracy of above 98% for the MIT dataset.",
      ],
      link: "https://github.com/Galc3882/self-supervised-data-labeling-ML",
      image: "/images/aUToronto.jpg",
    },
    {
      title: "Dual Pivot Mechanism",
      dates: "Apr 2022",
      description: [
        "A project for an engineering design course ESC102. The Dual-Pivot Mechanism design aims to enable hockey players with disabilities to maneuver the hockey stick easily and precisely using a joystick controller. This mechanism aims to achieve three movements that are important to hockey players; manipulating, shooting and blocking the ball. This will in turn increase their involvement in the game.",
      ],
      link: "https://github.com/Galc3882/Dual-Pivot-Mechanism",
    },
    {
      title: "Pacman with AI in Assembly",
      dates: "July 2021",
      description: [
        "An assembly language version of the classic Pacman game for the 8086 Intel processor. This project is a complete recreation of the original game, including all the original gameplay and graphics. The game is written in pure assembly language, making it one of the smallest and most efficient versions of Pacman ever created. This project is perfect for anyone who wants to learn how to program in assembly language, or for anyone who wants to create their own Pacman clone.",
      ],
      link: "https://github.com/Galc3882/Assembly-Pacman",
    },
    {
      title: "Barrel Segmentation",
      dates: "Feb 2021",
      description: [
        "A project that outputs the segmentation mask of orange barrels in pictures.",
      ],
      link: "https://github.com/Galc3882/aUToronto-python-coding-challenge",
    },
  ],
};

interface Props {
  category: CardCategory;
}

const Cards: React.FC<Props> = ({ category }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (selectedCard === index) setSelectedCard(null);
    else {
      const cardElement = document.getElementById(`card-${index}`);
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setSelectedCard(index);
    }
  };

  return (
    <>
      {cards[category].map((card, index) => {
        switch (category) {
          case "Experience":
            return (
              <ExperienceCard
                key={index}
                listId={`card-${index}`}
                {...card}
                selectedCard={selectedCard === index}
                handleCardClick={() => handleCardClick(index)}
              />
            );
          case "Education":
            return (
              <EducationCard key={index} listId={`card-${index}`} {...card} />
            );
          case "Projects":
            return (
              <ProjectCard
                key={index}
                listId={`card-${index}`}
                {...card}
                selectedCard={selectedCard === index}
                handleCardClick={() => handleCardClick(index)}
              />
            );
        }
      })}
    </>
  );
};
export default Cards;
