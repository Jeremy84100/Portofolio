import { Separator } from "@/components/ui/separator";
import { PiHandWavingLight } from "react-icons/pi";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col">
      <Image
        src="https://avatars.githubusercontent.com/u/96269524?v=4"
        alt="Jérémy BOURRET"
        width={100}
        height={100}
        quality={30}
        
        className="rounded-full mb-4"
      />
      <div>
        <div className="flex gap-1 items-center">
          <h1 className="text-lg font-medium">Salut! Je suis Jérémy BOURRET</h1>
          <h1 className="text-xl">
            <PiHandWavingLight />
          </h1>
        </div>
        <h4 className="text-sm text-muted-foreground mb-4">
          Un Développeur Front End
        </h4>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
