import React from 'react';
import { AppleIcon, PlayIcon } from 'lucide-react';

type AppStoreButtonProps = {
  type: 'apple' | 'google';
  url: string;
  className?: string;
};

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ type, url, className = '' }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center space-x-2 rounded-full px-4 xs:px-6 py-2.5 xs:py-3 transition-all duration-300 ${className} ${
        type === 'apple' 
          ? 'bg-black text-white hover:bg-gray-800' 
          : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
      }`}
    >
      {type === 'apple' ? (
        <AppleIcon size={20} className="xs:w-6 xs:h-6" />
      ) : (
        <PlayIcon size={20} className="xs:w-6 xs:h-6" />
      )}
      <div className="flex flex-col items-start">
        <span className="text-[10px] xs:text-xs leading-none">{type === 'apple' ? 'Download on the' : 'GET IT ON'}</span>
        <span className="text-xs xs:text-sm font-semibold leading-tight">{type === 'apple' ? 'App Store' : 'Google Play'}</span>
      </div>
    </a>
  );
};

export default AppStoreButton;