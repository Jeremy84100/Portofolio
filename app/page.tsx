import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="flex justify-center w-full">
      <div className="flex flex-col w-800 px-4 gap-12 my-10">
        <Header />
        <Projects />
        <Technologies />
        <Contact />
      </div>
    </main>
  );
}
