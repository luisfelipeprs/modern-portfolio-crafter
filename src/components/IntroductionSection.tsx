
import React from 'react';

interface IntroductionSectionProps {
  greeting: string;
  skills: string;
  education: string;
  experience: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  greeting,
  skills,
  education,
  experience
}) => {
  return (
    <div className="animate-fade-in-right">
      <h2 className="section-title introduction">Introdução</h2>
      <div className="bg-card rounded-lg p-5 shadow-sm">
        <p className="mb-4 text-base">
          <span className="text-lg mb-1 block">👋 {greeting}</span>
        </p>
        
        <p className="flex items-start mb-3 text-sm">
          <span className="text-indigo-400 mr-2">💻</span>
          <span dangerouslySetInnerHTML={{ __html: skills }} />
        </p>
        
        <p className="flex items-start mb-3 text-sm">
          <span className="text-blue-400 mr-2">🎓</span>
          <span>{education}</span>
        </p>
        
        <p className="flex items-start text-sm">
          <span className="text-green-400 mr-2">👥</span>
          <span>{experience}</span>
        </p>
      </div>
    </div>
  );
};

export default IntroductionSection;
