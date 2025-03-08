
import React from 'react';
import { ExternalLink } from 'lucide-react';

type TimelineItem = {
  year: string;
  name: string;
};

interface TimelineSectionProps {
  items: TimelineItem[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ items }) => {
  return (
    <div className="animate-fade-in-right">
      <h2 className="section-title timeline">Linha do Tempo (Cursos)</h2>
      <div className="bg-card rounded-lg p-5 shadow-sm">
        <div className="flex justify-between">
          {items.map((item, index) => (
            <div key={index} className="timelineItem">
              <span className="text-sm text-muted-foreground">{item.year}</span>
              <div className="w-8 h-8 my-2 rounded flex items-center justify-center bg-secondary">
                <ExternalLink size={16} />
              </div>
              <span className="text-xs text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
