class NotificationService {
  private hasPermission: boolean = false;
  
  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return false;
    }
    
    if (Notification.permission === 'granted') {
      this.hasPermission = true;
      return true;
    }
    
    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      this.hasPermission = permission === 'granted';
      return this.hasPermission;
    }
    
    return false;
  }
  
  scheduleDaily9AMNotification() {
    if (!this.hasPermission) return;
    
    const now = new Date();
    const next9AM = new Date();
    next9AM.setHours(9, 0, 0, 0);
    
    // If it's already past 9 AM today, schedule for tomorrow
    if (now.getTime() > next9AM.getTime()) {
      next9AM.setDate(next9AM.getDate() + 1);
    }
    
    const timeUntil9AM = next9AM.getTime() - now.getTime();
    
    setTimeout(() => {
      this.showDailyNotification();
      // Schedule the next day
      setInterval(() => {
        this.showDailyNotification();
      }, 24 * 60 * 60 * 1000); // 24 hours
    }, timeUntil9AM);
  }
  
  private showDailyNotification() {
    if (!this.hasPermission) return;
    
    const quotes = [
      "Your potential is endless 🌌",
      "Today is a good day for a good day ☀️",
      "You are stronger than you think 💪",
      "Dream big, start small, act now ⚡",
      "Choose joy, spread love, be kind 🌈"
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    new Notification('Daily Motivation ✨', {
      body: randomQuote,
      icon: '/icon-192x192.png',
      tag: 'daily-motivation',
      requireInteraction: false,
      silent: false
    });
  }
  
  showQuoteNotification(quote: string) {
    if (!this.hasPermission) return;
    
    new Notification('Motivational Quote 💫', {
      body: quote,
      icon: '/icon-192x192.png',
      tag: 'quote-notification',
      requireInteraction: false
    });
  }
}

export const notificationService = new NotificationService();