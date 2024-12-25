import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const EmailContact = () => {
  const email = "denis@denis.ink";
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0F]/50 pointer-events-none" />
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="relative group cursor-pointer" onClick={handleCopyEmail}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFF5] to-[#BC13FE] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-[#0B0B0F] rounded-lg p-8 border border-[#00FFF5]/20">
              <Mail className="w-12 h-12 text-[#00FFF5] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#00FFF5] mb-4 font-mono">Let's Connect</h2>
              <p className="text-gray-300 mb-6">Feel free to reach out via email</p>
              <Button 
                variant="outline" 
                className="border-[#00FFF5] text-[#00FFF5] hover:bg-[#00FFF5] hover:text-[#0B0B0F] transition-all duration-300"
                onClick={handleCopyEmail}
              >
                {email}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};