"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { PythonLogo } from "./components/logos/PythonLogo";
import { NextjsLogo } from "./components/logos/NextjsLogo";
import { TailwindLogo } from "./components/logos/TailwindLogo";
import { TypescriptLogo } from "./components/logos/TypescriptLogo";
import { GitLogo } from "./components/logos/GitLogo";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { Bebas_Neue } from "next/font/google";
import WinnerBanner from "./components/WinnerBanner";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [titleClass, setTitleClass] = useState("");
  const [arrowClass, setArrowClass] = useState("");

  const handleScroll = () => {
    const title = document.getElementById("projects-title");

    // const dissapearLimit = window.innerWidth > 768 ? 1600 : 1300;
    let dissapearLimit;
    if (window.innerWidth > 768) dissapearLimit = 1600;
    else if (window.innerWidth > 475) dissapearLimit = 1300;
    else dissapearLimit = 1550;

    if (window.scrollY > dissapearLimit) {
      title!.style.visibility = "hidden";
    } else {
      title!.style.visibility = "visible";
    }

    const section = document.getElementById("projects-container");
    const children = section!.children;

    for (let i = 0; i < children.length; i++) {
      const card = children[i].children[0] as HTMLDivElement;

      const cardRect = card!.getBoundingClientRect();

      const centerY = cardRect.y - (window.innerHeight - cardRect.height) / 2;
      const progress =
        centerY /
        ((window.innerHeight - cardRect.height) / 2 + cardRect.height);

      card!.style.transform = `rotateX(${progress * 30}deg) translateZ(-50px)`;

      const images = card.querySelectorAll("img");

      images.forEach((image) => {
        image.style.transform = `translateZ(${Math.abs(progress) * 60}px)`;

        if (image.classList.contains("shadow-top-left")) {
          image.style.boxShadow = `${Math.abs(progress) * 7}px ${
            Math.abs(progress) * 10
          }px 5px black`;
        } else if (image.classList.contains("shadow-bottom-left")) {
          image.style.boxShadow = `${Math.abs(progress) * 7}px -${
            Math.abs(progress) * 10
          }px 5px black`;
        } else if (image.classList.contains("shadow-left")) {
          image.style.boxShadow = `${Math.abs(progress) * 10}px 0px 5px black`;
        }
      });
    }
  };

  useEffect(() => {
    setTitleClass("animate-title");
    setArrowClass("animate-arrow");
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-70% from-bkg to-bkg-dark">
        <div id="title-container" className="pb-20 container">
          <p
            id="name"
            className="mb-32 p-4 h-16 font-medium text-3xl text-center"
          >
            Matthew Frieri
          </p>
          <div className="flex justify-between">
            <img
              id="profile"
              src="profile.png"
              alt="Matthew Frieri"
              className="bg-gradient-to-b from-20% from-primary to-primary-dark shadow-dark shadow-xl rounded-full h-[38rem]"
            />
            <div
              className={`flex flex-col [perspective:750px] text-right text-[9.5rem] leading-[1.1] ml-auto ${bebas_neue.className}`}
            >
              <h1
                className={`origin-bottom opacity-0 [transform:rotateX(90deg)] ${titleClass}`}
              >
                Systems Designer<span className="text-primary">.</span> <br />
              </h1>
              <h1
                className={`origin-bottom opacity-0 [transform:rotateX(90deg)] ${titleClass}`}
              >
                Data Engineer<span className="text-primary">.</span> <br />
              </h1>
              <h1
                className={`origin-bottom opacity-0 [transform:rotateX(90deg)] ${titleClass}`}
              >
                Problem Solver<span className="text-primary">.</span>
              </h1>
              <div
                id="top-links"
                className="flex justify-center gap-8 mt-10 text-5xl"
              >
                <Link
                  href={"https://github.com/MatthewFrieri"}
                  target="_blank"
                  className="hover:text-secondary hover:scale-110 transition-all"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/matthew-frieri"}
                  target="_blank"
                  className="hover:text-secondary hover:scale-110 transition-all"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link href={"Matthew_Frieri_Resume.pdf"} target="_blank">
                  <button className="bg-content hover:bg-secondary mb-[] px-2 pt-[0.3rem] rounded-[0.2rem] text-bkg text-4xl leading-[] hover:scale-110 transition-all">
                    Resume
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <span
            className={`flex justify-center mt-6 text-3xl ${arrowClass} opacity-0`}
          >
            <Link href={"#about-section"}>
              <div className="p-4">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </Link>
          </span>
        </div>
      </section>

      <section id="about-section" className="bg-dark">
        <div className="gap-x-16 grid grid-cols-[2fr,1fr] grid-rows-[5rem,1fr] px-10 py-24 container">
          <p className={`${bebas_neue.className} text-5xl text-secondary`}>
            About Me
          </p>
          <p className={`${bebas_neue.className} text-5xl text-secondary`}>
            My Go-To Tools
          </p>
          <p id="bio" className="text-2xl">
            Hi! I'm Matthew Frieri, a third-year student in Computer and Data
            Science at the University of Toronto. I'm passionate about
            always learning new things and using technology to tackle real-world
            problems, striving to make a positive impact.
          </p>
          <div id="tools" className="flex flex-wrap gap-8">
            <GitLogo width={60} />
            <PythonLogo width={60} />
            <TypescriptLogo width={60} />
            <NextjsLogo width={60} />
          </div>
        </div>
      </section>

      <section className="top-[18rem] sticky container">
        <h1
          id="projects-title"
          className={`${bebas_neue.className} text-[12rem] text-center  mt-32 mb-32`}
        >
          Projects
        </h1>
      </section>

      <section className="bg-gradient-to-b from-70% from-bkg to-bkg-dark">
        <div
          id="projects-container"
          className="flex flex-col gap-[10rem] px-[5%] pb-60 overflow-hidden container"
        >
          <Card
            name="Doug the Poker Bot"
            href="https://devpost.com/software/doug-the-poker-bot"
            tools={["React", "Flask", "   Python   ", "YOLO", "C++", "ESP32"]}
          >
            <div className="gap-x-[5%] grid grid-cols-[40%,1fr] grid-rows-2 p-[7.5%] h-full overflow-hidden [perspective:750px]">
              <WinnerBanner />
              <img
                src="projects/doug_the_poker_bot.jpeg"
                alt="An image from the project."
                className="shadow-left rounded w-[85%]"
              />
              <p
                id="card-text"
                className="col-start-2 row-span-2 row-start-1 my-auto text-3xl"
              >
                Doug is an autonomous robotic poker dealer and broadcaster, designed 
                to transform the home poker experience. Using computer vision and 
                speech interpretation, Doug deals cards, follows the flow of the game, 
                and understands betting actions such as checks, calls, raises, and folds. 
                His live broadcast interface keeps spectators engaged by displaying 
                players' cards, win probabilities, and statistics like VPIP and PFR. 
                Doug combines robotics, AI, and real-time data to bring a new level of 
                automation and engagement to poker.
              </p>
            </div>
          </Card>
          <Card
            name="Impactify"
            href="https://devpost.com/software/impactify"
            tools={["Docker", "  PostgreSQL  ", "React", "Django", "Python"]}
          >
            <div className="gap-x-[5%] grid grid-cols-[40%,1fr] grid-rows-2 p-[7.5%] h-full overflow-hidden [perspective:750px]">
              <WinnerBanner />
              <img
                src="projects/helmet.png"
                alt="An image from the project."
                className="shadow-top-left mt-auto mb-4 rounded"
              />
              <img
                src="projects/live_impact.png"
                alt="A screenshot from the project."
                className="shadow-bottom-left col-start-1 mt-4 rounded"
              />
              <p
                id="card-text"
                className="col-start-2 row-span-2 row-start-1 my-auto text-3xl"
              >
                Impactify combats the rising issue of head trauma injuries in
                contact sports. By integrating advanced hardware into helmets,
                it tracks impacts during training and games, providing athletes
                and coaches with vital insights into cognitive well-being. This
                system enables proactive measures against potential head
                injuries, ensuring safer play. With real-time notifications and
                data visualization, Impactify empowers athletes to make informed
                decisions about their health, driving the future of safer
                sports.
              </p>
            </div>
          </Card>
          <Card
            name="Together"
            href="https://github.com/MatthewFrieri/CtrlHackDel_Together"
            tools={[
              "Expo",
              "React Native",
              "  Google Maps  ",
              "SQLite",
              "Django",
            ]}
          >
            <div className="flex items-center gap-x-[4%] p-[7.5%] pr-[9%] h-full [perspective:750px]">
              <img
                src="projects/map.jpeg"
                alt="A screenshot from the project."
                className="shadow-left rounded w-[22%]"
              />
              <img
                src="projects/group.jpeg"
                alt="A screenshot from the project."
                className="shadow-left rounded w-[22%]"
              />
              <p id="card-text" className="my-auto text-3xl">
                Together fosters neighborhood connections by allowing users to
                explore local events, join community groups, and chat with
                nearby residents. Designed to revive a sense of local community,
                it helps neighbors stay informed, communicate, and connect
                naturally. With features like real-time messaging, map-based
                event viewing, and neighborhood groups, the app revives the
                essence of community in neighborhoods.
              </p>
            </div>
          </Card>
          <Card
            name="Code Genius"
            href="https://github.com/MatthewFrieri/HackThe6ix-CodeGenius"
            tools={[
              "NextJS",
              "  TypeScript  ",
              "Tailwind",
              "Flask",
              "Meta Llama",
            ]}
          >
            <div className="gap-x-[5%] grid grid-cols-[40%,1fr] grid-rows-2 p-[7.5%] h-full [perspective:750px]">
              <img
                src="projects/code_review.png"
                alt="A screenshot from the project."
                className="shadow-top-left mt-auto mb-4 rounded"
              />
              <img
                src="projects/why_score.png"
                alt="A screenshot from the project."
                className="shadow-bottom-left col-start-1 mt-4 rounded"
              />
              <p
                id="card-text"
                className="col-start-2 row-span-2 row-start-1 my-auto text-3xl"
              >
                CodeGenius is a tool to help annotate and break down code.
                Simply upload a file (or zip file) and in seconds everything is
                annotated! Certain sections of code will be highlighted as areas
                of potential confusion where some refactoring could improve the
                codebase. More detailed notes along with a rating and
                justification for the readablitiy of the code can also be found
                by through some intuative navigation.
              </p>
            </div>
          </Card>
          <Card
            name="Resume Roast"
            href="https://github.com/MatthewFrieri/IgnitionHacks_ResumeRoast"
            tools={[
              "NodeJS",
              "React",
              "Tailwind",
              " Google AI Studio ",
              "ElevenLabs",
            ]}
          >
            <div className="gap-x-[5%] grid grid-cols-[40%,1fr] grid-rows-2 p-[7.5%] h-full [perspective:750px]">
              <img
                src="projects/drakes_diss.png"
                alt="A screenshot from the project."
                className="shadow-top-left mt-auto mb-4 rounded"
              />
              <img
                src="projects/kendricks_critique.png"
                alt="A screenshot from the project."
                className="shadow-bottom-left col-start-1 mt-4 rounded"
              />
              <p
                id="card-text"
                className="col-start-2 row-span-2 row-start-1 my-auto text-3xl"
              >
                Resume Roast takes the user's resume, and uses AI and voice
                replication systems to generate a track by Drake, dissing the
                resume in a personalized and playful manner. Drake will lay down
                some smooth bars and sharp lyrics highlighting the weaknesses in
                your resume. After listening to the exceptional track by
                Toronto's very own, the user is then prompted to "fix their
                resume." They are then treated to yet another musical
                masterpiece by Drake's biggest rival, Kendrick Lamar. This is
                where the user gains key insights on specific ways to improve
                their resume.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-dark">
        <div className="flex justify-center items-center gap-6 h-60 text-4xl container">
          <div className="mr-10 border border-secondary w-80 footer-lines" />
          <Link
            href={"mailto: mat.frieri@gmail.com"}
            target="_blank"
            className="hover:text-secondary hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link
            href={"https://github.com/MatthewFrieri"}
            target="_blank"
            className="hover:text-secondary hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/matthew-frieri"}
            target="_blank"
            className="hover:text-secondary hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href={"Matthew_Frieri_Resume.pdf"} target="_blank">
            <button
              className={`bg-content px-2 mb-[0.6rem] rounded-[0.2rem] pt-[0.2rem] leading-[1.8rem] text-dark hover:bg-secondary text-2xl transition-all hover:scale-110 ${bebas_neue.className}`}
            >
              Resume
            </button>
          </Link>

          <div className="ml-10 border border-secondary w-80 footer-lines" />
        </div>
      </footer>
    </>
  );
}
