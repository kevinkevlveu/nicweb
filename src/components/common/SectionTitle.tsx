import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;