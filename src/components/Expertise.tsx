import { motion } from "framer-motion";
import { Code2, Shield, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const expertiseData = [
  {
    title: "Windows Kernel Development",
    icon: Terminal,
    items: [
      "Specialized in Windows kernel drivers and rootkit development",
      "Low-level system programming",
      "Driver architecture and implementation",
      "System-level security research"
    ]
  },
  {
    title: "Security Research",
    icon: Shield,
    items: [
      "Memory manipulation and analysis",
      "Reverse engineering",
      "System vulnerability assessment",
      "Advanced debugging techniques"
    ]
  }
];

export const Expertise = () => {
  return (
    <section className="py-20 bg-[#0B0B0F]/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 font-mono text-[#00FFF5]"
        >
          Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseData.map((expertise, index) => (
            <motion.div
              key={expertise.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFF5] to-[#BC13FE] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <Card className="relative h-full bg-[#0B0B0F] border-[#00FFF5]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#00FFF5]">
                    <expertise.icon className="h-6 w-6" />
                    {expertise.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {expertise.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Code2 className="h-5 w-5 text-[#00FF41] mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};