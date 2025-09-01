import React, { useState } from 'react';
import { Heart, RefreshCw, Share2, Download } from 'lucide-react';
import { Quote } from '../data/quotes';

interface QuoteCardProps {
  quote: Quote;
  onNewQuote: () => void;
  onSaveQuote: (quote: Quote) => void;
  isSaved: boolean;
  isDark: boolean;
  moodColor: string;
}

export default function QuoteCard({ 
  quote, 
  onNewQuote, 
  onSaveQuote, 
  isSaved, 
  isDark, 
  moodColor 
}: QuoteCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onNewQuote();
      setIsAnimating(false);
    }, 300);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Motivation',
          text: quote.text,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    const text = encodeURIComponent(`${quote.text}\n\n- Daily Motivation App`);
    const whatsappUrl = `https://wa.me/?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDownload = () => {
    // Create a canvas to generate an image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add quote text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Word wrap the text
    const words = quote.text.split(' ');
    const lines = [];
    let currentLine = '';
    const maxWidth = canvas.width - 100;

    for (const word of words) {
      const testLine = currentLine + word + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine !== '') {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine.trim());

    const lineHeight = 50;
    const startY = (canvas.height - (lines.length * lineHeight)) / 2;

    lines.forEach((line, index) => {
      ctx.fillText(line, canvas.width / 2, startY + (index * lineHeight));
    });

    // Download the image
    const link = document.createElement('a');
    link.download = 'motivational-quote.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className={`
      relative max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105
      ${isAnimating ? 'scale-95 opacity-50' : ''}
    `}>
      {/* Quote Card */}
      <div className={`
        relative p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20
        ${isDark ? 'bg-gray-900/80' : 'bg-white/90'}
        before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:${moodColor} before:opacity-10 before:pointer-events-none
      `}>
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 animate-pulse" />
        <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60 animate-pulse delay-1000" />
        <div className="absolute bottom-4 left-6 w-5 h-5 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-70 animate-pulse delay-500" />
        
        {/* Quote Text */}
        <div className="relative z-10 text-center">
          <blockquote className={`
            text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mb-6
            ${isDark ? 'text-white' : 'text-gray-800'}
            animate-fadeIn
          `}>
            "{quote.text}"
          </blockquote>
          
          {/* Tamil Translation */}
          <div className={`
            text-lg md:text-xl font-medium leading-relaxed mb-6 italic
            ${isDark ? 'text-blue-200' : 'text-blue-600'}
            animate-fadeIn
          `}>
            "{quote.tamil}"
          </div>
          
          <div className={`
            text-sm uppercase tracking-wider font-medium
            ${isDark ? 'text-gray-400' : 'text-gray-500'}
          `}>
            Category: {quote.category}
          </div>
        </div>

        {/* Sticky note effect */}
        <div className="absolute top-0 right-8 w-8 h-8 bg-yellow-200 opacity-60 transform rotate-12 rounded-sm shadow-sm" />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => onSaveQuote(quote)}
          className={`
            group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95
            ${isSaved 
              ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' 
              : isDark 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
            }
          `}
        >
          <Heart 
            size={18} 
            className={`transition-all duration-300 ${isSaved ? 'fill-current animate-pulse' : 'group-hover:scale-110'}`} 
          />
          <span className="font-medium">
            {isSaved ? 'Saved' : 'Save'}
          </span>
        </button>

        <button
          onClick={handleNewQuote}
          disabled={isAnimating}
          className={`
            group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95
            bg-gradient-to-r ${moodColor} text-white shadow-lg hover:shadow-xl
            ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <RefreshCw 
            size={18} 
            className={`transition-all duration-300 group-hover:rotate-180 ${isAnimating ? 'animate-spin' : ''}`} 
          />
          <span className="font-medium">New Quote</span>
        </button>

        <button
          onClick={handleShare}
          className={`
            group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95
            ${isDark 
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
            }
          `}
        >
          <Share2 size={18} className="transition-all duration-300 group-hover:scale-110" />
          <span className="font-medium">Share</span>
        </button>

        <button
          onClick={handleDownload}
          className={`
            group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95
            ${isDark 
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
            }
          `}
        >
          <Download size={18} className="transition-all duration-300 group-hover:scale-110" />
          <span className="font-medium">Download</span>
        </button>
      </div>
    </div>
  );
}