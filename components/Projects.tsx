"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Cloud, Github, Globe } from "lucide-react";

const components: {
  title: string;
  href?: string;
  description: string;
  github?: string;
  api?: string;
}[] = [
  {
    title: "Disney+ clone",
    href: "https://disneyplus-clone-sandy.vercel.app/",
    description: "Il s'agit d'un clone réaliste du site web Disney+",
    github: "https://github.com/Jeremy84100/DisneyPlus-Clone",
    api: "https://developer.themoviedb.org/docs",
  },
  {
    title: "Deridfile",
    href: "https://debridfile.com/",
    description:
      "Débrider les liens de téléchargement, comme 1fichier, uptobox, uploaded, rapidgator, etc.",
    api: "https://docs.alldebrid.com/",
  },
  {
    title: "Iname",
    href: "https://iname.fr/",
    description: "Un site d'actualités et de tutoriels sur le web tech",
  },
  {
    title: "Game Zone",
    href: "https://game-zone-alpha.vercel.app/",
    description:
      "Game-Zone est un site de recherche de jeux vidéo conçu avec React pour les passionnés de jeux.",
    github: "https://github.com/Jeremy84100/Game-Zone",
    api: "https://rawg.io/apidocs",
  },
  {
    title: "Touch Mack",
    href: "https://touch-mack.vercel.app/",
    description: "Un site de démonstration inspiré du site JellySmack.",
    github: "https://github.com/Jeremy84100/TouchMack",
  },
  {
    title: "Quizz Time",
    href: "https://quizz-time.vercel.app/",
    description:
      "Il s'agit d'un site de quiz basé sur React avec plusieurs catégories et niveaux de difficulté, idéal pour tester vos connaissances avec des questions à choix multiples amusantes.",
    github: "https://github.com/Jeremy84100/Quizz-Time",
    api: "https://opentdb.com/api_config.php",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

  return (
    <div id="projects">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex md:justify-start justify-center text-lg font-medium mb-4">
          <span className="bg-background px-2 md:pr-2 md:pl-0">
            Mes projets
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {components.slice(0, visibleProjects).map((component) => (
          <Card key={component.title}>
            <CardHeader>
              <CardTitle>{component.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{component.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Voir plus</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>{component.title}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled={!component.github}>
                    <a
                      href={component.github}
                      target="_blank"
                      className="flex w-full">
                      <Github className="mr-2 h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled={!component.href}>
                    <a
                      href={component.href}
                      target="_blank"
                      className="flex w-full">
                      <Globe className="mr-2 h-4 w-4" />
                      <span>Site Web</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled={!component.api}>
                    <a
                      href={component.api}
                      target="_blank"
                      className="flex w-full">
                      <Cloud className="mr-2 h-4 w-4" />
                      <span>API</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
        {components.length > visibleProjects && (
          <Button variant="outline" onClick={handleShowMore}>
            Voir d'avantage
          </Button>
        )}
      </div>
    </div>
  );
}
