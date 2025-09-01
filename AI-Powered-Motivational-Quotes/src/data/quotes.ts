export interface Quote {
  id: number;
  text: string;
  tamil: string;
  category: string;
  moods: string[];
}

export const quotes: Quote[] = [
  // Success & Hard Work
  { id: 1, text: "Dream big, start small, act now ⚡", tamil: "பெரிதாக கனவு காண், சிறிதாக தொடங்கு, இப்போதே செயல்படு ⚡", category: "success", moods: ["excited", "confident"] },
  { id: 2, text: "Your only limit is your mindset 🧠", tamil: "உங்கள் ஒரே வரம்பு உங்கள் மனநிலை தான் 🧠", category: "success", moods: ["confident", "stressed"] },
  { id: 3, text: "Success is not final, failure is not fatal 💪", tamil: "வெற்றி இறுதியானது அல்ல, தோல்வி மரணமானது அல்ல 💪", category: "success", moods: ["stressed", "lost"] },
  { id: 4, text: "Every expert was once a beginner 🌱", tamil: "ஒவ்வொரு நிபுணரும் ஒரு காலத்தில் ஆரம்பக்காரராக இருந்தார் 🌱", category: "success", moods: ["lost", "stressed"] },
  { id: 5, text: "Progress over perfection, always 📈", tamil: "முழுமையை விட முன்னேற்றம் எப்போதும் முக்கியம் 📈", category: "success", moods: ["stressed", "confident"] },
  { id: 6, text: "Champions train, losers complain 🏆", tamil: "வெற்றியாளர்கள் பயிற்சி செய்கிறார்கள், தோல்வியாளர்கள் புகார் செய்கிறார்கள் 🏆", category: "success", moods: ["excited", "confident"] },
  { id: 7, text: "Your comeback is always stronger than your setback 🔥", tamil: "உங்கள் மீண்டு வருதல் எப்போதும் உங்கள் பின்னடைவை விட வலிமையானது 🔥", category: "success", moods: ["sad", "lost"] },
  { id: 8, text: "Hard work beats talent when talent doesn't work hard ⚡", tamil: "திறமை கடினமாக உழைக்காதபோது, கடின உழைப்பு திறமையை வெல்லும் ⚡", category: "success", moods: ["confident", "excited"] },
  { id: 9, text: "The difference between ordinary and extraordinary is that little extra ✨", tamil: "சாதாரணத்திற்கும் அசாதாரணத்திற்கும் உள்ள வித்தியாசம் அந்த சிறிய கூடுதல் முயற்சி ✨", category: "success", moods: ["confident", "excited"] },
  { id: 10, text: "Don't wish it were easier, wish you were better 💎", tamil: "அது எளிதாக இருக்க வேண்டும் என்று விரும்பாதே, நீங்கள் சிறப்பாக இருக்க வேண்டும் என்று விரும்பு 💎", category: "success", moods: ["stressed", "confident"] },

  // Confidence & Self-love
  { id: 11, text: "You are your own kind of beautiful 🌸", tamil: "நீங்கள் உங்களுக்கே உரிய அழகு 🌸", category: "confidence", moods: ["sad", "lonely"] },
  { id: 12, text: "Self-love is the best love 💖", tamil: "சுய அன்பு தான் சிறந்த அன்பு 💖", category: "confidence", moods: ["lonely", "sad"] },
  { id: 13, text: "You were born to be real, not perfect ✨", tamil: "நீங்கள் உண்மையாக இருக்க பிறந்தீர்கள், முழுமையாக அல்ல ✨", category: "confidence", moods: ["stressed", "sad"] },
  { id: 14, text: "Confidence is not 'they will like me', it's 'I'll be fine if they don't' 🌟", tamil: "நம்பிக்கை என்பது 'அவர்கள் என்னை விரும்புவார்கள்' அல்ல, 'அவர்கள் விரும்பாவிட்டாலும் நான் நன்றாக இருப்பேன்' 🌟", category: "confidence", moods: ["confident", "lonely"] },
  { id: 15, text: "You are enough, just as you are 🌈", tamil: "நீங்கள் இருப்பது போலவே போதுமானவர் 🌈", category: "confidence", moods: ["sad", "lonely", "lost"] },
  { id: 16, text: "Your vibe attracts your tribe ✨", tamil: "உங்கள் அலைவரிசை உங்கள் குழுவை ஈர்க்கிறது ✨", category: "confidence", moods: ["happy", "confident"] },
  { id: 17, text: "Be yourself, everyone else is taken 🦄", tamil: "நீங்களாகவே இருங்கள், மற்றவர்கள் எல்லாம் ஏற்கனவே எடுக்கப்பட்டுவிட்டார்கள் 🦄", category: "confidence", moods: ["confident", "happy"] },
  { id: 18, text: "You can't pour from an empty cup, fill yourself first 🫖", tamil: "காலியான கோப்பையிலிருந்து ஊற்ற முடியாது, முதலில் உங்களை நிரப்புங்கள் 🫖", category: "confidence", moods: ["stressed", "lonely"] },
  { id: 19, text: "Your opinion of yourself becomes your reality 💫", tamil: "உங்களைப் பற்றிய உங்கள் கருத்து உங்கள் யதார்த்தமாக மாறுகிறது 💫", category: "confidence", moods: ["confident", "lost"] },
  { id: 20, text: "Embrace your flaws, they make you unique 🌺", tamil: "உங்கள் குறைகளை ஏற்றுக்கொள்ளுங்கள், அவை உங்களை தனித்துவமாக்குகின்றன 🌺", category: "confidence", moods: ["sad", "confident"] },

  // Life Lessons
  { id: 21, text: "Life is 10% what happens, 90% how you react 🎭", tamil: "வாழ்க்கை 10% என்ன நடக்கிறது, 90% நீங்கள் எப்படி எதிர்வினையாற்றுகிறீர்கள் 🎭", category: "life", moods: ["stressed", "lost"] },
  { id: 22, text: "Every storm runs out of rain ⛈️", tamil: "ஒவ்வொரு புயலும் மழையை இழந்துவிடும் ⛈️", category: "life", moods: ["sad", "stressed"] },
  { id: 23, text: "This too shall pass 🌅", tamil: "இதுவும் கடந்து போகும் 🌅", category: "life", moods: ["sad", "stressed", "lonely"] },
  { id: 24, text: "Stars can't shine without darkness 🌌", tamil: "இருளில்லாமல் நட்சத்திரங்கள் ஒளிர முடியாது 🌌", category: "life", moods: ["sad", "lost"] },
  { id: 25, text: "Growth happens outside your comfort zone 🌱", tamil: "வளர்ச்சி உங்கள் வசதியான பகுதிக்கு வெளியே நடக்கிறது 🌱", category: "life", moods: ["stressed", "excited"] },
  { id: 26, text: "The best view comes after the hardest climb ⛰️", tamil: "சிறந்த காட்சி கடினமான ஏற்றத்திற்குப் பிறகு வருகிறது ⛰️", category: "life", moods: ["stressed", "confident"] },
  { id: 27, text: "Sometimes you win, sometimes you learn 📚", tamil: "சில நேரங்களில் நீங்கள் வெல்கிறீர்கள், சில நேரங்களில் கற்றுக்கொள்கிறீர்கள் 📚", category: "life", moods: ["sad", "lost"] },
  { id: 28, text: "Life begins at the end of your comfort zone 🚀", tamil: "உங்கள் வசதியான பகுதியின் முடிவில் வாழ்க்கை தொடங்குகிறது 🚀", category: "life", moods: ["excited", "confident"] },
  { id: 29, text: "Don't count the days, make the days count 📅", tamil: "நாட்களை எண்ணாதே, நாட்களை அர்த்தமுள்ளதாக்கு 📅", category: "life", moods: ["happy", "excited"] },
  { id: 30, text: "What doesn't kill you makes you stronger 💪", tamil: "உங்களைக் கொல்லாதது உங்களை வலிமையாக்குகிறது 💪", category: "life", moods: ["sad", "stressed"] },

  // Love & Healing
  { id: 31, text: "Your scars are proof you survived, not that you're broken 🌸", tamil: "உங்கள் வடுக்கள் நீங்கள் உயிர் பிழைத்ததற்கான சான்று, உடைந்ததற்கான அல்ல 🌸", category: "healing", moods: ["sad", "lonely"] },
  { id: 32, text: "Healing is not linear, be patient with yourself 🌿", tamil: "குணமடைதல் நேர்கோட்டில் இல்லை, உங்களுடன் பொறுமையாக இருங்கள் 🌿", category: "healing", moods: ["sad", "stressed"] },
  { id: 33, text: "You deserve the love you keep giving to others 💕", tamil: "நீங்கள் மற்றவர்களுக்கு கொடுக்கும் அன்புக்கு நீங்கள் தகுதியானவர் 💕", category: "healing", moods: ["lonely", "sad"] },
  { id: 34, text: "Sometimes good things fall apart so better things can fall together ✨", tamil: "சில நேரங்களில் நல்ல விஷயங்கள் சிதைகின்றன, இதனால் சிறந்த விஷயங்கள் ஒன்றாக வரலாம் ✨", category: "healing", moods: ["sad", "lost"] },
  { id: 35, text: "The right person will love all the damaged parts of you 💖", tamil: "சரியான நபர் உங்களின் சேதமடைந்த பகுதிகளையும் அன்பு செய்வார் 💖", category: "healing", moods: ["lonely", "sad"] },
  { id: 36, text: "You can't start a new chapter if you keep re-reading the old one 📖", tamil: "பழைய அத்தியாயத்தை மீண்டும் படித்துக்கொண்டே இருந்தால் புதிய அத்தியாயத்தை தொடங்க முடியாது 📖", category: "healing", moods: ["sad", "lost"] },
  { id: 37, text: "Your heart was made to love, not to break 💝", tamil: "உங்கள் இதயம் அன்பு செய்ய உருவாக்கப்பட்டது, உடைக்க அல்ல 💝", category: "healing", moods: ["sad", "lonely"] },
  { id: 38, text: "Time doesn't heal all wounds, but it gives you strength to carry them 🕰️", tamil: "நேரம் எல்லா காயங்களையும் குணப்படுத்தாது, ஆனால் அவற்றை சுமக்க வலிமை தருகிறது 🕰️", category: "healing", moods: ["sad", "stressed"] },
  { id: 39, text: "You are not what happened to you, you are what you choose to become 🦋", tamil: "உங்களுக்கு என்ன நடந்தது என்பது நீங்கள் அல்ல, நீங்கள் என்னவாக மாற தேர்வு செய்கிறீர்கள் என்பதே நீங்கள் 🦋", category: "healing", moods: ["sad", "confident"] },
  { id: 40, text: "Let go of what hurt you, but never forget what it taught you 🌺", tamil: "உங்களை காயப்படுத்தியதை விடுங்கள், ஆனால் அது உங்களுக்கு கற்றுக்கொடுத்ததை மறக்காதீர்கள் 🌺", category: "healing", moods: ["sad", "confident"] },

  // Positivity & Happiness
  { id: 41, text: "Today is a good day for a good day ☀️", tamil: "இன்று ஒரு நல்ல நாளுக்கான நல்ல நாள் ☀️", category: "positivity", moods: ["happy", "excited"] },
  { id: 42, text: "Choose joy, spread love, be kind 🌈", tamil: "மகிழ்ச்சியை தேர்வு செய், அன்பை பரப்பு, கருணையாக இரு 🌈", category: "positivity", moods: ["happy", "confident"] },
  { id: 43, text: "Smile, it's free therapy 😊", tamil: "புன்னகை, இது இலவச சிகிச்சை 😊", category: "positivity", moods: ["happy", "sad"] },
  { id: 44, text: "Good vibes only 🌟", tamil: "நல்ல அலைவரிசை மட்டுமே 🌟", category: "positivity", moods: ["happy", "excited"] },
  { id: 45, text: "Life is short, make it sweet 🍯", tamil: "வாழ்க்கை குறுகியது, அதை இனிமையாக்கு 🍯", category: "positivity", moods: ["happy", "excited"] },
  { id: 46, text: "Positive mind, positive life 🧠", tamil: "நேர்மறை மனம், நேர்மறை வாழ்க்கை 🧠", category: "positivity", moods: ["happy", "confident"] },
  { id: 47, text: "Be the reason someone smiles today 😊", tamil: "இன்று யாரோ ஒருவர் புன்னகைக்க காரணமாக இரு 😊", category: "positivity", moods: ["happy", "lonely"] },
  { id: 48, text: "Happiness is a choice, choose it daily ✨", tamil: "மகிழ்ச்சி ஒரு தேர்வு, அதை தினமும் தேர்வு செய் ✨", category: "positivity", moods: ["happy", "sad"] },
  { id: 49, text: "Collect moments, not things 📸", tamil: "பொருட்களை அல்ல, தருணங்களை சேகரி 📸", category: "positivity", moods: ["happy", "excited"] },
  { id: 50, text: "Gratitude turns what we have into enough 🙏", tamil: "நன்றியுணர்வு நம்மிடம் உள்ளதை போதுமானதாக மாற்றுகிறது 🙏", category: "positivity", moods: ["happy", "sad"] },

  // Stress Relief & Calmness
  { id: 51, text: "Breathe in peace, breathe out stress 🌬️", tamil: "அமைதியை உள்ளே இழுத்து, மன அழுத்தத்தை வெளியே விடு 🌬️", category: "calm", moods: ["stressed", "sad"] },
  { id: 52, text: "You are stronger than you think 💪", tamil: "நீங்கள் நினைப்பதை விட வலிமையானவர் 💪", category: "calm", moods: ["stressed", "confident"] },
  { id: 53, text: "One step at a time is still progress 👣", tamil: "ஒரு நேரத்தில் ஒரு அடி எடுத்து வைப்பதும் முன்னேற்றம் தான் 👣", category: "calm", moods: ["stressed", "lost"] },
  { id: 54, text: "Peace begins with a smile 😌", tamil: "அமைதி ஒரு புன்னகையுடன் தொடங்குகிறது 😌", category: "calm", moods: ["stressed", "happy"] },
  { id: 55, text: "You've survived 100% of your bad days 📊", tamil: "நீங்கள் உங்கள் மோசமான நாட்களில் 100% உயிர் பிழைத்துள்ளீர்கள் 📊", category: "calm", moods: ["stressed", "sad"] },
  { id: 56, text: "Focus on what you can control, let go of what you can't 🎯", tamil: "நீங்கள் கட்டுப்படுத்த முடியாததை விட்டுவிட்டு, கட்டுப்படுத்த முடியதில் கவனம் செலுத்துங்கள் 🎯", category: "calm", moods: ["stressed", "lost"] },
  { id: 57, text: "It's okay not to be okay 🌙", tamil: "சரியில்லாமல் இருப்பது சரி 🌙", category: "calm", moods: ["stressed", "sad", "lonely"] },
  { id: 58, text: "Rest is not a reward for work completed, it's a requirement 😴", tamil: "ஓய்வு என்பது முடிக்கப்பட்ட வேலைக்கான வெகுமதி அல்ல, அது ஒரு தேவை 😴", category: "calm", moods: ["stressed", "happy"] },
  { id: 59, text: "Progress is impossible without change 🔄", tamil: "மாற்றம் இல்லாமல் முன்னேற்றம் சாத்தியமில்லை 🔄", category: "calm", moods: ["stressed", "excited"] },
  { id: 60, text: "Calm seas never made skilled sailors ⛵", tamil: "அமைதியான கடல்கள் திறமையான மாலுமிகளை உருவாக்கியதில்லை ⛵", category: "calm", moods: ["stressed", "confident"] },

  // Additional Success Quotes
  { id: 61, text: "The future belongs to those who believe in their dreams 🚀", tamil: "எதிர்காலம் தங்கள் கனவுகளில் நம்பிக்கை வைப்பவர்களுக்கு சொந்தமானது 🚀", category: "success", moods: ["excited", "confident"] },
  { id: 62, text: "Success is the sum of small efforts repeated daily 📈", tamil: "வெற்றி என்பது தினமும் மீண்டும் செய்யப்படும் சிறிய முயற்சிகளின் கூட்டுத்தொகை 📈", category: "success", moods: ["confident", "stressed"] },
  { id: 63, text: "Don't wait for opportunity, create it 💡", tamil: "வாய்ப்புக்காக காத்திருக்காதே, அதை உருவாக்கு 💡", category: "success", moods: ["excited", "confident"] },
  { id: 64, text: "Your potential is endless 🌌", tamil: "உங்கள் திறன் எல்லையற்றது 🌌", category: "success", moods: ["confident", "lost"] },
  { id: 65, text: "Believe you can and you're halfway there ⭐", tamil: "உங்களால் முடியும் என்று நம்புங்கள், நீங்கள் பாதி வழி வந்துவிட்டீர்கள் ⭐", category: "success", moods: ["confident", "excited"] },

  // Additional Confidence Quotes
  { id: 66, text: "You are the author of your own story 📚", tamil: "நீங்கள் உங்கள் சொந்த கதையின் ஆசிரியர் 📚", category: "confidence", moods: ["confident", "lost"] },
  { id: 67, text: "Own your power, embrace your magic ✨", tamil: "உங்கள் சக்தியை சொந்தமாக்குங்கள், உங்கள் மாயத்தை ஏற்றுக்கொள்ளுங்கள் ✨", category: "confidence", moods: ["confident", "happy"] },
  { id: 68, text: "You don't need anyone's approval to be you 👑", tamil: "நீங்களாக இருக்க யாருடைய ஒப்புதலும் தேவையில்லை 👑", category: "confidence", moods: ["confident", "lonely"] },
  { id: 69, text: "Your worth is not up for debate 💎", tamil: "உங்கள் மதிப்பு விவாதத்திற்குரியது அல்ல 💎", category: "confidence", moods: ["sad", "confident"] },
  { id: 70, text: "Be fearless in the pursuit of what sets your soul on fire 🔥", tamil: "உங்கள் ஆன்மாவை தீயில் ஏற்றும் விஷயங்களை தேடுவதில் அச்சமற்றவராக இருங்கள் 🔥", category: "confidence", moods: ["excited", "confident"] },

  // Additional Life Lessons
  { id: 71, text: "Change is the only constant, embrace it 🌊", tamil: "மாற்றம் மட்டுமே நிலையானது, அதை ஏற்றுக்கொள்ளுங்கள் 🌊", category: "life", moods: ["lost", "stressed"] },
  { id: 72, text: "Every ending is a new beginning 🌅", tamil: "ஒவ்வொரு முடிவும் ஒரு புதிய தொடக்கம் 🌅", category: "life", moods: ["sad", "lost"] },
  { id: 73, text: "Life is tough, but so are you 💪", tamil: "வாழ்க்கை கடினமானது, ஆனால் நீங்களும் அப்படித்தான் 💪", category: "life", moods: ["stressed", "confident"] },
  { id: 74, text: "The best is yet to come 🌟", tamil: "சிறந்தது இன்னும் வரவிருக்கிறது 🌟", category: "life", moods: ["sad", "excited"] },
  { id: 75, text: "Trust the timing of your life 🕰️", tamil: "உங்கள் வாழ்க்கையின் நேரத்தை நம்புங்கள் 🕰️", category: "life", moods: ["lost", "stressed"] },

  // Additional Healing Quotes
  { id: 76, text: "You are healing, even when it doesn't feel like it 🌱", tamil: "நீங்கள் குணமடைந்து கொண்டிருக்கிறீர்கள், அது அப்படி தோன்றாவிட்டாலும் 🌱", category: "healing", moods: ["sad", "stressed"] },
  { id: 77, text: "Self-compassion is the first step to healing 💚", tamil: "சுய கருணை குணமடைவதற்கான முதல் படி 💚", category: "healing", moods: ["sad", "lonely"] },
  { id: 78, text: "You are not broken, you are breaking open 🌸", tamil: "நீங்கள் உடைந்தவர் அல்ல, நீங்கள் திறந்து கொண்டிருக்கிறீர்கள் 🌸", category: "healing", moods: ["sad", "confident"] },
  { id: 79, text: "Healing takes time, be gentle with yourself 🕊️", tamil: "குணமடைதல் நேரம் எடுக்கும், உங்களுடன் மென்மையாக இருங்கள் 🕊️", category: "healing", moods: ["sad", "stressed"] },
  { id: 80, text: "Every scar tells a story of survival 📖", tamil: "ஒவ்வொரு வடுவும் உயிர் பிழைத்ததன் கதையை சொல்கிறது 📖", category: "healing", moods: ["sad", "confident"] },

  // Additional Positivity Quotes
  { id: 81, text: "Spread love everywhere you go 💕", tamil: "நீங்கள் எங்கு சென்றாலும் அன்பை பரப்புங்கள் 💕", category: "positivity", moods: ["happy", "excited"] },
  { id: 82, text: "Your smile is your superpower 😊", tamil: "உங்கள் புன்னகை உங்கள் சூப்பர் பவர் 😊", category: "positivity", moods: ["happy", "confident"] },
  { id: 83, text: "Create your own sunshine ☀️", tamil: "உங்கள் சொந்த சூரிய ஒளியை உருவாக்குங்கள் ☀️", category: "positivity", moods: ["happy", "sad"] },
  { id: 84, text: "Life is beautiful, open your eyes 👀", tamil: "வாழ்க்கை அழகானது, உங்கள் கண்களை திறங்கள் 👀", category: "positivity", moods: ["happy", "lost"] },
  { id: 85, text: "Love yourself first, the rest will follow 💖", tamil: "முதலில் உங்களை நேசியுங்கள், மற்றவை பின்தொடரும் 💖", category: "positivity", moods: ["happy", "lonely"] },

  // Additional Calm Quotes
  { id: 86, text: "Stillness is where creativity is born 🌙", tamil: "அமைதியில் தான் படைப்பாற்றல் பிறக்கிறது 🌙", category: "calm", moods: ["stressed", "happy"] },
  { id: 87, text: "Find peace in the present moment 🧘", tamil: "தற்போதைய தருணத்தில் அமைதியை கண்டுபிடியுங்கள் 🧘", category: "calm", moods: ["stressed", "lost"] },
  { id: 88, text: "You are exactly where you need to be 🌍", tamil: "நீங்கள் இருக்க வேண்டிய இடத்தில் தான் இருக்கிறீர்கள் 🌍", category: "calm", moods: ["stressed", "lost"] },
  { id: 89, text: "Let your soul breathe 🌿", tamil: "உங்கள் ஆன்மா சுவாசிக்க விடுங்கள் 🌿", category: "calm", moods: ["stressed", "happy"] },
  { id: 90, text: "Inner peace is the new success 🕊️", tamil: "உள் அமைதி தான் புதிய வெற்றி 🕊️", category: "calm", moods: ["stressed", "confident"] },

  // Final Additional Quotes
  { id: 91, text: "Your journey is uniquely yours 🛤️", tamil: "உங்கள் பயணம் தனித்துவமாக உங்களுடையது 🛤️", category: "life", moods: ["lost", "confident"] },
  { id: 92, text: "Dream without limits, live without regrets 🌈", tamil: "வரம்புகள் இல்லாமல் கனவு காணுங்கள், வருத்தம் இல்லாமல் வாழுங்கள் 🌈", category: "success", moods: ["excited", "happy"] },
  { id: 93, text: "You matter more than you know 💫", tamil: "நீங்கள் நினைப்பதை விட முக்கியமானவர் 💫", category: "confidence", moods: ["lonely", "sad"] },
  { id: 94, text: "Every day is a fresh start 🌄", tamil: "ஒவ்வொரு நாளும் ஒரு புதிய தொடக்கம் 🌄", category: "positivity", moods: ["happy", "excited"] },
  { id: 95, text: "Choose progress over perfection 📊", tamil: "முழுமையை விட முன்னேற்றத்தை தேர்வு செய்யுங்கள் 📊", category: "success", moods: ["stressed", "confident"] },
  { id: 96, text: "Your heart knows the way, trust it ❤️", tamil: "உங்கள் இதயம் வழியை அறியும், அதை நம்புங்கள் ❤️", category: "life", moods: ["lost", "confident"] },
  { id: 97, text: "Be present, be grateful, be kind 🙏", tamil: "தற்போது இருங்கள், நன்றியுடன் இருங்கள், கருணையுடன் இருங்கள் 🙏", category: "positivity", moods: ["happy", "calm"] },
  { id: 98, text: "You are writing your story with every choice 📝", tamil: "ஒவ்வொரு தேர்வுடனும் நீங்கள் உங்கள் கதையை எழுதுகிறீர்கள் 📝", category: "confidence", moods: ["confident", "excited"] },
  { id: 99, text: "Embrace the unknown, it holds your growth 🌱", tamil: "தெரியாததை ஏற்றுக்கொள்ளுங்கள், அது உங்கள் வளர்ச்சியை கொண்டுள்ளது 🌱", category: "life", moods: ["lost", "excited"] },
  { id: 100, text: "You are more resilient than you realize 🌊", tamil: "நீங்கள் உணர்வதை விட அதிக தாங்கும் சக்தி கொண்டவர் 🌊", category: "calm", moods: ["stressed", "confident"] }
];

export const actionTips = {
  happy: [
    "Share your happiness with someone today 😊",
    "Dance to your favorite song 💃",
    "Write down 3 things you're grateful for 📝"
  ],
  sad: [
    "Take 5 deep breaths and feel your strength 🌬️",
    "Call a friend who makes you smile 📞",
    "Watch the sunset or sunrise 🌅"
  ],
  stressed: [
    "Take a 10-minute walk outside 🚶‍♀️",
    "Drink a glass of water mindfully 💧",
    "Do 5 minutes of stretching 🧘‍♀️"
  ],
  excited: [
    "Channel that energy into your goals 🎯",
    "Share your excitement with loved ones 📢",
    "Start that project you've been thinking about 🚀"
  ],
  lonely: [
    "Reach out to someone you care about 💬",
    "Do something kind for yourself 💕",
    "Join a community or group activity 👥"
  ],
  lost: [
    "Write about your feelings for clarity ✍️",
    "Take one small step toward any goal 👣",
    "Ask for help from someone you trust 🤝"
  ],
  confident: [
    "Take on a challenge you've been avoiding 💪",
    "Help someone else who needs support 🤲",
    "Celebrate your recent wins 🎉"
  ]
};