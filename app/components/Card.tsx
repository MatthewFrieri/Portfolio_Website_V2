import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

type CardProps = {
  name: string;
  href: string;
  tools: string[];
  children: React.ReactNode;
};

export default function Card({ name, href, tools, children }: CardProps) {
  return (
    <div className="flex [perspective:750px]">
      <div id="card" className="relative mx-auto w-[95%] h-[52rem] max-lg:h-auto">
        <div className="bg-gradient-to-b from-20% from-primary to-primary-dark shadow-dark shadow-xl rounded-md w-full h-[89%] max-lg:h-auto">
          {children}
        </div>
        <Link
          href={href}
          target="_blank"
          className="top-6 right-6 absolute text-3xl hover:scale-110 transition-all"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
        <h1
          id="project-name"
          className={`absolute max-lg:static bottom-0 left-10 max-lg:-mt-[0.3em] max-lg:ml-6 text-9xl ${bebas_neue.className}`}
        >
          {name}
        </h1>
        <ul className="-right-[8%] bottom-[15%] absolute max-lg:static max-lg:flex max-lg:flex-row-reverse max-lg:flex-wrap max-lg:justify-end max-lg:gap-2 max-lg:mt-3 max-lg:px-6">
          {tools.toReversed().map((tool, index) => (
            <li
              key={index}
              className="flex justify-center items-center bg-secondary mt-[5%] py-[5%] border-2 border-bkg rounded w-[120%] max-lg:block max-lg:w-auto max-lg:mt-0 max-lg:px-3 max-lg:py-1 font-medium text-bkg"
            >
              <span className="max-lg:hidden">{tool}</span>
              <span className="lg:hidden">{tool.trim()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
