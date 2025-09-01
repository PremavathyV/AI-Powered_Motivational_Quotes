import { quotes, Quote, actionTips } from '../data/quotes';
import { Mood } from '../components/MoodSelector';

class QuoteService {
  private usedQuoteIds: Set<number> = new Set();
  
  getQuotesByMood(mood: Mood, count: number = 3): Quote[] {
    const moodQuotes = quotes.filter(quote => quote.moods.includes(mood));
    
    // Shuffle the array
    const shuffled = [...moodQuotes].sort(() => Math.random() - 0.5);
    
    return shuffled.slice(0, count);
  }
  
  getRandomQuote(): Quote {
    const availableQuotes = quotes.filter(quote => !this.usedQuoteIds.has(quote.id));
    
    if (availableQuotes.length === 0) {
      // Reset if all quotes have been used
      this.usedQuoteIds.clear();
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
    this.usedQuoteIds.add(randomQuote.id);
    
    return randomQuote;
  }
  
  getRandomQuoteForMood(mood: Mood): Quote {
    const moodQuotes = quotes.filter(quote => quote.moods.includes(mood));
    return moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
  }
  
  getActionTip(mood: Mood): string {
    const tips = actionTips[mood];
    return tips[Math.floor(Math.random() * tips.length)];
  }
  
  getDailyQuote(): Quote {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('dailyQuoteDate');
    const savedQuoteId = localStorage.getItem('dailyQuoteId');
    
    if (savedDate === today && savedQuoteId) {
      const quote = quotes.find(q => q.id === parseInt(savedQuoteId));
      if (quote) return quote;
    }
    
    // Generate new daily quote
    const quote = this.getRandomQuote();
    localStorage.setItem('dailyQuoteDate', today);
    localStorage.setItem('dailyQuoteId', quote.id.toString());
    
    return quote;
  }
}

export const quoteService = new QuoteService();