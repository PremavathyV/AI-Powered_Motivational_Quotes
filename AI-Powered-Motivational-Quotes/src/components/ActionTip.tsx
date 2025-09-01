import React from 'react';
import { Lightbulb } from 'lucide-react';

interface ActionTipProps {
  tip: string;
  isDark: boolean;
  moodColor: string;
}

export default function ActionTip({ tip, isDark, moodColor }: ActionTipProps) {
  return (
    <div className={`
      max-w-md mx-auto mt-8 p-6 rounded-2xl transition-all duration-500 transform hover:scale-105
      ${isDark ? 'bg-gray-800/80' : 'bg-white/80'}
      backdrop-blur-sm border border-white/20 shadow-xl
    `}>
      <div className="flex items-start space-x-3">
        <div className={`
          p-2 rounded-full bg-gradient-to-br ${moodColor} shadow-lg
        `}>
          <Lightbulb size={20} className="text-white" />
        </div>
        <div>
          <h3 className={`
            font-semibold mb-2
            ${isDark ? 'text-white' : 'text-gray-800'}
          `}>
            Action Tip ✨
          </h3>
          <p className={`
            text-sm leading-relaxed
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
          `}>
            {tip}
          </p>
        </div>
      </div>
    </div>
  );
}