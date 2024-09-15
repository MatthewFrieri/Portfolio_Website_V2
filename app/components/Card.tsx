import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
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
      <Link href={href} target="_blank">
        <div id="card" className="relative mx-auto w-[85%] h-[52rem]">
          <div className="bg-gradient-to-b from-20% from-primary to-primary-dark shadow-dark shadow-xl rounded-md w-full h-[89%]">
            {children}
          </div>
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
      </Link>
    </div>
  );
}
