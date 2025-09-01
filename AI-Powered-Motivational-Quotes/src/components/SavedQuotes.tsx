import React from 'react';
import { Trash2, X } from 'lucide-react';
import { Quote } from '../data/quotes';

interface SavedQuotesProps {
  savedQuotes: Quote[];
  onRemoveQuote: (id: number) => void;
  onClose: () => void;
  isDark: boolean;
}

export default function SavedQuotes({ savedQuotes, onRemoveQuote, onClose, isDark }: SavedQuotesProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`
        w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl
        ${isDark ? 'bg-gray-900' : 'bg-white'}
        border border-white/20
      `}>
        {/* Header */}
        <div className={`
          flex items-center justify-between p-6 border-b
          ${isDark ? 'border-gray-700' : 'border-gray-200'}
        `}>
          <h2 className={`
            text-2xl font-bold
            ${isDark ? 'text-white' : 'text-gray-800'}
          `}>
            Your Saved Quotes 💖
          </h2>
          <button
            onClick={onClose}
            className={`
              p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95
              ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}
            `}
          >
            <X size={24} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          {savedQuotes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💔</div>
              <p className={`
                text-lg
                ${isDark ? 'text-gray-400' : 'text-gray-600'}
              `}>
                No saved quotes yet. Start saving your favorites!
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {savedQuotes.map((quote) => (
                <div
                  key={quote.id}
                  className={`
                    group relative p-4 rounded-2xl transition-all duration-300 hover:scale-105
                    ${isDark ? 'bg-gray-800' : 'bg-gray-50'}
                    border border-white/10 shadow-lg hover:shadow-xl
                  `}
                >
                  <blockquote className={`
                    text-sm leading-relaxed mb-3
                    ${isDark ? 'text-gray-300' : 'text-gray-700'}
                  `}>
                    "{quote.text}"
                  </blockquote>
                  
                  <div className={`
                    text-xs leading-relaxed mb-3 italic
                    ${isDark ? 'text-blue-300' : 'text-blue-600'}
                  `}>
                    "{quote.tamil}"
                  </div>
                  
                  <div className={`
                    text-xs uppercase tracking-wider font-medium
                    ${isDark ? 'text-gray-500' : 'text-gray-500'}
                  `}>
                    {quote.category}
                  </div>

                  <button
                    onClick={() => onRemoveQuote(quote.id)}
                    className={`
                      absolute top-2 right-2 p-1.5 rounded-full opacity-0 group-hover:opacity-100
                      transition-all duration-300 hover:scale-110 active:scale-95
                      ${isDark ? 'bg-red-900/20 hover:bg-red-900/40 text-red-400' : 'bg-red-100 hover:bg-red-200 text-red-600'}
                    `}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}