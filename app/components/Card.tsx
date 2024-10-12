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
    <div className="[perspective:750px] flex">
      <div id="card" className="relative mx-auto w-[95%] h-[52rem]">
        <div className="bg-gradient-to-b from-20% from-primary to-primary-dark shadow-dark shadow-xl rounded-md w-full h-[89%]">
          {children}
        </div>
        <Link
          href={href}
          target="_blank"
          className="top-6 right-6 absolute text-3xl transition-all hover:scale-110"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
        <h1
          id="project-name"
          className={`absolute bottom-0 left-10 text-9xl ${bebas_neue.className}`}
        >
          {name}
        </h1>
        <ul className="-right-[8%] bottom-[15%] absolute">
          {tools.toReversed().map((tool, index) => (
            <li
              key={index}
              className="flex justify-center items-center border-2 bg-secondary mt-[5%] py-[5%] border-bkg rounded w-[120%] font-medium text-bkg"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
