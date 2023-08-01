import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaReact, FaSass } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript, TbBrandVite } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";

import Link from "next/link";

const components: { title: string; href: string; image: any }[] = [
  {
    title: "React",
    href: "https://react.dev/",
    image: <FaReact />,
  },
  {
    title: "Next.js",
    href: "https://nextjs.org/",
    image: <TbBrandNextjs />,
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    image: <SiTailwindcss />,
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    image: <TbBrandTypescript />,
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    image: <BiLogoGit />,
  },
  {
    title: "SASS",
    href: "https://sass-lang.com/",
    image: <FaSass />,
  },
  {
    title: "Vite",
    href: "https://vitejs.dev/",
    image: <TbBrandVite />,
  },
];

export default function TooltipDemo() {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center md:justify-start text-lg font-medium mb-4">
          <span className="bg-background px-2 md:pr-2 md:pl-0">Les technologies</span>
        </div>
      </div>
      <div>
        <TooltipProvider>
          <div className="flex gap-2 justify-center md:justify-start flex-wrap">
            {components.map((component) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={component.href}
                    target="_blank"
                    key={component.title}
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                    })}>
                    <h1 className="text-3xl">{component.image}</h1>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{component.title}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
