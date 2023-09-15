"use client";

import { ExperienceCard, EducationCard, ProjectCard } from "@/components/Card";
import { CardCategory } from "@/types/Categories";
import { CardData } from "@/types/CardData";
import { useState } from "react";

const cards: Record<CardCategory, CardData[]> = {
  Experience: [
    {
      title: "Lights and Lanes Detection Team Lead",
      place: "GM-SAE AutoDrive Challenge / aUToronto UofT",
      dates: "Sep 2023 - Present",
      description: [
        "Pioneered innovative lane information utilization strategies, which bolstered route-planning capabilities, and enhanced vehicle localization techniques through cutting-edge deep learning algorithms, primarily built using Python and PyTorch.",
        "Conceptualized and orchestrated the C++ development pipeline for intricate traffic light management. This involved advanced computing concepts ranging from mapping systems to Kalman Filters, and Hidden Markov Models for refining post-light detection processing. The primary focus remained on eliminating any spurious detections and strengthening the association between lane-mapping and localization.",
      ],
      bulletPoints: [
        "Directed a proficient team of 10, ensuring a collaborative environment that fostered creativity and innovation.",
        "Overlooked system integration and rigorous reliability testing procedures to maintain peak code robustness.",
        "Streamlined and optimized the existing codebase, emphasizing agile methodologies and iterative improvements.",
        "Held comprehensive code review sessions, ensuring the development of a trustworthy and fail-safe system.",
      ],
      icon: "/images/autodrive.jpg",
    },
    {
      title: "TECHNOLOGY DIRECTOR",
      place: "University of Toronto Robotics Association (UTRA)",
      dates: "Sep 2023 - Present",
      description: [
        "As the Technology Director at UofT Robotics Association, I've been privileged to lead the technological vision for UTRA's renowned Robotics Hackathon - heralded as Canada's premier robotics event. This role has given me the opportunity to shape the future of robotics by overseeing intricate facets from hardware, software, to mechanical integrations.",
        "My leadership was pivotal in steering a mammoth task force comprising 400 enthusiastic hacker participants, 100 dedicated volunteers, and industry mentors. This feat was achieved through a synergized collaboration with the esteemed Robotics Institute. Furthermore, my role was instrumental in framing the hackathon's evaluation standards by developing its scoring rubrics in tandem with the judges and awards committee.",
      ],
      bulletPoints: [
        "Directed Canada's top-tier Robotics Hackathon, positioning UTRA at the forefront of innovation.",
        "Strategically advised on hardware selections, optimizing budgeting processes and ensuring cutting-edge tech integration.",
        "Played a critical role in event success by devising robust evaluation standards and troubleshooting operational issues.",
        "Honed a vast array of skills including Robotics, Leadership, and fostering Teamwork.",
      ],
      icon: "/images/utra.jpg",
    },
    {
      title: "Software Developer Intern",
      place: "Swap Commerce",
      dates: "May - Sep 2021",
      description: [
        "As a Software Engineer Intern at Swap Commerce, I played a pivotal role in shaping the technological advancements of the company's key platforms. My time here was marked by the design and development of a state-of-the-art enterprise-grade administrative dashboard, meticulously constructed using Flutter and Dart.",
        "My dedication to the role saw me spearheading numerous initiatives, most notably an optimization project that not only streamlined workflows but also directly contributed to a $1 million boost in revenue.",
      ],
      bulletPoints: [
        "Designed a top-tier administrative dashboard with Flutter & Dart, ensuring optimum performance and establishing secure connections to integral company codebase components.",
        "Drove an optimization initiative, resulting in a remarkable $1 million increase in revenue by refining user experiences and enhancing workflows.",
        "Bolstered application efficiency and reliability through rigorous refactoring and the incorporation of comprehensive end-to-end unit testing.",
        "Fostered close collaborations with the tech team, pioneering the development and implementation of REST APIs, enhancing frontend-backend system communications.",
        "Successfully integrated platform services with 40+ high-profile businesses, inclusive of industry leaders such as Sirplus and Aspiga.",
      ],
      icon: "/images/swapcommerce.png",
    },
    {
      title: "Lane Detection Software Engineer",
      place: "GM-SAE AutoDrive Challenge / aUToronto UofT",
      dates: "Sep 2022 - Aug 2023",
      description: [
        "Developed and optimized a state-of-the-art deep neural network. The design leveraged both supervised and self-supervised learning paradigms using OpenCV2 and PyTorch. This system was instrumental in detecting driving lanes and stop lines, a key factor behind the team's 6 consecutive wins in Year 2 of the AutoDrive Challenge II.",
        "Conceived and put into practice a classic C++ based lane detection mechanism infused with computer vision technology, achieving a staggering 98% accuracy on even the most challenging datasets.",
      ],
      bulletPoints: [
        "Played a pivotal role in earning the team accolades through consecutive wins in a prestigious competition.",
        "Skillfully navigated the intricacies of C++, leveraging its potential for high-end computer vision applications.",
        "Prioritized collaborative teamwork, fostering a productive and harmonious work environment.",
        "Maintained an unwavering commitment to quality and precision, ensuring reliable software performance.",
      ],
      icon: "/images/autodrive.jpg",
      image: "/images/aUToronto.jpg",
    },
    {
      title: "Co-Founder & Developer at Tunescape",
      place: "Toronto, Ontario, Canada - UofT Hatchery",
      dates: "May 2022 - May 2023",
      description: [
        "Co-founded Tunescape, an avant-garde startup aimed at revolutionizing music recommendation. At its core, Tunescape's algorithm prioritizes the underlying musical characteristics of songs, like key signature and tempo, providing a deeply tailored experience for users. This unique approach resonates especially with those who have undergone musical training, delivering to them a spectrum of music that matches their refined tastes.",
        "Secured an elite spot in the University of Toronto Hatchery program by standing out among 170 applications, and further demonstrated excellence by being one of the 9 groups that progressed to the second round.",
      ],
      bulletPoints: [
        "Pioneered the strategic development of monetization, conducting exhaustive market research and successfully securing project funding.",
        "Oversaw the holistic development of a Flutter application, emphasizing code reusability and readability across platforms.",
        "Wrote APIs in C++ that leveraged Docker and multiprocessing for streamlined handling of voluminous data points.",
        "Merged musical theory, data science, and software engineering to birth Tunescape, a nexus of innovation in music recommendation.",
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
        "Distinguished by the Engineering Society: Recipient of the prestigious Centennial Award (Apr 2022), selected out of 100+ people, recognizing commitment and dedication through active participation in extracurricular activities and representing interests of 1000+ students.",
        "Dean's Honours List: Recognized twice in a row for academic excellence, earning a place on the Dean's Honours List at the University of Toronto.",
        "Top Performer: Achieved a perfect grade of 100 in the course ESC180 (Data Structures and Python), showcasing exceptional aptitude and understanding.",
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
      title: "GarbageGopher: Advanced Autonomous Garbage Robot",
      dates: "Jan - Sep 2023",
      description: [
        "Engineered an innovative autonomous robot, 'GarbageGopher', designed for indoor garbage collection, primarily written in C++.",
        "Leveraged state-of-the-art technologies including SLAM (through GTSAM), PID controllers, and efficient path-planning algorithms such as A* & RRT, ensuring accurate navigation and precise depth estimation.",
        "Incorporated an optimal hardware suite: ultrasonic sensors paired with an 8MP camera. Further enhanced with ONNX-integrated machine learning models run on Nvidia Jetson Nano, resulting in an expansive 170-degree environmental perception.",
        "Adopted OpenCV for proficient image processing and object detection, simplifying actuator controls via the pyheader module. This enabled a smooth integration between C++ and Python, especially on the Nvidia Jetson Nano platform.",
        "Welcome to the GarbageGopher repository, a modern robotic solution that aims to redefine autonomous garbage collection. This project is a testament to top-tier software design, cutting-edge algorithms, and refined robotics engineering.",
      ],
      link: "https://github.com/Galc3882/GarbageGopher",
      image: "/images/GarbageGopher.png",
    },
    {
      title: "Self Supervised Data Labeling ML",
      dates: "Aug 2022",
      description: [
        "Developed and implemented self-supervised classification models, specifically the VGG16 and ResNet152. Incorporated multi-GPU training for enhanced efficiency and automatic hyperparameter optimization.",
        "Achieved remarkable classification results: a staggering accuracy of 99% on the LISA traffic light dataset. Additionally, demonstrated impressive adaptability with an accuracy of 98% on the MIT dataset, despite it not being part of the training set.",
        "Dive deep into the project which integrates two primary machine learning models: Object Detection and Depth Perception. The models are tailored to run optimally on the Jetson Nano, balancing real-time processing without compromising accuracy.",
        "The entire initiative demonstrates modular design, ensuring clarity in the directory structure with third-party libraries or machine learning models organized seamlessly.",
      ],
      link: "https://github.com/Galc3882/self-supervised-data-labeling-ML",
      image: "/images/ml.png",
    },
    {
      title: "ESC102 Capstone: Dual-Pivot Mechanism",
      dates: "Jan - Apr 2022",
      description: [
        "Intensive engineering design course focused on real-world application and problem-solving.",
        "Group project centered on the engineering design process with a spotlight on innovation and inclusion.",
        "Pioneered the design and coding of a robotic hand intended for precise stick maneuverability.",
        "Developed a unique solution aiding hockey players with disabilities using a joystick interface.",
        "Objective to make hockey more inclusive by empowering players with disabilities to manipulate, shoot, and block the ball seamlessly.",
      ],
      link: "https://github.com/Galc3882/Dual-Pivot-Mechanism",
      image: "/images/ESC102.png",
    },
    {
      title: "Blackjack DDQN: Deep Reinforcement Learning Model",
      dates: "Feb 2021",
      description: [
        "An advanced model demonstrating the application of Deep Reinforcement Learning in gaming.",
        "Utilized Double Q-learning to perfect game strategy and decision-making in a Blackjack game environment.",
        "Achieved a staggering loss ratio of 87.1%, inching close to the theoretical best of 99.4%.",
        "Python and TensorFlow powered solution designed to be both performative and educational.",
        "Aimed to act as a guiding resource for enthusiasts diving into the realm of deep reinforcement learning.",
        "The Blackjack-DDQN model optimizes its play strategy by learning from countless simulated Blackjack games.",
        "At its core is a Double Q-learning algorithm that minimizes the overestimation of action values.",
        "The TensorFlow-backed neural network estimates each possible move's value, directing the agent's next action.",
        "An epsilon-greedy strategy ensures a harmonious balance between exploration (learning) and exploitation (using learned strategies).",
      ],
      link: "https://github.com/Galc3882/Blackjack-DDQN",
    },
    {
      title: "Amplitude Modulation Design & Analysis",
      dates: "Jan - Apr 2020",
      description: [
        "A comprehensive dive into the realm of amplitude modulation for transmitting information.",
        "Collaborated closely with a dedicated lab partner, meticulously designing and building both an amplitude modulator and envelope detector.",
        "Incorporated cutting-edge multiplexing capabilities to facilitate the transmission of multiple signals simultaneously.",
        "Engaged with advanced electrical engineering topics, including semiconductors, subtractors, amplifiers, and sine wave generators.",
        "Successfully simulated the design using powerful tools such as Tina TI, MATLAB, and Excel.",
        "Committed over 200 hours, ensuring every detail was refined and our objectives met.",
      ],
      link: "https://github.com/Galc3882/Amplitude-Modulation",
      image: "/images/am.png",
    },
    {
      title: "Assembly - Pacman for 8086 Intel Processor",
      dates: "May - Aug 2019",
      description: [
        "Reviving the classic Pacman game in a minimalistic yet powerful way using assembly language.",
        "Tailored specifically for the 8086 Intel processor, this version showcases the essence of efficiency and compactness.",
        "A one-of-a-kind recreation, including all facets of the original gameplay and stunning graphics.",
        "Codebase divided into multiple files including p.asm, dseg.h, and drawB.h, ensuring organized and modular architecture.",
        "Mastered the challenges of programming in assembly language and debugging with precise accuracy.",
        "Offered as a go-to project for learners who wish to delve deep into assembly language or aspire to craft their own Pacman rendition.",
      ],
      link: "https://github.com/Galc3882/Assembly-Pacman",
      image: "/images/pacman.png",
    },
    {
      title: "Chess Against Computer",
      dates: "2018",
      description: [
        "Introducing 'Chess Against Computer', an immersive digital chess experience.",
        "Face off against a computer opponent powered by the advanced minimax algorithm.",
        "Masterfully crafted using C# in the Visual Studio Windows Forms development environment.",
        "An exquisite amalgamation of programming precision and the age-old game of strategy.",
        "Each chess piece is encapsulated by the Piece class, symbolizing their unique movements.",
        "The ComputerPlayer class is the brain, leveraging the minimax algorithm to forecast the best moves against its human adversary.",
      ],
      link: "https://github.com/Galc3882/Chess-against-computer",
      image: "/images/chess.png",
    },
    {
      title: "Grapher: A 3D Graph Drawing Tool",
      dates: "2018",
      description: [
        "Presenting 'Grapher', your personal 3D graph visualizer.",
        "Designed for Windows, this tool elegantly translates mathematical expressions into vivid 3D representations.",
        "Developed in C# with the Windows Forms platform, ensuring robustness and reliability.",
        "From constants and variables to intricate functions, Grapher comprehends and visualizes with unmatched precision.",
        "A multifaceted parser delves into user inputs, breaking down even the most complex of mathematical expressions.",
        "Efficiency at its core: The 3D graph engine is optimized for performance, offering smooth transitions and visualizations.",
        "Rotate, pan, and zoom, exploring your 3D graph from myriad perspectives.",
      ],
      link: "https://github.com/Galc3882/Grapher",
      image: "/images/grapher.png",
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
