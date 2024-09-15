"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { PythonLogo } from "./components/logos/PythonLogo";
import { NextjsLogo } from "./components/logos/NextjsLogo";
import { TailwindLogo } from "./components/logos/TailwindLogo";
import { TypescriptLogo } from "./components/logos/TypescriptLogo";
import { GitLogo } from "./components/logos/GitLogo";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [titleClass, setTitleClass] = useState("");

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
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-70% from-bkg to-bkg-dark">
        <div id="title-container" className="pb-40 container">
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
                Software Engineer<span className="text-primary">.</span> <br />
              </h1>
              <h1
                className={`origin-bottom opacity-0 [transform:rotateX(90deg)] ${titleClass}`}
              >
                Web Developer<span className="text-primary">.</span> <br />
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
                  className="hover:text-secondary transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/matthew-frieri"}
                  target="_blank"
                  className="hover:text-secondary transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="gap-x-16 grid grid-cols-[2fr,1fr] grid-rows-[5rem,1fr] px-10 py-24 container">
          <p className={`${bebas_neue.className} text-5xl text-secondary`}>
            About Me
          </p>
          <p className={`${bebas_neue.className} text-5xl text-secondary`}>
            My Go-To Tools
          </p>
          <p id="bio" className="text-2xl">
            Hello! I'm Matthew Frieri, a second-year student in Computer and
            Data Science at the University of Toronto. I'm passionate about
            continuous learning and using technology to tackle real-world
            problems, always striving to make a positive impact.
          </p>
          <div id="tools" className="flex flex-wrap gap-8">
            <TypescriptLogo width={60} />
            <NextjsLogo width={60} />
            <TailwindLogo width={60} />
            <PythonLogo width={60} />
            <GitLogo width={60} />
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
          className="flex flex-col gap-[10rem] px-[2%] pb-60 overflow-hidden container"
        >
          <Card
            name="Resume Roast"
            href="https://github.com/MatthewFrieri/IgnitionHacks_ResumeRoast"
            tools={[
              "NodeJS",
              "React",
              "Tailwind",
              "Google AI Studio",
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
                Simply upload a file (or zip file) and in seconds everythin is
                annotated are annotated! Certain sections of code will be
                highlighted as areas of potential confusion where some
                refactoring could improve the codebase. More detailed notes
                along with a rating and justification for the readablitiy of the
                code can also be found by through some intuative navigation.
              </p>
            </div>
          </Card>
          <Card
            name="Cook Clever"
            href="https://github.com/MatthewFrieri/HawkHacks_CookClever"
            tools={["React", "Flask", "Google AI Studio", "MongoDB", "Neurelo"]}
          >
            <div className="flex items-center gap-x-[4%] px-[3%] py-[7.5%] h-full [perspective:750px]">
              <img
                src="projects/login.png"
                alt="A screenshot from the project."
                className="shadow-left rounded w-[25%]"
              />
              <img
                src="projects/image_analysis.png"
                alt="A screenshot from the project."
                className="shadow-left rounded w-[25%]"
              />
              <p id="card-text" className="my-auto text-3xl">
                CookClever is an innovative web app designed to help people
                learn how to cook. It offers recipes and step-by-step
                instructions to guide users through the cooking process. At each
                step, users are prompted to take a picture of their progress.
                Using AI, CookClever analyzes these images and provides tailored
                feedback to help users improve their cooking skills. This
                experience is also gamified by giving the user an overall score
                for how well the step was followed.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-dark">
        <div className="flex justify-center items-center gap-8 h-60 text-4xl container">
          <div className="border-secondary mr-10 border w-80 footer-lines" />
          <Link
            href={"mailto: mat.frieri@gmail.com"}
            target="_blank"
            className="hover:text-secondary transition-all hover:scale-110"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link
            href={"https://github.com/MatthewFrieri"}
            target="_blank"
            className="hover:text-secondary transition-all hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/matthew-frieri"}
            target="_blank"
            className="hover:text-secondary transition-all hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href={"Resume.pdf"}
            target="_blank"
            className="hover:text-secondary transition-all hover:scale-110"
          >
            <FontAwesomeIcon icon={faNewspaper} />
          </Link>
          <div className="border-secondary ml-10 border w-80 footer-lines" />
        </div>
      </section>
    </>
  );
}
