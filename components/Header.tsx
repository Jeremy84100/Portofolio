"use client";

import { useEffect, useState } from "react";

import { Separator } from "@/components/ui/separator";
import { PiHandWavingLight } from "react-icons/pi";
import Image from "next/image";

const TimeContainer = () => {
  const BIRTH_DAY = "02-05-2022";
  const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
  const intlNumberFormatter = new Intl.NumberFormat("en-US");
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const updateTimer = setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
      );
      setTimeDifference(difference);
    }, 1000);

    return () => clearInterval(updateTimer);
  }, [BIRTH_DAY_DATE]);

  return (
    <p className="text-muted-foreground text-sm">
      Fait amusant, je code depuis{" "}
      {intlNumberFormatter.format(timeDifference)} secondes
    </p>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col">
      <Image
        src="https://avatars.githubusercontent.com/u/96269524?v=4"
        alt="Jérémy BOURRET"
        width={100}
        height={100}
        quality={80}
        className="rounded-full mb-4"
      />
      <div>
        <div className="flex gap-1 items-center">
          <h1 className="text-lg font-medium">Salut! Je suis Jérémy BOURRET</h1>
          <h1 className="text-xl">
            <PiHandWavingLight />
          </h1>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Un Développeur Front End
        </p>
        <TimeContainer />
      </div>
    </header>
  );
};

export default Header;
