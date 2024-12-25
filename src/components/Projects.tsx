import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Key, Lock, Shield } from "lucide-react";

const projects = [
  {
    title: "Giveaway Winner",
    description: "Automated system for managing giveaway distributions",
    icon: Gift,
    technologies: ["Python", "Machine Learning", "Data Analysis"]
  },
  {
    title: "Auto Private Key Finder",
    description: "Memory scanning tool for private key detection",
    icon: Key,
    technologies: ["Python", "Memory Analysis", "Cryptography"]
  },
  {
    title: "Secure Windows Authentication",
    description: "Enterprise authentication system with advanced security features",
    icon: Lock,
    technologies: ["C++", "C#", "Python", "Windows API"]
  },
  {
    title: "Undetected Kernel Driver",
    description: "High-performance kernel driver for system operations",
    icon: Shield,
    technologies: ["C++", "Kernel Development", "System Architecture"]
  }
];

export const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 font-mono text-[#00FFF5]"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5
              }}
              className="relative group perspective"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFF5] to-[#BC13FE] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <Card className="relative h-full bg-[#0B0B0F] border-[#00FFF5]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#00FFF5]">
                    <project.icon className="h-6 w-6" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="font-mono bg-[#BC13FE]/10 text-[#BC13FE] border border-[#BC13FE]/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};