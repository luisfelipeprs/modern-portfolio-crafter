
import React from 'react';
import { Instagram, Github, Linkedin, Youtube } from 'lucide-react';

const SocialSection: React.FC = () => {
  return (
    <div className="animate-fade-in-right">
      <h2 className="section-title social">Redes sociais</h2>
      <div className="bg-card rounded-lg p-5 shadow-sm">
        <div className="flex space-x-4 justify-center">
          <a 
            href="#" 
            className="p-2 rounded-full bg-secondary text-foreground transition-all duration-300 hover:text-pink-500 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-secondary text-foreground transition-all duration-300 hover:text-white hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-secondary text-foreground transition-all duration-300 hover:text-blue-500 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="#" 
            className="p-2 rounded-full bg-secondary text-foreground transition-all duration-300 hover:text-red-500 hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
