
import React from 'react';

interface AboutSectionProps {
  content: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <div className="animate-fade-in-right">
      <h2 className="section-title about">Sobre mim</h2>
      <div className="bg-card rounded-lg p-5 shadow-sm">
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default AboutSection;
