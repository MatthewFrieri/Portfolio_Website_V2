"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Header from "./components/Header";
import { bebas_neue } from "./layout";
import { PythonLogo } from "./components/logos/PythonLogo";
import { NextjsLogo } from "./components/logos/NextjsLogo";
import { TailwindLogo } from "./components/logos/TailwindLogo";
import { TypescriptLogo } from "./components/logos/TypescriptLogo";
import { GitLogo } from "./components/logos/GitLogo";
import { useEffect } from "react";
import Card from "./components/Card";

export default function Home() {
  // Handle scroll
  const handleScroll = () => {
    const section = document.getElementById("projects-section");
    const children = section!.children;

    for (let i = 0; i < children.length; i++) {
      const card = children[i].children[0] as HTMLDivElement;

      const rect = card!.getBoundingClientRect();

      const centerY = rect.y - (window.innerHeight - rect.height) / 2;
      const progress =
        centerY / ((window.innerHeight - rect.height) / 2 + rect.height);

      card!.style.transform = `rotateX(${progress * 60}deg) translateZ(-200px)`;
    }
  };

  // Add scroll event listener
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <section className="px-20 pt-32">
        <div className="flex justify-center gap-20">
          <img
            src="profile.png"
            alt="Matthew Frieri"
            className="max-h-[38rem] rounded-full shadow-xl shadow-dark bg-gradient-to-b from-primary from-20% to-primary-dark"
          />
          <div className="flex flex-col">
            <h1
              className={`text-right text-[9.5rem] leading-[1.1] ${bebas_neue.className}`}
            >
              Software Engineer<span className="text-primary">.</span> <br />
              Web Developer<span className="text-primary">.</span> <br />
              Problem Solver<span className="text-primary">.</span>
            </h1>
            <div className="mt-10 justify-center gap-8 flex text-5xl">
              <Link
                href={"https://github.com/MatthewFrieri"}
                target="_blank"
                className="hover:text-secondary hover:-translate-y-1 transition-all"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/matthew-frieri"}
                target="_blank"
                className="hover:text-secondary hover:-translate-y-1 transition-all"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark mt-40 py-24 px-80 grid grid-cols-[2fr,1fr] grid-rows-[5rem,1fr] gap-x-16">
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

      <section
        id="projects-section"
        className="min-h-[52rem] flex flex-col gap-[20rem] py-[20rem] justify-center items-center"
      >
        <Card />
        <Card />
        <Card />
      </section>

      <section className="h-[100rem] bg-secondary"></section>
    </>
  );
}
