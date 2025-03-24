import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="min-h-screen max-screen mx-auto">
      <Navbar2 />
      <Hero />
      <Projects />
    </div>
  );
}
