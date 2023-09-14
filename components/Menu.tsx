"use client";

import * as React from "react";
import DarkMode from "@/components/DarkMode";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Disney+ clone",
    href: "https://disneyplus-clone-sandy.vercel.app/",
    description: "Il s'agit d'un clone réaliste du site web Disney+",
  },
  {
    title: "Deridfile",
    href: "https://debridfile.com/",
    description:
      "Débrider les liens de téléchargement, comme 1fichier, uptobox, uploaded, rapidgator, etc.",
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
  },
  {
    title: "Touch Mack",
    href: "https://touch-mack.vercel.app/",
    description: "Un site de démonstration inspiré du site JellySmack.",
  },
  {
    title: "Quizz Time",
    href: "https://quizz-time.vercel.app/",
    description:
      "Il s'agit d'un site de quiz basé sur React avec plusieurs catégories et niveaux de difficulté, idéal pour tester vos connaissances avec des questions à choix multiples amusantes.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <div className="m-4">
      <div className="ml:block hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>À propos de moi</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Jérémy
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Bienvenue dans mon portofolio !
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#projects" title="Projects">
                    Découvrez mes projets et réalisations.
                  </ListItem>
                  <ListItem href="#technologies" title="Technologies">
                    Découvrez les technologies que j'utilise.
                  </ListItem>
                  <ListItem href="#contact" title="Contact">
                    Contactez-moi si vous souhaitez collaborer.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Mes projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <DarkMode />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml:hidden flex justify-between">
        <Sheet>
          <SheetTrigger>
            <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-10 w-10">
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>BOURRET Jérémy</SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-full w-full pr-4 pt-4 pb-20">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <SheetHeader>
                    <SheetTitle>À propos de moi</SheetTitle>
                  </SheetHeader>
                  <Link href="/">
                    <SheetTitle>Jérémy</SheetTitle>
                    <SheetDescription>
                      Bienvenue dans mon portofolio!
                    </SheetDescription>
                  </Link>
                  <Link href="#projects">
                    <SheetTitle>Projets</SheetTitle>
                    <SheetDescription>
                      Découvrez mes projets et réalisations.
                    </SheetDescription>
                  </Link>
                  <Link href="#technologies">
                    <SheetTitle>Technologies</SheetTitle>
                    <SheetDescription>
                      Découvrez les technologies que j'utilise.
                    </SheetDescription>
                  </Link>
                  <Link href="#contact">
                    <SheetTitle>Contact</SheetTitle>
                    <SheetDescription>
                      Contactez-moi si vous souhaitez collaborer.
                    </SheetDescription>
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  <SheetHeader>
                    <SheetTitle>Mes projets</SheetTitle>
                  </SheetHeader>
                  {components.map((component) => (
                    <Link key={component.title} href={component.href}>
                      <SheetTitle>{component.title}</SheetTitle>
                      <SheetDescription>
                        {component.description.length > 100
                          ? component.description.slice(0, 100) + "..."
                          : component.description}
                      </SheetDescription>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <DarkMode />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  const description =
    typeof children === "string" ? children : String(children);

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
