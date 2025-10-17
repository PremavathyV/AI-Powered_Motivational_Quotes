# 🌟 AI-Powered Motivational Quote Generator

An interactive and user-friendly web app that generates **daily motivational quotes** based on the user's mood. 
Includes **daily notifications**, mood-based categories, Tamil language support, and extra features like action tips, saving, sharing, and downloading quotes.
---

## 🚀 Features

- 🎭 **Mood Selection**: Choose how you feel (Happy, Sad, Stressed, Excited, Lonely, Lost, Confident).
- 💬 **Motivational Quotes**: Get 100+ quotes covering success, life, positivity, confidence, and healing
- 🗣️ **Tamil Language Support**: Switch between **English / தமிழ்** for quotes.
- 🔖 **Action Tips**: Along with each quote, get a small **practical tip** (e.g., "Take a 5-min walk", "Write down your goal"). 
- ✨ **Daily Quote Notification**: Every morning at 9AM, receive a fresh motivational quote. 
- ❤️ **Save & Share**: Mark favorites, share quotes on WhatsApp/Instagram/LinkedIn.  
- 📥 **Download**: Export your favorite quotes as images or posters.  
- 🎨 **Attractive UI**: Sticky-note style cards, mood-based gradient backgrounds, animations.
- 🌓 **Dark/Light Mode**: Switch themes easily for comfort. 

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript  
- **Styling**: TailwindCSS 
- **Bundler**: Vite  
- **Notifications**: Browser Notification API  
- **Optional AI Integration**: ChatGPT API for fresh daily quotes  

---

## 📂 Project Structure

```
├── index.html
├── src
│   ├── main.tsx      # App entry point
│   ├── App.tsx       # Main component
│   ├── components    # UI components (Mood buttons, QuoteCard, etc.)
│   ├── data          # Quotes dataset (100+ quotes by category, Tamil + English)
│   └── styles        # Tailwind and custom CSS
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/motivational-quote-generator.git
   cd motivational-quote-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app locally:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🔔 Daily Notifications Setup

- Allow browser notifications when prompted.  
- The app will trigger a **random quote at 9:00 AM** daily.  
- Uses `setInterval` + Notification API to show quotes automatically.  

---


## 👩‍💻 Author

- **Premavathy V**  
- 📧 Email: [vprema376@gmail.com](mailto:vprema376@gmail.com)  
- 🌐 GitHub: [PremavathyV](https://github.com/PremavathyV)  
- 💼 LinkedIn:
 [(https://www.linkedin.com/in/premavathy-vijayan-921a39252/)]

---

## ⭐ Contribution

Contributions are welcome!  
- Fork this repo  
- Add new quotes or features  
- Create a pull request  

--- 

