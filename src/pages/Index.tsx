import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { EmailContact } from "@/components/EmailContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Expertise />
      <Projects />
      <EmailContact />
    </div>
  );
};

export default Index;