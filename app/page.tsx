"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Header from "./components/Header";
import { bebas_neue } from "./layout";
import { PythonLogo } from "./components/logos/PythonLogo";
import { NextjsLogo } from "./components/logos/NextjsLogo";
import { TailwindLogo } from "./components/logos/TailwindLogo";
import { TypescriptLogo } from "./components/logos/TypescriptLogo";
import { GitLogo } from "./components/logos/GitLogo";
import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function Home() {
  const [titleClass, setTitleClass] = useState(""); // Manage class for title

  useEffect(() => {
    setTitleClass("animate-title");
  }, []);

  const handleScroll = () => {
    const title = document.getElementById("projects-title");

    if (window.scrollY > 1700) {
      title!.style.visibility = "hidden";
    } else {
      title!.style.visibility = "visible";
    }

    const section = document.getElementById("projects-section");
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
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <Header /> */}
      <p className="p-4 h-16 font-medium text-3xl text-center">
        Matthew Frieri
      </p>

      <section className="px-20 pt-32">
        <div className="flex justify-center gap-20">
          <img
            src="profile.png"
            alt="Matthew Frieri"
            className="bg-gradient-to-b from-20% from-primary to-primary-dark shadow-dark shadow-xl rounded-full max-h-[38rem]"
          />
          <div
            className={`flex flex-col [perspective:750px] text-right text-[9.5rem] leading-[1.1] ${bebas_neue.className}`}
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
            <div className="flex justify-center gap-8 mt-10 text-5xl">
              <Link
                href={"https://github.com/MatthewFrieri"}
                target="_blank"
                className="hover:text-secondary transition-all hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/matthew-frieri"}
                target="_blank"
                className="hover:text-secondary transition-all hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gap-x-16 grid grid-cols-[2fr,1fr] grid-rows-[5rem,1fr] bg-dark mt-40 px-80 py-24">
        <p className={`${bebas_neue.className} text-5xl text-secondary`}>
          About Me
        </p>
        <p className={`${bebas_neue.className} text-5xl text-secondary`}>
          My Go-To Tools
        </p>
        <p className="text-2xl">
          Hello! I'm Matthew Frieri, a second-year student in Computer and Data
          Science at the University of Toronto. I'm passionate about discovering
          how technology can solve real-world problems and positively impact
          different industries and communities.
        </p>
        <div className="flex gap-8">
          <TypescriptLogo width={60} />
          <NextjsLogo width={60} />
          <TailwindLogo width={60} />
          <PythonLogo width={60} />
          <GitLogo width={60} />
        </div>
      </section>

      <h1
        id="projects-title"
        className={`${bebas_neue.className} text-[12rem] text-center sticky top-[24rem] mt-32 mb-32`}
      >
        Projects
      </h1>

      <section
        id="projects-section"
        className="flex flex-col gap-[10rem] pb-60 min-h-[52rem] overflow-hidden"
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
          <div className="gap-x-20 grid grid-cols-[31rem,1fr] grid-rows-2 p-16 h-full [perspective:750px]">
            <img
              src="projects/drakes_diss.png"
              alt="A screenshot from the project."
              className="shadow-top-left rounded"
            />
            <img
              src="projects/kendricks_critique.png"
              alt="A screenshot from the project."
              className="shadow-bottom-left col-start-1 mt-auto rounded"
            />
            <p className="col-start-2 row-span-2 row-start-1 my-auto text-3xl">
              Resume Roast takes the user's resume, and uses AI to generate a
              track by Drake, which disses the user's resume in a personalized
              and playful manner. Drake will lay down some smooth bars and sharp
              lyrics highlighting the weaknesses in your resume. After listening
              to the exceptional track by Toronto's very own, the user is then
              prompted to "fix their resume." They are then treated to yet
              another musical masterpiece by Drake's biggest rival, Kendrick
              Lamar.
            </p>
          </div>
        </Card>
        <Card
          name="Code Genius"
          href="https://github.com/MatthewFrieri/HackThe6ix-CodeGenius"
          tools={["NextJS", "TypeScript", "Tailwind", "Flask", "Meta Llama"]}
        >
          <div className="gap-x-20 grid grid-cols-[31rem,1fr] grid-rows-2 p-16 h-full [perspective:750px]">
            <img
              src="projects/code_review.png"
              alt="A screenshot from the project."
              className="shadow-top-left rounded"
            />
            <img
              src="projects/why_score.png"
              alt="A screenshot from the project."
              className="shadow-bottom-left col-start-1 mt-auto rounded"
            />
            <p className="col-start-2 row-span-2 row-start-1 my-auto text-3xl">
              CodeGenius starts with the user input. Users can drag-and-drop
              either a singular code file or a larger .zip file with many
              different code files in it. It can parse most modern programming
              languages, but our models have been tested and prompted with
              mostly Python3 code. Then, in seconds all files provided by the
              user are annotated! Certain sections of the program are
              highlighted as areas of potential confusion for someone else
              reading it. Then, upon either hovering over (or clicking on) the
              section of code, a more detailed annotation is provided.
            </p>
          </div>
        </Card>
        <Card
          name="Cook Clever"
          href="https://github.com/MatthewFrieri/HawkHacks_CookClever"
          tools={["React", "Flask", "Google AI Studio", "MongoDB", "Neurelo"]}
        >
          <div className="flex items-center gap-x-10 p-16 h-full [perspective:750px]">
            <img
              src="projects/login.png"
              alt="A screenshot from the project."
              className="shadow-left rounded h-[34rem]"
            />
            <img
              src="projects/image_analysis.png"
              alt="A screenshot from the project."
              className="shadow-left rounded h-[34rem]"
            />
            <p className="my-auto text-3xl">
              CookClever is an innovative web app designed to help people learn
              how to cook. It offers a wide range of recipes with detailed,
              step-by-step instructions to guide users through the cooking
              process. At each step, users are prompted to take a picture of
              their progress. Using AI, CookClever analyzes these images and
              provides tailored feedback to help users improve their cooking
              skills.
            </p>
          </div>
        </Card>
      </section>

      <section className="flex justify-center items-center gap-8 bg-dark h-60 text-4xl">
        <div className="border-secondary mr-10 border w-80" />
        <Link
          href={"mailto: mat.frieri@gmail.com"}
          target="_blank"
          className="hover:text-secondary transition-all hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link
          href={"https://github.com/MatthewFrieri"}
          target="_blank"
          className="hover:text-secondary transition-all hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/matthew-frieri"}
          target="_blank"
          className="hover:text-secondary transition-all hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href={"Resume.pdf"}
          target="_blank"
          className="hover:text-secondary transition-all hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faNewspaper} />
        </Link>
        <div className="border-secondary ml-10 border w-80" />
      </section>
    </>
  );
}
