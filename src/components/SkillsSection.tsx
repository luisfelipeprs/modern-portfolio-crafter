
import React from 'react';

type Skill = {
  icon: React.ReactNode;
  tooltip?: string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

interface SkillsSectionProps {
  categories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  return (
    <div className="animate-fade-in-right">
      <h2 className="section-title skills">Conhecimentos</h2>
      <div className="bg-card rounded-lg p-5 shadow-sm">
        {categories.map((category, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-sm font-semibold mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skillIcon group"
                  title={skill.tooltip}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
