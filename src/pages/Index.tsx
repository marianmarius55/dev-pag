import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;