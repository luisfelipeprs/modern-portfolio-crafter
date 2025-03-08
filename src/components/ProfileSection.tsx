
import React from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

interface ProfileSectionProps {
  name: string;
  username: string;
  location: string;
  phone: string;
  email: string;
  company: string;
  imageUrl: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  username,
  location,
  phone,
  email,
  company,
  imageUrl
}) => {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      <div className="w-36 h-36 rounded-full overflow-hidden mb-5 border-2 border-border">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-xl font-bold mb-1">{name}</h1>
      <p className="text-muted-foreground text-sm mb-5">@{username}</p>
      
      <button className="w-full py-2 mb-5 rounded bg-secondary hover:bg-secondary/80 transition-colors">
        Informações
      </button>
      
      <div className="w-full space-y-3 text-sm">
        <div className="flex items-center">
          <MapPin size={16} className="mr-2 text-muted-foreground" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center">
          <Phone size={16} className="mr-2 text-muted-foreground" />
          <span>{phone}</span>
        </div>
        
        <div className="flex items-center">
          <Mail size={16} className="mr-2 text-muted-foreground" />
          <span>{email}</span>
        </div>
        
        <div className="flex items-center">
          <Building size={16} className="mr-2 text-muted-foreground" />
          <span>{company}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
