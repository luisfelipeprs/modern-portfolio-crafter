
import React from 'react';

type ExperienceItem = {
  icon: React.ReactNode;
  company: string;
};

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <div className="animate-fade-in-right">
      <h2 className="section-title experience">Experiências Profissionais</h2>
      <div className="bg-card rounded-lg p-5 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-3 text-center"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-2">
                {item.icon}
              </div>
              <span className="text-sm">{item.company}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
