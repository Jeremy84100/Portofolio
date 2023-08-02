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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Disney+ clone",
    href: "https://disneyplus-clone-sandy.vercel.app/",
    description: "Il s&apos;agit d&apos;un clone réaliste du site web Disney+",
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
    description: "Un site d&apos;actualités et de tutoriels sur le web tech",
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
      "Il s&apos;agit d&apos;un site de quiz basé sur React avec plusieurs catégories et niveaux de difficulté, idéal pour tester vos connaissances avec des questions à choix multiples amusantes.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <div className="my-4">
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
                <ListItem href="/docs/installation" title="Projects">
                  Découvrez mes projets et réalisations.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Technologies">
                  Découvrez les technologies que j'utilise.
                </ListItem>
                <ListItem href="/docs" title="Contact">
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
                    <p
                      dangerouslySetInnerHTML={{
                        __html: component.description,
                      }}></p>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <DarkMode />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
