import React from 'react';
import { Star } from 'lucide-react';

interface AthleteCardProps {
  image: string;
  name: string;
  achievement: string;
  className?: string;
}

const AthleteCard: React.FC<AthleteCardProps> = ({ image, name, achievement, className = '' }) => {
  return (
    <div className={`text-center space-y-4 section-animate ${className}`}>
      <div className="relative inline-block">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Star className="h-4 w-4 text-white fill-current" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{achievement}</p>
      </div>
    </div>
  );
};

export default AthleteCard;