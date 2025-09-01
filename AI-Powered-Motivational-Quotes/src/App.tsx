import React, { useState, useEffect } from 'react';
import { Moon, Sun, BookOpen, Bell, BellOff } from 'lucide-react';
import MoodSelector, { Mood } from './components/MoodSelector';
import QuoteCard from './components/QuoteCard';
import ActionTip from './components/ActionTip';
import SavedQuotes from './components/SavedQuotes';
import { quoteService } from './services/quoteService';
import { notificationService } from './services/notificationService';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Quote } from './data/quotes';

const moodGradients = {
  happy: 'from-pink-400 via-rose-400 to-pink-500',
  sad: 'from-blue-400 via-blue-500 to-indigo-600',
  stressed: 'from-orange-400 via-red-400 to-red-500',
  excited: 'from-yellow-400 via-orange-400 to-red-500',
  lonely: 'from-purple-400 via-pink-400 to-rose-500',
  lost: 'from-gray-400 via-blue-400 to-indigo-500',
  confident: 'from-green-400 via-teal-400 to-blue-500'
};

const moodColors = {
  happy: 'from-pink-400 to-rose-400',
  sad: 'from-blue-400 to-indigo-400',
  stressed: 'from-orange-400 to-red-400',
  excited: 'from-yellow-400 to-orange-400',
  lonely: 'from-purple-400 to-pink-400',
  lost: 'from-gray-400 to-blue-400',
  confident: 'from-green-400 to-teal-400'
};

function App() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [currentQuotes, setCurrentQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [actionTip, setActionTip] = useState<string>('');
  const [isDark, setIsDark] = useLocalStorage('darkMode', false);
  const [savedQuotes, setSavedQuotes] = useLocalStorage<Quote[]>('savedQuotes', []);
  const [showSavedQuotes, setShowSavedQuotes] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useLocalStorage('notificationsEnabled', false);

  // Initialize notifications on app load
  useEffect(() => {
    if (notificationsEnabled) {
      notificationService.requestPermission().then((granted) => {
        if (granted) {
          notificationService.scheduleDaily9AMNotification();
        }
      });
    }
  }, [notificationsEnabled]);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
    const quotes = quoteService.getQuotesByMood(mood, 3);
    setCurrentQuotes(quotes);
    setCurrentQuoteIndex(0);
    setActionTip(quoteService.getActionTip(mood));
  };

  const handleNewQuote = () => {
    if (currentQuotes.length > 1) {
      const nextIndex = (currentQuoteIndex + 1) % currentQuotes.length;
      setCurrentQuoteIndex(nextIndex);
    } else if (selectedMood) {
      // Get new quotes for the same mood
      const newQuotes = quoteService.getQuotesByMood(selectedMood, 3);
      setCurrentQuotes(newQuotes);
      setCurrentQuoteIndex(0);
    }
  };

  const handleSaveQuote = (quote: Quote) => {
    setSavedQuotes(prev => {
      const isAlreadySaved = prev.some(q => q.id === quote.id);
      if (isAlreadySaved) {
        return prev.filter(q => q.id !== quote.id);
      } else {
        return [...prev, quote];
      }
    });
  };

  const handleRemoveSavedQuote = (id: number) => {
    setSavedQuotes(prev => prev.filter(q => q.id !== id));
  };

  const toggleNotifications = async () => {
    if (!notificationsEnabled) {
      const granted = await notificationService.requestPermission();
      if (granted) {
        setNotificationsEnabled(true);
        notificationService.scheduleDaily9AMNotification();
      }
    } else {
      setNotificationsEnabled(false);
    }
  };

  const currentQuote = currentQuotes[currentQuoteIndex];
  const isQuoteSaved = currentQuote ? savedQuotes.some(q => q.id === currentQuote.id) : false;
  const backgroundGradient = selectedMood ? moodGradients[selectedMood] : 'from-purple-400 via-pink-400 to-red-400';
  const moodColor = selectedMood ? moodColors[selectedMood] : 'from-purple-400 to-pink-400';

  return (
    <div className={`min-h-screen transition-all duration-1000 bg-gradient-to-br ${backgroundGradient}`}>
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm">
              <div className="text-2xl">✨</div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Daily Motivation
              </h1>
              <p className="text-white/80 text-sm">
                Your daily dose of inspiration
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Notifications Toggle */}
            <button
              onClick={toggleNotifications}
              className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
              title={notificationsEnabled ? 'Disable notifications' : 'Enable notifications'}
            >
              {notificationsEnabled ? (
                <Bell size={20} className="text-white" />
              ) : (
                <BellOff size={20} className="text-white" />
              )}
            </button>

            {/* Saved Quotes Button */}
            <button
              onClick={() => setShowSavedQuotes(true)}
              className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95 relative"
              title="View saved quotes"
            >
              <BookOpen size={20} className="text-white" />
              {savedQuotes.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {savedQuotes.length}
                </span>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Message */}
          {!selectedMood && (
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
                Welcome to Your
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Daily Motivation
                </span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Every feeling is valid, every moment is an opportunity to grow. 
                Let's find the perfect words to lift your spirit today! 🌟
              </p>
            </div>
          )}

          {/* Mood Selector */}
          <MoodSelector
            selectedMood={selectedMood}
            onMoodSelect={handleMoodSelect}
            isDark={isDark}
          />

          {/* Quote Display */}
          {currentQuote && (
            <div className="animate-slideIn">
              <QuoteCard
                quote={currentQuote}
                onNewQuote={handleNewQuote}
                onSaveQuote={handleSaveQuote}
                isSaved={isQuoteSaved}
                isDark={isDark}
                moodColor={moodColor}
              />

              {/* Action Tip */}
              {actionTip && (
                <ActionTip
                  tip={actionTip}
                  isDark={isDark}
                  moodColor={moodColor}
                />
              )}
            </div>
          )}

          {/* Footer */}
          <footer className="text-center mt-16">
            <p className="text-white/60 text-sm">
              Made with 💖 for your daily dose of positivity
            </p>
          </footer>
        </div>
      </main>

      {/* Saved Quotes Modal */}
      {showSavedQuotes && (
        <SavedQuotes
          savedQuotes={savedQuotes}
          onRemoveQuote={handleRemoveSavedQuote}
          onClose={() => setShowSavedQuotes(false)}
          isDark={isDark}
        />
      )}
    </div>
  );
}

export default App;