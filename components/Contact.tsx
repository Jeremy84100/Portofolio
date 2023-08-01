import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const components: {
  name: string;
  image: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}[] = [
  {
    name: "@JeremyBourret",
    image:
      "https://pbs.twimg.com/profile_images/1472864982832451588/qwJLv4vw_400x400.jpg",
    date: "Joined December 2021",
    description: "je reponds à vos questions sur twitter",
    icon: <Twitter />,
    href: "https://twitter.com/JeremyBourret",
  },
  {
    name: "Jérémy Bourret",
    image: "https://avatars.githubusercontent.com/u/96269524?s=48&v=4",
    date: "Joined in 2018",
    description: "Venez me suivre sur Linkedin et voir mes relations pro",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-bourret/",
  },
  {
    name: "Jeremy84100",
    image: "https://avatars.githubusercontent.com/u/96269524?s=48&v=4",
    date: "Joined in October 2020",
    description: "Decrouvrez mes projets et mes contributions sur Github",
    icon: <Github />,
    href: "https://github.com/Jeremy84100/",
  },
];

export default function Contact() {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center md:justify-start text-lg font-medium mb-4">
          <span className="bg-background px-2 md:pr-2 md:pl-0">Contact</span>
        </div>
      </div>
      <div>
        <div>
          <span className="text-muted-foreground">Envoie moi un email:</span>
          <a className="ml-2" href="mailto:bourretjeremy8@gmail.com">
            bourretjeremy8@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {components.map((component) => (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  href={component.href}
                  target="_blank"
                  className={buttonVariants({ variant: "ghost" })}>
                  {component.icon}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src={component.image} />
                    <AvatarFallback>JB</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{component.name}</h4>
                    <p className="text-sm">{component.description}</p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        {component.date}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
}
