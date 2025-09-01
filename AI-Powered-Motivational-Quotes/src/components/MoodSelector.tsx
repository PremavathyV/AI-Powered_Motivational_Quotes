import React from 'react';
import { Heart, Frown, Zap, PartyPopper, Users, HelpCircle, Crown } from 'lucide-react';

export type Mood = 'happy' | 'sad' | 'stressed' | 'excited' | 'lonely' | 'lost' | 'confident';

interface MoodSelectorProps {
  selectedMood: Mood | null;
  onMoodSelect: (mood: Mood) => void;
  isDark: boolean;
}

const moodOptions: Array<{
  mood: Mood;
  icon: React.ComponentType<any>;
  label: string;
  color: string;
  emoji: string;
}> = [
  { mood: 'happy', icon: Heart, label: 'Happy', color: 'from-pink-400 to-rose-400', emoji: '😊' },
  { mood: 'sad', icon: Frown, label: 'Sad', color: 'from-blue-400 to-indigo-400', emoji: '😢' },
  { mood: 'stressed', icon: Zap, label: 'Stressed', color: 'from-orange-400 to-red-400', emoji: '😰' },
  { mood: 'excited', icon: PartyPopper, label: 'Excited', color: 'from-yellow-400 to-orange-400', emoji: '🤩' },
  { mood: 'lonely', icon: Users, label: 'Lonely', color: 'from-purple-400 to-pink-400', emoji: '😔' },
  { mood: 'lost', icon: HelpCircle, label: 'Lost', color: 'from-gray-400 to-blue-400', emoji: '😕' },
  { mood: 'confident', icon: Crown, label: 'Confident', color: 'from-green-400 to-teal-400', emoji: '😎' }
];

export default function MoodSelector({ selectedMood, onMoodSelect, isDark }: MoodSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <h2 className={`text-2xl md:text-3xl font-bold text-center mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        How are you feeling today? 💭
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {moodOptions.map(({ mood, icon: Icon, label, color, emoji }) => (
          <button
            key={mood}
            onClick={() => onMoodSelect(mood)}
            className={`
              group relative p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95
              ${selectedMood === mood 
                ? `bg-gradient-to-br ${color} shadow-2xl scale-105` 
                : isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 shadow-lg' 
                  : 'bg-white hover:bg-gray-50 shadow-lg'
              }
              hover:shadow-2xl border-2 border-transparent hover:border-white/20
            `}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className={`
                text-3xl transition-all duration-300
                ${selectedMood === mood ? 'animate-bounce' : ''}
              `}>
                {emoji}
              </div>
              <Icon 
                size={24} 
                className={`
                  transition-colors duration-300
                  ${selectedMood === mood 
                    ? 'text-white' 
                    : isDark 
                      ? 'text-gray-300' 
                      : 'text-gray-600'
                  }
                `}
              />
              <span className={`
                text-sm font-medium transition-colors duration-300
                ${selectedMood === mood 
                  ? 'text-white' 
                  : isDark 
                    ? 'text-gray-300' 
                    : 'text-gray-700'
                }
              `}>
                {label}
              </span>
            </div>
            
            {selectedMood === mood && (
              <div className="absolute inset-0 rounded-2xl bg-white/10 animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}