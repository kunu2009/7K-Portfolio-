/**
 * Stan AI - Entertainment Features
 * Jokes, facts, quotes, ASCII art for engagement
 */

// ============================================
// PROGRAMMING JOKES
// ============================================

const PROGRAMMING_JOKES = [
  "😄 Why do programmers prefer dark mode? Because light attracts bugs!",
  "🤓 How many programmers does it take to change a light bulb? None. It's a hardware problem!",
  "💻 A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?'",
  "🐛 '99 little bugs in the code, 99 bugs in the code. Take one down, patch it around, 127 bugs in the code...'",
  "☕ Java and JavaScript are similar like Car and Carpet are similar!",
  "🎯 Why do Java developers wear glasses? Because they don't C#!",
  "🔄 Algorithm: A word used by programmers when they don't want to explain what they did.",
  "👨‍💻 I'm not lazy, I'm just on energy-saving mode.",
  "🌐 There are only 10 types of people in the world: those who understand binary, and those who don't.",
  "💾 Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
  "🎨 CSS is awesome! (Unless you need to center a div vertically.)",
  "📱 My code doesn't work. I have no idea why. My code works! I have no idea why.",
  "🚀 // TODO: Make this work. // FIXME: This is broken. // HACK: God forgive me for this...",
  "🏃 Programmer (noun): A machine that turns coffee into code.",
  "🎪 Q: How do you comfort a JavaScript bug? A: You console it!"
];

export function getRandomJoke(): string {
  const joke = PROGRAMMING_JOKES[Math.floor(Math.random() * PROGRAMMING_JOKES.length)];
  return `${joke}\n\n😂 Want another? Just say "tell joke" again!`;
}

// ============================================
// TECH FUN FACTS
// ============================================

const TECH_FUN_FACTS = [
  "🤯 The first computer bug was an actual bug! A moth got stuck in a Harvard Mark II computer in 1947.",
  "💿 The first 1GB hard drive (1980) weighed over 500 pounds and cost $40,000!",
  "📧 The first email was sent in 1971 by Ray Tomlinson... to himself!",
  "🌐 The first website ever (info.cern.ch) is still online. It was created in 1991.",
  "💾 The @ symbol was chosen for email addresses because it was rarely used and couldn't be part of anyone's name.",
  "🐍 Python is named after Monty Python's Flying Circus, not the snake!",
  "🎮 The first video game ever made was 'Tennis for Two' in 1958, predating Pong by 14 years!",
  "💻 The world's first programmer was Ada Lovelace in the 1840s, about 100 years before the first computer!",
  "📱 The first iPhone had only 128MB of RAM. Your photo thumbnails today use more!",
  "🖱️ The computer mouse was invented in 1964 but wasn't widely used until Apple's Lisa in 1983.",
  "🔐 The QWERTY keyboard was designed to slow typists down to prevent mechanical typewriters from jamming!",
  "🌍 More than 50% of all websites are powered by open-source software!",
  "⚡ Modern smartphones are millions of times more powerful than the computers that sent Apollo 11 to the moon.",
  "🎯 The first domain ever registered was symbolics.com on March 15, 1985.",
  "💡 The 'firewall' term comes from actual walls that prevented fire from spreading between buildings!"
];

export function getRandomFact(): string {
  const fact = TECH_FUN_FACTS[Math.floor(Math.random() * TECH_FUN_FACTS.length)];
  return `${fact}\n\n🧠 Want more knowledge? Say "fun fact" again!`;
}

// ============================================
// MOTIVATIONAL QUOTES
// ============================================

const MOTIVATIONAL_QUOTES = [
  "💪 'The only way to do great work is to love what you do.' - Steve Jobs",
  "🚀 'First, solve the problem. Then, write the code.' - John Johnson",
  "🎯 'Code is like humor. When you have to explain it, it's bad.' - Cory House",
  "✨ 'Make it work, make it right, make it fast.' - Kent Beck",
  "🔥 'The best error message is the one that never shows up.' - Thomas Fuchs",
  "💡 'Simplicity is the soul of efficiency.' - Austin Freeman",
  "🌟 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' - Martin Fowler",
  "⚡ 'Talk is cheap. Show me the code.' - Linus Torvalds",
  "🎪 'Programs must be written for people to read, and only incidentally for machines to execute.' - Harold Abelson",
  "🏆 'The most disastrous thing that you can ever learn is your first programming language.' - Alan Kay",
  "🌈 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.' - Patrick McKenzie",
  "🎨 'Clean code always looks like it was written by someone who cares.' - Robert C. Martin",
  "🔮 'The best way to predict the future is to implement it.' - David Heinemeier Hansson",
  "💎 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.' - Antoine de Saint-Exupéry",
  "🚁 'Walking on water and developing software from a specification are easy if both are frozen.' - Edward V. Berard"
];

export function getMotivationalQuote(): string {
  const quote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
  return `${quote}\n\n🌟 Need more motivation? Just ask!`;
}

// ============================================
// ASCII ART
// ============================================

const ASCII_ARTS = [
  `
   🚀 STAN AI 🚀
  _______________
 |  ___________  |
 | |           | |
 | |  > READY | |
 | |___________| |
 |_______________|
    \_________/
  `,
  `
    💻 CODE MODE 💻
     _______
    |.-----.|
    ||x . x||
    ||_.-._||
    |'-._.-'|
    '-------'
  `,
  `
    ☕ COFFEE++  ☕
       (  )   (   )  )
        ) (   )  (  (
        ( )  (    ) )
        _____________
        <_____________> ___
        |             |/ _ \\
        |               | | |
        |               |_| |
     ___|             |\\___/
    /    \\___________/    \\
    \\_____________________/
  `,
  `
    🎯 7K ECOSYSTEM 🎯
        ___
       /   \\
      |  7K |
       \\___/
      /|   |\\
     / |   | \\
    |  |   |  |
    |  |   |  |
  `,
  `
    ⚡ POWER MODE ⚡
        .-.
       (o.o)
        |=|
       __|__
     //.=|=.\\\\
    // .=|=. \\\\
    \\\\ .=|=. //
     \\\\(_=_)//
      (:| |:)
       || ||
       () ()
       || ||
       || ||
      ==' '==
  `
];

export function getRandomASCIIArt(): string {
  const art = ASCII_ARTS[Math.floor(Math.random() * ASCII_ARTS.length)];
  return `\`\`\`${art}\`\`\`\n\nCool, right? Say "ascii art" for more!`;
}

// ============================================
// SURPRISE/EASTER EGGS
// ============================================

const EASTER_EGGS = [
  "🥚 **Easter Egg Found!** You discovered a secret! Kunal loves chess ♟️ and has built an entire chess learning app (7K Chess). Want to see it? Say 'show apps'!",
  "🎉 **Hidden Feature!** Did you know Stan AI can tell jokes? Try 'tell joke' for some programming humor!",
  "🌟 **Secret Unlocked!** Kunal built his first app when he was just starting to learn coding. Now he has 24+ apps! Persistence pays off! 💪",
  "🎯 **Fun Fact Unlocked!** The 7K in '7K Ecosystem' represents 'Knowledge, Kaizen, Karma' - continuous improvement and giving back!",
  "💡 **Insider Info!** Stan AI works completely offline! No data is sent to any external server. Your privacy = respected!",
  "🚀 **Pro Tip Unlocked!** You can use natural language with Stan. Instead of 'open blog', try 'can you show me the blog?' - I understand!",
  "🏆 **Achievement Unlocked!** You're curious! That's the #1 trait of successful developers. Keep exploring!",
  "🎨 **Design Secret!** This portfolio has 8 different design styles! Each showcases different aspects of modern web design.",
  "⚡ **Speed Demon!** Stan AI responds in less than 100ms. That's faster than you can blink! ⚡",
  "🎪 **Hidden Command!** Try saying 'matrix' or 'hack the mainframe' in the Terminal portfolio style! 😉"
];

export function getSurprise(): string {
  const surprise = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];
  return `${surprise}\n\n🎁 Want another surprise? Just say "surprise me" again!`;
}

// ============================================
// COMBINED ENTERTAINMENT COMMAND
// ============================================

export function getEntertainment(type: 'joke' | 'fact' | 'quote' | 'art' | 'surprise'): string {
  switch (type) {
    case 'joke':
      return getRandomJoke();
    case 'fact':
      return getRandomFact();
    case 'quote':
      return getMotivationalQuote();
    case 'art':
      return getRandomASCIIArt();
    case 'surprise':
      return getSurprise();
    default:
      return getRandomJoke();
  }
}
