import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg card-elevated hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;