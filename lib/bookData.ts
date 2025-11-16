export interface Word {
  icon: string;
  word: string;
  phrase?: string;
  color: number;
}

export interface Page {
  title: string;
  words: Word[];
  pageNumber: number;
  totalPages: number;
  pageClass: string;
}

// Book 1: 3-letter words (no phrases)
export const book1Data: Page[] = [
  {
    title: "⭐ 100 Words to Read! ⭐",
    pageNumber: 1,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-orange-200 via-peach-200 to-pink-200",
    words: [
      { icon: "🐱", word: "Cat", color: 1 },
      { icon: "🐶", word: "Dog", color: 2 },
      { icon: "☀️", word: "Sun", color: 3 },
      { icon: "🏃", word: "Run", color: 4 },
      { icon: "🛏️", word: "Bed", color: 5 },
      { icon: "🚗", word: "Car", color: 6 },
      { icon: "👦", word: "Boy", color: 6 },
      { icon: "🧸", word: "Toy", color: 1 },
      { icon: "🎉", word: "Fun", color: 2 },
      { icon: "🐘", word: "Big", color: 3 },
      { icon: "🎩", word: "Hat", color: 4 },
      { icon: "🐷", word: "Pig", color: 5 },
      { icon: "🔴", word: "Red", color: 5 },
      { icon: "✅", word: "Yes", color: 6 },
      { icon: "🪑", word: "Sit", color: 1 },
      { icon: "🐰", word: "Hop", color: 2 },
      { icon: "🦇", word: "Bat", color: 3 },
      { icon: "☕", word: "Cup", color: 4 },
      { icon: "📦", word: "Box", color: 4 },
      { icon: "🔝", word: "Top", color: 5 },
    ]
  },
  {
    title: "🌈 Keep Reading! 🌈",
    pageNumber: 2,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
    words: [
      { icon: "👩", word: "Mom", color: 6 },
      { icon: "👨", word: "Dad", color: 1 },
      { icon: "🍲", word: "Pot", color: 2 },
      { icon: "🍳", word: "Pan", color: 3 },
      { icon: "🐛", word: "Bug", color: 3 },
      { icon: "🥫", word: "Can", color: 4 },
      { icon: "👜", word: "Bag", color: 5 },
      { icon: "🪵", word: "Log", color: 6 },
      { icon: "🦊", word: "Fox", color: 1 },
      { icon: "🐔", word: "Hen", color: 2 },
      { icon: "🖊️", word: "Pen", color: 2 },
      { icon: "🎾", word: "Net", color: 3 },
      { icon: "✈️", word: "Jet", color: 4 },
      { icon: "🗺️", word: "Map", color: 5 },
      { icon: "😴", word: "Nap", color: 6 },
      { icon: "🧎", word: "Lap", color: 1 },
      { icon: "🚐", word: "Van", color: 1 },
      { icon: "🪭", word: "Fan", color: 2 },
      { icon: "🍓", word: "Jam", color: 3 },
      { icon: "🤐", word: "Zip", color: 4 },
    ]
  },
  {
    title: "🚀 You're Doing Great! 🚀",
    pageNumber: 3,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400",
    words: [
      { icon: "🦵", word: "Leg", color: 5 },
      { icon: "📍", word: "Peg", color: 6 },
      { icon: "🕸️", word: "Web", color: 6 },
      { icon: "💇", word: "Wig", color: 1 },
      { icon: "🏃‍♂️", word: "Jog", color: 2 },
      { icon: "⛏️", word: "Dig", color: 3 },
      { icon: "🤗", word: "Hug", color: 4 },
      { icon: "🍺", word: "Mug", color: 5 },
      { icon: "🧶", word: "Rug", color: 5 },
      { icon: "🚢", word: "Tug", color: 6 },
      { icon: "🍔", word: "Bun", color: 1 },
      { icon: "🏆", word: "Win", color: 2 },
      { icon: "🐟", word: "Fin", color: 3 },
      { icon: "📌", word: "Pin", color: 4 },
      { icon: "🔟", word: "Ten", color: 4 },
      { icon: "🔥", word: "Hot", color: 5 },
      { icon: "✔️", word: "Got", color: 6 },
      { icon: "⚫", word: "Dot", color: 1 },
      { icon: "🅿️", word: "Lot", color: 2 },
      { icon: "🧘", word: "Mat", color: 3 },
    ]
  },
  {
    title: "🌟 Almost There! 🌟",
    pageNumber: 4,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-green-200 via-green-300 to-green-400",
    words: [
      { icon: "🐀", word: "Rat", color: 3 },
      { icon: "💺", word: "Sat", color: 4 },
      { icon: "👋", word: "Pat", color: 5 },
      { icon: "👆", word: "Tap", color: 6 },
      { icon: "⛰️", word: "Gap", color: 1 },
      { icon: "🧢", word: "Cap", color: 2 },
      { icon: "👄", word: "Lip", color: 2 },
      { icon: "💡", word: "Tip", color: 3 },
      { icon: "📄", word: "Rip", color: 4 },
      { icon: "🏊", word: "Dip", color: 5 },
      { icon: "🕺", word: "Hip", color: 6 },
      { icon: "🥤", word: "Sip", color: 1 },
      { icon: "😈", word: "Bad", color: 1 },
      { icon: "✋", word: "Had", color: 2 },
      { icon: "😢", word: "Sad", color: 3 },
      { icon: "😠", word: "Mad", color: 4 },
      { icon: "🏷️", word: "Tag", color: 5 },
      { icon: "🐕", word: "Wag", color: 6 },
      { icon: "🦵", word: "Leg", color: 6 },
      { icon: "🙏", word: "Beg", color: 1 },
    ]
  },
  {
    title: "🎉 You Did It! 100 Words! 🎉",
    pageNumber: 5,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400",
    words: [
      { icon: "👨‍👨‍👦", word: "Men", color: 2 },
      { icon: "🦁", word: "Den", color: 3 },
      { icon: "💧", word: "Wet", color: 4 },
      { icon: "🐾", word: "Pet", color: 5 },
      { icon: "🚪", word: "Let", color: 6 },
      { icon: "🤝", word: "Met", color: 5 },
      { icon: "🌅", word: "Set", color: 6 },
      { icon: "🎁", word: "Get", color: 1 },
      { icon: "💼", word: "Job", color: 2 },
      { icon: "🦹", word: "Rob", color: 3 },
      { icon: "👥", word: "Mob", color: 4 },
      { icon: "🍎", word: "Bit", color: 4 },
      { icon: "👕", word: "Fit", color: 5 },
      { icon: "🥊", word: "Hit", color: 6 },
      { icon: "🧰", word: "Kit", color: 1 },
      { icon: "🥣", word: "Mix", color: 2 },
      { icon: "🔧", word: "Fix", color: 3 },
      { icon: "6️⃣", word: "Six", color: 3 },
      { icon: "🧠", word: "Wit", color: 4 },
      { icon: "🕳️", word: "Pit", color: 5 },
      { icon: "🛏️", word: "Cot", color: 6 },
    ]
  }
];

// Book 2: 3-letter words with phrases
export const book2Data: Page[] = [
  {
    title: "⭐ 100 Words to Read! ⭐",
    pageNumber: 1,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-orange-200 via-peach-200 to-pink-200",
    words: [
      { icon: "🐱", word: "Cat", phrase: "A cat sits", color: 1 },
      { icon: "🐶", word: "Dog", phrase: "The dog runs", color: 2 },
      { icon: "☀️", word: "Sun", phrase: "The sun is hot", color: 3 },
      { icon: "🏃", word: "Run", phrase: "I can run", color: 4 },
      { icon: "🛏️", word: "Bed", phrase: "Go to bed", color: 5 },
      { icon: "🚗", word: "Car", phrase: "A red car", color: 6 },
      { icon: "👦", word: "Boy", phrase: "The boy plays", color: 6 },
      { icon: "🧸", word: "Toy", phrase: "A fun toy", color: 1 },
      { icon: "🎉", word: "Fun", phrase: "It is fun", color: 2 },
      { icon: "🐘", word: "Big", phrase: "A big ball", color: 3 },
      { icon: "🎩", word: "Hat", phrase: "A red hat", color: 4 },
      { icon: "🐷", word: "Pig", phrase: "The pig oinks", color: 5 },
      { icon: "🔴", word: "Red", phrase: "Red is nice", color: 5 },
      { icon: "✅", word: "Yes", phrase: "Yes, I can", color: 6 },
      { icon: "🪑", word: "Sit", phrase: "Sit down now", color: 1 },
      { icon: "🐰", word: "Hop", phrase: "Hop like a bunny", color: 2 },
      { icon: "🦇", word: "Bat", phrase: "A bat flies", color: 3 },
      { icon: "☕", word: "Cup", phrase: "A cup of milk", color: 4 },
      { icon: "📦", word: "Box", phrase: "A big box", color: 4 },
      { icon: "🔝", word: "Top", phrase: "On the top", color: 5 },
    ]
  },
  {
    title: "🌈 Keep Reading! 🌈",
    pageNumber: 2,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
    words: [
      { icon: "👩", word: "Mom", phrase: "Mom loves me", color: 6 },
      { icon: "👨", word: "Dad", phrase: "Dad is here", color: 1 },
      { icon: "🍲", word: "Pot", phrase: "A big pot", color: 2 },
      { icon: "🍳", word: "Pan", phrase: "A hot pan", color: 3 },
      { icon: "🐛", word: "Bug", phrase: "A small bug", color: 3 },
      { icon: "🥫", word: "Can", phrase: "I can do it", color: 4 },
      { icon: "👜", word: "Bag", phrase: "A red bag", color: 5 },
      { icon: "🪵", word: "Log", phrase: "A big log", color: 6 },
      { icon: "🦊", word: "Fox", phrase: "The fox runs", color: 1 },
      { icon: "🐔", word: "Hen", phrase: "The hen clucks", color: 2 },
      { icon: "🖊️", word: "Pen", phrase: "Write with pen", color: 2 },
      { icon: "🎾", word: "Net", phrase: "A fishing net", color: 3 },
      { icon: "✈️", word: "Jet", phrase: "A fast jet", color: 4 },
      { icon: "🗺️", word: "Map", phrase: "Look at map", color: 5 },
      { icon: "😴", word: "Nap", phrase: "Take a nap", color: 6 },
      { icon: "🧎", word: "Lap", phrase: "Sit on my lap", color: 1 },
      { icon: "🚐", word: "Van", phrase: "A big van", color: 1 },
      { icon: "🪭", word: "Fan", phrase: "Turn on fan", color: 2 },
      { icon: "🍓", word: "Jam", phrase: "Bread and jam", color: 3 },
      { icon: "🤐", word: "Zip", phrase: "Zip it up", color: 4 },
    ]
  },
  {
    title: "🚀 You're Doing Great! 🚀",
    pageNumber: 3,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400",
    words: [
      { icon: "🦵", word: "Leg", phrase: "My leg hurts", color: 5 },
      { icon: "📍", word: "Peg", phrase: "Hang on peg", color: 6 },
      { icon: "🕸️", word: "Web", phrase: "A spider web", color: 6 },
      { icon: "💇", word: "Wig", phrase: "A funny wig", color: 1 },
      { icon: "🏃‍♂️", word: "Jog", phrase: "I like to jog", color: 2 },
      { icon: "⛏️", word: "Dig", phrase: "Dig a hole", color: 3 },
      { icon: "🤗", word: "Hug", phrase: "Give a hug", color: 4 },
      { icon: "🍺", word: "Mug", phrase: "A coffee mug", color: 5 },
      { icon: "🧶", word: "Rug", phrase: "A soft rug", color: 5 },
      { icon: "🚢", word: "Tug", phrase: "A tug boat", color: 6 },
      { icon: "🍔", word: "Bun", phrase: "A hot dog bun", color: 1 },
      { icon: "🏆", word: "Win", phrase: "I want to win", color: 2 },
      { icon: "🐟", word: "Fin", phrase: "A fish fin", color: 3 },
      { icon: "📌", word: "Pin", phrase: "A safety pin", color: 4 },
      { icon: "🔟", word: "Ten", phrase: "Count to ten", color: 4 },
      { icon: "🔥", word: "Hot", phrase: "It is hot", color: 5 },
      { icon: "✔️", word: "Got", phrase: "I got it", color: 6 },
      { icon: "⚫", word: "Dot", phrase: "A small dot", color: 1 },
      { icon: "🅿️", word: "Lot", phrase: "A lot of toys", color: 2 },
      { icon: "🧘", word: "Mat", phrase: "Sit on mat", color: 3 },
    ]
  },
  {
    title: "🌟 Almost There! 🌟",
    pageNumber: 4,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-green-200 via-green-300 to-green-400",
    words: [
      { icon: "🐀", word: "Rat", phrase: "A small rat", color: 3 },
      { icon: "💺", word: "Sat", phrase: "I sat down", color: 4 },
      { icon: "👋", word: "Pat", phrase: "Pat the dog", color: 5 },
      { icon: "👆", word: "Tap", phrase: "Tap on door", color: 6 },
      { icon: "⛰️", word: "Gap", phrase: "A small gap", color: 1 },
      { icon: "🧢", word: "Cap", phrase: "Wear a cap", color: 2 },
      { icon: "👄", word: "Lip", phrase: "My lip hurts", color: 2 },
      { icon: "💡", word: "Tip", phrase: "A good tip", color: 3 },
      { icon: "📄", word: "Rip", phrase: "Do not rip", color: 4 },
      { icon: "🏊", word: "Dip", phrase: "Dip in water", color: 5 },
      { icon: "🕺", word: "Hip", phrase: "Move your hip", color: 6 },
      { icon: "🥤", word: "Sip", phrase: "Sip your drink", color: 1 },
      { icon: "😈", word: "Bad", phrase: "That is bad", color: 1 },
      { icon: "✋", word: "Had", phrase: "I had fun", color: 2 },
      { icon: "😢", word: "Sad", phrase: "I feel sad", color: 3 },
      { icon: "😠", word: "Mad", phrase: "Do not be mad", color: 4 },
      { icon: "🏷️", word: "Tag", phrase: "Play tag game", color: 5 },
      { icon: "🐕", word: "Wag", phrase: "Wag the tail", color: 6 },
      { icon: "🦵", word: "Leg", phrase: "My leg hurts", color: 6 },
      { icon: "🙏", word: "Beg", phrase: "Beg for help", color: 1 },
    ]
  },
  {
    title: "🎉 You Did It! 100 Words! 🎉",
    pageNumber: 5,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400",
    words: [
      { icon: "👨‍👨‍👦", word: "Men", phrase: "Two big men", color: 2 },
      { icon: "🦁", word: "Den", phrase: "A lion den", color: 3 },
      { icon: "💧", word: "Wet", phrase: "I am wet", color: 4 },
      { icon: "🐾", word: "Pet", phrase: "My pet dog", color: 5 },
      { icon: "🚪", word: "Let", phrase: "Let me go", color: 6 },
      { icon: "🤝", word: "Met", phrase: "I met a friend", color: 5 },
      { icon: "🌅", word: "Set", phrase: "Set it down", color: 6 },
      { icon: "🎁", word: "Get", phrase: "Get a toy", color: 1 },
      { icon: "💼", word: "Job", phrase: "A good job", color: 2 },
      { icon: "🦹", word: "Rob", phrase: "Do not rob", color: 3 },
      { icon: "👥", word: "Mob", phrase: "A big mob", color: 4 },
      { icon: "🍎", word: "Bit", phrase: "A bit of food", color: 4 },
      { icon: "👕", word: "Fit", phrase: "It does fit", color: 5 },
      { icon: "🥊", word: "Hit", phrase: "Do not hit", color: 6 },
      { icon: "🧰", word: "Kit", phrase: "A tool kit", color: 1 },
      { icon: "🥣", word: "Mix", phrase: "Mix it up", color: 2 },
      { icon: "🔧", word: "Fix", phrase: "Fix the toy", color: 3 },
      { icon: "6️⃣", word: "Six", phrase: "Count to six", color: 3 },
      { icon: "🧠", word: "Wit", phrase: "Use your wit", color: 4 },
      { icon: "🕳️", word: "Pit", phrase: "A deep pit", color: 5 },
      { icon: "🛏️", word: "Cot", phrase: "Sleep on cot", color: 6 },
    ]
  }
];

// Book 3: 4-letter words with phrases
export const book3Data: Page[] = [
  {
    title: "⭐ 100 Words to Read! ⭐",
    pageNumber: 1,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-orange-200 via-peach-200 to-pink-200",
    words: [
      { icon: "🐦", word: "Bird", phrase: "A bird flies", color: 1 },
      { icon: "🎂", word: "Cake", phrase: "A birthday cake", color: 2 },
      { icon: "🚪", word: "Door", phrase: "Open the door", color: 3 },
      { icon: "🐟", word: "Fish", phrase: "A fish swims", color: 4 },
      { icon: "🎮", word: "Game", phrase: "Play a game", color: 5 },
      { icon: "✋", word: "Hand", phrase: "Raise your hand", color: 6 },
      { icon: "🦘", word: "Jump", phrase: "Jump up high", color: 6 },
      { icon: "🪁", word: "Kite", phrase: "Fly a kite", color: 1 },
      { icon: "🦁", word: "Lion", phrase: "A big lion", color: 2 },
      { icon: "🥛", word: "Milk", phrase: "Drink some milk", color: 3 },
      { icon: "🐦", word: "Nest", phrase: "A bird nest", color: 4 },
      { icon: "🔓", word: "Open", phrase: "Open the box", color: 5 },
      { icon: "🎮", word: "Play", phrase: "Let us play", color: 5 },
      { icon: "🌧️", word: "Rain", phrase: "It is raining", color: 6 },
      { icon: "⭐", word: "Star", phrase: "A bright star", color: 1 },
      { icon: "🌳", word: "Tree", phrase: "A tall tree", color: 2 },
      { icon: "🚶", word: "Walk", phrase: "Walk to school", color: 3 },
      { icon: "🏡", word: "Yard", phrase: "Play in yard", color: 4 },
      { icon: "🔵", word: "Blue", phrase: "Blue is nice", color: 4 },
      { icon: "❄️", word: "Cold", phrase: "It is cold", color: 5 },
    ]
  },
  {
    title: "🌈 Keep Reading! 🌈",
    pageNumber: 2,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
    words: [
      { icon: "🦆", word: "Duck", phrase: "A duck quacks", color: 6 },
      { icon: "🥚", word: "Eggs", phrase: "Two eggs please", color: 1 },
      { icon: "🚜", word: "Farm", phrase: "Visit the farm", color: 2 },
      { icon: "👧", word: "Girl", phrase: "A happy girl", color: 3 },
      { icon: "🏠", word: "Home", phrase: "Go back home", color: 3 },
      { icon: "💡", word: "Idea", phrase: "A good idea", color: 4 },
      { icon: "🔑", word: "Keep", phrase: "Keep it safe", color: 5 },
      { icon: "🏞️", word: "Lake", phrase: "Swim in lake", color: 6 },
      { icon: "🌙", word: "Moon", phrase: "The moon shines", color: 1 },
      { icon: "🏷️", word: "Name", phrase: "What is your name", color: 2 },
      { icon: "🌳", word: "Park", phrase: "Play in park", color: 2 },
      { icon: "❓", word: "Quiz", phrase: "Take a quiz", color: 3 },
      { icon: "📖", word: "Read", phrase: "Read a book", color: 4 },
      { icon: "🎤", word: "Sing", phrase: "Sing a song", color: 5 },
      { icon: "⏰", word: "Time", phrase: "What time is it", color: 6 },
      { icon: "📦", word: "Unit", phrase: "One unit please", color: 1 },
      { icon: "✅", word: "Very", phrase: "Very good job", color: 1 },
      { icon: "🔥", word: "Warm", phrase: "It is warm", color: 2 },
      { icon: "💨", word: "Wind", phrase: "The wind blows", color: 3 },
      { icon: "⭐", word: "Wish", phrase: "Make a wish", color: 4 },
    ]
  },
  {
    title: "🚀 You're Doing Great! 🚀",
    pageNumber: 3,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400",
    words: [
      { icon: "👶", word: "Baby", phrase: "A cute baby", color: 5 },
      { icon: "🪑", word: "Desk", phrase: "Sit at desk", color: 6 },
      { icon: "😊", word: "Easy", phrase: "It is easy", color: 6 },
      { icon: "😀", word: "Face", phrase: "A happy face", color: 1 },
      { icon: "👍", word: "Good", phrase: "Good job done", color: 2 },
      { icon: "🆘", word: "Help", phrase: "I need help", color: 3 },
      { icon: "➡️", word: "Into", phrase: "Go into room", color: 4 },
      { icon: "⚖️", word: "Just", phrase: "Just do it", color: 5 },
      { icon: "❤️", word: "Kind", phrase: "Be kind always", color: 5 },
      { icon: "⬅️", word: "Left", phrase: "Turn to left", color: 6 },
      { icon: "🔢", word: "Many", phrase: "Many toys here", color: 1 },
      { icon: "✨", word: "Nice", phrase: "Have a nice day", color: 2 },
      { icon: "1️⃣", word: "Only", phrase: "Only one left", color: 3 },
      { icon: "🧩", word: "Part", phrase: "Part of whole", color: 4 },
      { icon: "🛑", word: "Quit", phrase: "Do not quit", color: 4 },
      { icon: "😴", word: "Rest", phrase: "Take a rest", color: 5 },
      { icon: "👥", word: "Some", phrase: "Some of them", color: 6 },
      { icon: "✋", word: "Take", phrase: "Take your time", color: 1 },
      { icon: "👆", word: "Upon", phrase: "Upon the table", color: 2 },
      { icon: "👀", word: "View", phrase: "A nice view", color: 3 },
    ]
  },
  {
    title: "🌟 Almost There! 🌟",
    pageNumber: 4,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-green-200 via-green-300 to-green-400",
    words: [
      { icon: "✅", word: "Able", phrase: "I am able to", color: 3 },
      { icon: "⬅️", word: "Back", phrase: "Come back soon", color: 4 },
      { icon: "📞", word: "Call", phrase: "Call me later", color: 5 },
      { icon: "⬇️", word: "Down", phrase: "Sit down please", color: 6 },
      { icon: "👤", word: "Each", phrase: "Each one counts", color: 1 },
      { icon: "🔍", word: "Find", phrase: "Find your book", color: 2 },
      { icon: "🎁", word: "Give", phrase: "Give it to me", color: 2 },
      { icon: "✋", word: "Have", phrase: "I have a toy", color: 3 },
      { icon: "🏠", word: "Room", phrase: "Go to your room", color: 4 },
      { icon: "🏃", word: "Runs", phrase: "He runs fast", color: 5 },
      { icon: "👀", word: "Seen", phrase: "I have seen it", color: 6 },
      { icon: "❤️", word: "Like", phrase: "I like to play", color: 1 },
      { icon: "🔨", word: "Make", phrase: "Make a cake", color: 1 },
      { icon: "🆘", word: "Need", phrase: "I need help now", color: 2 },
      { icon: "⬆️", word: "Over", phrase: "Jump over it", color: 3 },
      { icon: "🌊", word: "Wave", phrase: "Wave your hand", color: 4 },
      { icon: "❌", word: "Stop", phrase: "Stop right now", color: 5 },
      { icon: "📚", word: "Book", phrase: "Read a book", color: 6 },
      { icon: "💬", word: "Said", phrase: "He said hello", color: 6 },
      { icon: "📢", word: "Tell", phrase: "Tell me a story", color: 1 },
    ]
  },
  {
    title: "🎉 You Did It! 100 Words! 🎉",
    pageNumber: 5,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400",
    words: [
      { icon: "👆", word: "Went", phrase: "He went away", color: 2 },
      { icon: "💪", word: "Wide", phrase: "A wide road", color: 3 },
      { icon: "🌊", word: "With", phrase: "Play with me", color: 4 },
      { icon: "📅", word: "Year", phrase: "Happy new year", color: 5 },
      { icon: "📍", word: "Zone", phrase: "A safe zone", color: 6 },
      { icon: "➕", word: "Also", phrase: "I also want it", color: 5 },
      { icon: "✅", word: "Been", phrase: "I have been there", color: 6 },
      { icon: "🚶", word: "Came", phrase: "He came to play", color: 1 },
      { icon: "✅", word: "Done", phrase: "All done now", color: 2 },
      { icon: "⚖️", word: "Even", phrase: "Even I can do", color: 3 },
      { icon: "📤", word: "From", phrase: "Come from home", color: 4 },
      { icon: "👋", word: "Gone", phrase: "He has gone", color: 4 },
      { icon: "📍", word: "Here", phrase: "Come over here", color: 5 },
      { icon: "🏫", word: "Show", phrase: "Show me how", color: 6 },
      { icon: "🎯", word: "That", phrase: "That is good", color: 1 },
      { icon: "🔑", word: "Kept", phrase: "I kept it safe", color: 2 },
      { icon: "📏", word: "Long", phrase: "A long time", color: 3 },
      { icon: "🎨", word: "Draw", phrase: "Draw a picture", color: 3 },
      { icon: "➡️", word: "Next", phrase: "See you next time", color: 4 },
      { icon: "1️⃣", word: "Once", phrase: "Once upon a time", color: 5 },
      { icon: "📖", word: "Page", phrase: "Turn the page", color: 6 },
    ]
  }
];

// Book 4: Comic book style (4-letter words) - same data as book 3
export const book4Data: Page[] = book3Data;

// Book 5: Reading book with words less than 5 letters (1-4 letters)
export const book5Data: Page[] = [
  {
    title: "📖 Start Reading! 📖",
    pageNumber: 1,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-green-200 via-green-300 to-green-400",
    words: [
      { icon: "👤", word: "I", phrase: "I am happy", color: 1 },
      { icon: "🍎", word: "A", phrase: "A red apple", color: 2 },
      { icon: "📍", word: "At", phrase: "At the park", color: 3 },
      { icon: "🎯", word: "It", phrase: "It is fun", color: 4 },
      { icon: "✅", word: "Is", phrase: "Is it good", color: 5 },
      { icon: "👥", word: "We", phrase: "We can play", color: 6 },
      { icon: "👤", word: "Me", phrase: "Give it to me", color: 1 },
      { icon: "🚶", word: "Go", phrase: "Go to school", color: 2 },
      { icon: "⬆️", word: "Up", phrase: "Look up high", color: 3 },
      { icon: "🔛", word: "On", phrase: "Sit on chair", color: 4 },
      { icon: "📥", word: "In", phrase: "Come in now", color: 5 },
      { icon: "➡️", word: "To", phrase: "Go to home", color: 6 },
      { icon: "🐝", word: "Be", phrase: "Be a good kid", color: 1 },
      { icon: "✅", word: "Do", phrase: "Do your work", color: 2 },
      { icon: "❤️", word: "My", phrase: "My favorite toy", color: 3 },
      { icon: "👨", word: "He", phrase: "He is my friend", color: 4 },
      { icon: "👍", word: "So", phrase: "So much fun", color: 5 },
      { icon: "❌", word: "No", phrase: "No thank you", color: 6 },
      { icon: "👋", word: "Hi", phrase: "Hi there friend", color: 1 },
      { icon: "👌", word: "Ok", phrase: "Ok let us go", color: 2 },
    ]
  },
  {
    title: "🌟 Keep Reading! 🌟",
    pageNumber: 2,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400",
    words: [
      { icon: "✅", word: "Am", phrase: "I am here", color: 3 },
      { icon: "🍎", word: "An", phrase: "An apple a day", color: 4 },
      { icon: "🐱", word: "Cat", phrase: "A cat meows", color: 5 },
      { icon: "🐶", word: "Dog", phrase: "A dog barks", color: 6 },
      { icon: "☀️", word: "Sun", phrase: "The sun shines", color: 1 },
      { icon: "🏃", word: "Run", phrase: "Run very fast", color: 2 },
      { icon: "🛏️", word: "Bed", phrase: "Go to bed now", color: 3 },
      { icon: "🚗", word: "Car", phrase: "A red car", color: 4 },
      { icon: "👦", word: "Boy", phrase: "A good boy", color: 5 },
      { icon: "🧸", word: "Toy", phrase: "My favorite toy", color: 6 },
      { icon: "🎉", word: "Fun", phrase: "Have some fun", color: 1 },
      { icon: "🐘", word: "Big", phrase: "A big elephant", color: 2 },
      { icon: "🎩", word: "Hat", phrase: "Wear your hat", color: 3 },
      { icon: "🐷", word: "Pig", phrase: "A pink pig", color: 4 },
      { icon: "🔴", word: "Red", phrase: "Red is nice", color: 5 },
      { icon: "✅", word: "Yes", phrase: "Yes I can do", color: 6 },
      { icon: "🪑", word: "Sit", phrase: "Sit down please", color: 1 },
      { icon: "🐰", word: "Hop", phrase: "Hop like bunny", color: 2 },
      { icon: "🦇", word: "Bat", phrase: "A bat flies", color: 3 },
      { icon: "☕", word: "Cup", phrase: "A cup of milk", color: 4 },
    ]
  },
  {
    title: "📚 Reading is Fun! 📚",
    pageNumber: 3,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
    words: [
      { icon: "📦", word: "Box", phrase: "A big box", color: 5 },
      { icon: "🔝", word: "Top", phrase: "On the top", color: 6 },
      { icon: "👩", word: "Mom", phrase: "I love mom", color: 1 },
      { icon: "👨", word: "Dad", phrase: "Dad is great", color: 2 },
      { icon: "🍲", word: "Pot", phrase: "A cooking pot", color: 3 },
      { icon: "🍳", word: "Pan", phrase: "Fry in a pan", color: 4 },
      { icon: "🐛", word: "Bug", phrase: "A small bug", color: 5 },
      { icon: "🥫", word: "Can", phrase: "I can do it", color: 6 },
      { icon: "👜", word: "Bag", phrase: "A school bag", color: 1 },
      { icon: "🪵", word: "Log", phrase: "A wooden log", color: 2 },
      { icon: "🦊", word: "Fox", phrase: "A clever fox", color: 3 },
      { icon: "🐔", word: "Hen", phrase: "A brown hen", color: 4 },
      { icon: "🖊️", word: "Pen", phrase: "Write with pen", color: 5 },
      { icon: "🎾", word: "Net", phrase: "Catch in net", color: 6 },
      { icon: "✈️", word: "Jet", phrase: "A fast jet", color: 1 },
      { icon: "🗺️", word: "Map", phrase: "Look at map", color: 2 },
      { icon: "😴", word: "Nap", phrase: "Take a nap", color: 3 },
      { icon: "🧎", word: "Lap", phrase: "Sit on my lap", color: 4 },
      { icon: "🚐", word: "Van", phrase: "A big van", color: 5 },
      { icon: "🪭", word: "Fan", phrase: "Turn on fan", color: 6 },
    ]
  },
  {
    title: "🎯 You're Learning! 🎯",
    pageNumber: 4,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400",
    words: [
      { icon: "🍓", word: "Jam", phrase: "Strawberry jam", color: 1 },
      { icon: "🤐", word: "Zip", phrase: "Zip your bag", color: 2 },
      { icon: "🦵", word: "Leg", phrase: "Stand on leg", color: 3 },
      { icon: "📍", word: "Peg", phrase: "Hang on peg", color: 4 },
      { icon: "🕸️", word: "Web", phrase: "A spider web", color: 5 },
      { icon: "💇", word: "Wig", phrase: "A funny wig", color: 6 },
      { icon: "🏃‍♂️", word: "Jog", phrase: "Jog in park", color: 1 },
      { icon: "⛏️", word: "Dig", phrase: "Dig a hole", color: 2 },
      { icon: "🤗", word: "Hug", phrase: "Give a hug", color: 3 },
      { icon: "🍺", word: "Mug", phrase: "A coffee mug", color: 4 },
      { icon: "🧶", word: "Rug", phrase: "A soft rug", color: 5 },
      { icon: "🚢", word: "Tug", phrase: "Tug the rope", color: 6 },
      { icon: "🍔", word: "Bun", phrase: "A tasty bun", color: 1 },
      { icon: "🏆", word: "Win", phrase: "I want to win", color: 2 },
      { icon: "🐟", word: "Fin", phrase: "A fish fin", color: 3 },
      { icon: "📌", word: "Pin", phrase: "A safety pin", color: 4 },
      { icon: "🔟", word: "Ten", phrase: "Count to ten", color: 5 },
      { icon: "🔥", word: "Hot", phrase: "It is hot", color: 6 },
      { icon: "✔️", word: "Got", phrase: "I got it", color: 1 },
      { icon: "⚫", word: "Dot", phrase: "A small dot", color: 2 },
    ]
  },
  {
    title: "🎉 Great Job Reading! 🎉",
    pageNumber: 5,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
    words: [
      { icon: "🅿️", word: "Lot", phrase: "A lot of toys", color: 3 },
      { icon: "🧘", word: "Mat", phrase: "Sit on mat", color: 4 },
      { icon: "🐦", word: "Bird", phrase: "A bird flies", color: 5 },
      { icon: "🎂", word: "Cake", phrase: "A birthday cake", color: 6 },
      { icon: "🚪", word: "Door", phrase: "Open the door", color: 1 },
      { icon: "🐟", word: "Fish", phrase: "A fish swims", color: 2 },
      { icon: "🎮", word: "Game", phrase: "Play a game", color: 3 },
      { icon: "✋", word: "Hand", phrase: "Raise your hand", color: 4 },
      { icon: "🦘", word: "Jump", phrase: "Jump up high", color: 5 },
      { icon: "🪁", word: "Kite", phrase: "Fly a kite", color: 6 },
      { icon: "🦁", word: "Lion", phrase: "A big lion", color: 1 },
      { icon: "🥛", word: "Milk", phrase: "Drink some milk", color: 2 },
      { icon: "🐦", word: "Nest", phrase: "A bird nest", color: 3 },
      { icon: "🔓", word: "Open", phrase: "Open the box", color: 4 },
      { icon: "🎮", word: "Play", phrase: "Let us play", color: 5 },
      { icon: "🌧️", word: "Rain", phrase: "It is raining", color: 6 },
      { icon: "⭐", word: "Star", phrase: "A bright star", color: 1 },
      { icon: "🌳", word: "Tree", phrase: "A tall tree", color: 2 },
      { icon: "🚶", word: "Walk", phrase: "Walk to school", color: 3 },
      { icon: "🏡", word: "Yard", phrase: "Play in yard", color: 4 },
    ]
  }
];

// Book 6: Test book with preview words
export const book6Data: Page[] = [
  {
    title: "📚 Preview Words - Study First! 📚",
    pageNumber: 1,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400",
    words: [
      { icon: "🐱", word: "Cat", phrase: "A cat meows", color: 1 },
      { icon: "🐶", word: "Dog", phrase: "A dog barks", color: 2 },
      { icon: "☀️", word: "Sun", phrase: "The sun shines", color: 3 },
      { icon: "🏃", word: "Run", phrase: "Run very fast", color: 4 },
      { icon: "🛏️", word: "Bed", phrase: "Go to bed now", color: 5 },
      { icon: "🚗", word: "Car", phrase: "A red car", color: 6 },
      { icon: "👦", word: "Boy", phrase: "A good boy", color: 1 },
      { icon: "🧸", word: "Toy", phrase: "My favorite toy", color: 2 },
      { icon: "🎉", word: "Fun", phrase: "Have some fun", color: 3 },
      { icon: "🐘", word: "Big", phrase: "A big elephant", color: 4 },
      { icon: "🎩", word: "Hat", phrase: "Wear your hat", color: 5 },
      { icon: "🐷", word: "Pig", phrase: "A pink pig", color: 6 },
      { icon: "🐦", word: "Bird", phrase: "A bird flies", color: 1 },
      { icon: "🎂", word: "Cake", phrase: "A birthday cake", color: 2 },
      { icon: "🚪", word: "Door", phrase: "Open the door", color: 3 },
      { icon: "🐟", word: "Fish", phrase: "A fish swims", color: 4 },
      { icon: "🎮", word: "Game", phrase: "Play a game", color: 5 },
      { icon: "✋", word: "Hand", phrase: "Raise your hand", color: 6 },
      { icon: "🦘", word: "Jump", phrase: "Jump up high", color: 1 },
      { icon: "🪁", word: "Kite", phrase: "Fly a kite", color: 2 },
    ]
  },
  {
    title: "📚 More Words to Study 📚",
    pageNumber: 2,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-teal-200 via-teal-300 to-teal-400",
    words: [
      { icon: "🦁", word: "Lion", phrase: "A big lion", color: 3 },
      { icon: "🥛", word: "Milk", phrase: "Drink some milk", color: 4 },
      { icon: "🐦", word: "Nest", phrase: "A bird nest", color: 5 },
      { icon: "🔓", word: "Open", phrase: "Open the box", color: 6 },
      { icon: "🎮", word: "Play", phrase: "Let us play", color: 1 },
      { icon: "🌧️", word: "Rain", phrase: "It is raining", color: 2 },
      { icon: "⭐", word: "Star", phrase: "A bright star", color: 3 },
      { icon: "🌳", word: "Tree", phrase: "A tall tree", color: 4 },
      { icon: "🚶", word: "Walk", phrase: "Walk to school", color: 5 },
      { icon: "🏡", word: "Yard", phrase: "Play in yard", color: 6 },
      { icon: "👩", word: "Mom", phrase: "I love mom", color: 1 },
      { icon: "👨", word: "Dad", phrase: "Dad is great", color: 2 },
      { icon: "🍲", word: "Pot", phrase: "A cooking pot", color: 3 },
      { icon: "🍳", word: "Pan", phrase: "Fry in a pan", color: 4 },
      { icon: "🐛", word: "Bug", phrase: "A small bug", color: 5 },
      { icon: "🥫", word: "Can", phrase: "I can do it", color: 6 },
      { icon: "👜", word: "Bag", phrase: "A school bag", color: 1 },
      { icon: "🪵", word: "Log", phrase: "A wooden log", color: 2 },
      { icon: "🦊", word: "Fox", phrase: "A clever fox", color: 3 },
      { icon: "🐔", word: "Hen", phrase: "A brown hen", color: 4 },
    ]
  },
  {
    title: "📚 Final Preview Words 📚",
    pageNumber: 3,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400",
    words: [
      { icon: "🖊️", word: "Pen", phrase: "Write with pen", color: 5 },
      { icon: "🎾", word: "Net", phrase: "Catch in net", color: 6 },
      { icon: "✈️", word: "Jet", phrase: "A fast jet", color: 1 },
      { icon: "🗺️", word: "Map", phrase: "Look at map", color: 2 },
      { icon: "😴", word: "Nap", phrase: "Take a nap", color: 3 },
      { icon: "🧎", word: "Lap", phrase: "Sit on my lap", color: 4 },
      { icon: "🚐", word: "Van", phrase: "A big van", color: 5 },
      { icon: "🪭", word: "Fan", phrase: "Turn on fan", color: 6 },
      { icon: "🍓", word: "Jam", phrase: "Strawberry jam", color: 1 },
      { icon: "🤐", word: "Zip", phrase: "Zip your bag", color: 2 },
      { icon: "🦵", word: "Leg", phrase: "Stand on leg", color: 3 },
      { icon: "📍", word: "Peg", phrase: "Hang on peg", color: 4 },
      { icon: "🕸️", word: "Web", phrase: "A spider web", color: 5 },
      { icon: "💇", word: "Wig", phrase: "A funny wig", color: 6 },
      { icon: "🏃‍♂️", word: "Jog", phrase: "Jog in park", color: 1 },
      { icon: "⛏️", word: "Dig", phrase: "Dig a hole", color: 2 },
      { icon: "🤗", word: "Hug", phrase: "Give a hug", color: 3 },
      { icon: "🍺", word: "Mug", phrase: "A coffee mug", color: 4 },
      { icon: "🧶", word: "Rug", phrase: "A soft rug", color: 5 },
      { icon: "🚢", word: "Tug", phrase: "Tug the rope", color: 6 },
    ]
  }
];

// Book 7: Fill in the blanks
export interface FillBlank {
  icon: string;
  sentence: string; // Sentence with ___ as blank
  correctWord: string;
  options: string[]; // 4 options including correct word
  color: number;
}

export interface FillBlankPage {
  title: string;
  pageNumber: number;
  totalPages: number;
  pageClass: string;
  blanks: FillBlank[];
}

export const book7Data: FillBlankPage[] = [
  {
    title: "✏️ Fill in the Blanks - Page 1 ✏️",
    pageNumber: 1,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400",
    blanks: [
      {
        icon: "🐱",
        sentence: "A ___ meows",
        correctWord: "cat",
        options: ["cat", "dog", "bird", "fish"],
        color: 1
      },
      {
        icon: "🐶",
        sentence: "A ___ barks",
        correctWord: "dog",
        options: ["cat", "dog", "pig", "cow"],
        color: 2
      },
      {
        icon: "☀️",
        sentence: "The ___ shines",
        correctWord: "sun",
        options: ["sun", "moon", "star", "sky"],
        color: 3
      },
      {
        icon: "🏃",
        sentence: "I can ___ fast",
        correctWord: "run",
        options: ["run", "walk", "jump", "sit"],
        color: 4
      },
      {
        icon: "🛏️",
        sentence: "Go to ___ now",
        correctWord: "bed",
        options: ["bed", "car", "park", "home"],
        color: 5
      },
      {
        icon: "🚗",
        sentence: "A red ___",
        correctWord: "car",
        options: ["car", "bus", "bike", "van"],
        color: 6
      },
      {
        icon: "👦",
        sentence: "A good ___",
        correctWord: "boy",
        options: ["boy", "girl", "kid", "baby"],
        color: 1
      },
      {
        icon: "🧸",
        sentence: "My favorite ___",
        correctWord: "toy",
        options: ["toy", "book", "game", "ball"],
        color: 2
      },
      {
        icon: "🎉",
        sentence: "Have some ___",
        correctWord: "fun",
        options: ["fun", "food", "rest", "play"],
        color: 3
      },
      {
        icon: "🐘",
        sentence: "A ___ elephant",
        correctWord: "big",
        options: ["big", "small", "tall", "fat"],
        color: 4
      },
      {
        icon: "🎩",
        sentence: "Wear your ___",
        correctWord: "hat",
        options: ["hat", "cap", "shoes", "shirt"],
        color: 5
      },
      {
        icon: "🐷",
        sentence: "A pink ___",
        correctWord: "pig",
        options: ["pig", "cat", "dog", "cow"],
        color: 6
      },
      {
        icon: "🐦",
        sentence: "A ___ flies",
        correctWord: "bird",
        options: ["bird", "bee", "bat", "bug"],
        color: 1
      },
      {
        icon: "🎂",
        sentence: "A birthday ___",
        correctWord: "cake",
        options: ["cake", "gift", "card", "party"],
        color: 2
      },
      {
        icon: "🚪",
        sentence: "Open the ___",
        correctWord: "door",
        options: ["door", "box", "bag", "book"],
        color: 3
      },
      {
        icon: "🐟",
        sentence: "A ___ swims",
        correctWord: "fish",
        options: ["fish", "duck", "frog", "whale"],
        color: 4
      },
      {
        icon: "🎮",
        sentence: "Play a ___",
        correctWord: "game",
        options: ["game", "song", "toy", "ball"],
        color: 5
      },
      {
        icon: "✋",
        sentence: "Raise your ___",
        correctWord: "hand",
        options: ["hand", "arm", "head", "leg"],
        color: 6
      },
      {
        icon: "🦘",
        sentence: "___ up high",
        correctWord: "jump",
        options: ["jump", "run", "walk", "sit"],
        color: 1
      },
      {
        icon: "🪁",
        sentence: "Fly a ___",
        correctWord: "kite",
        options: ["kite", "plane", "bird", "balloon"],
        color: 2
      }
    ]
  },
  {
    title: "✏️ Fill in the Blanks - Page 2 ✏️",
    pageNumber: 2,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-cyan-200 via-cyan-300 to-cyan-400",
    blanks: [
      {
        icon: "🦁",
        sentence: "A big ___",
        correctWord: "lion",
        options: ["lion", "tiger", "bear", "wolf"],
        color: 3
      },
      {
        icon: "🥛",
        sentence: "Drink some ___",
        correctWord: "milk",
        options: ["milk", "juice", "water", "soda"],
        color: 4
      },
      {
        icon: "🐦",
        sentence: "A bird ___",
        correctWord: "nest",
        options: ["nest", "cage", "tree", "house"],
        color: 5
      },
      {
        icon: "🔓",
        sentence: "___ the box",
        correctWord: "open",
        options: ["open", "close", "find", "make"],
        color: 6
      },
      {
        icon: "🎮",
        sentence: "Let us ___",
        correctWord: "play",
        options: ["play", "work", "rest", "eat"],
        color: 1
      },
      {
        icon: "🌧️",
        sentence: "It is ___",
        correctWord: "raining",
        options: ["raining", "sunny", "windy", "cloudy"],
        color: 2
      },
      {
        icon: "⭐",
        sentence: "A bright ___",
        correctWord: "star",
        options: ["star", "sun", "moon", "light"],
        color: 3
      },
      {
        icon: "🌳",
        sentence: "A tall ___",
        correctWord: "tree",
        options: ["tree", "plant", "flower", "grass"],
        color: 4
      },
      {
        icon: "🚶",
        sentence: "___ to school",
        correctWord: "walk",
        options: ["walk", "run", "go", "come"],
        color: 5
      },
      {
        icon: "🏡",
        sentence: "Play in ___",
        correctWord: "yard",
        options: ["yard", "park", "house", "room"],
        color: 6
      },
      {
        icon: "👩",
        sentence: "I love ___",
        correctWord: "mom",
        options: ["mom", "dad", "baby", "kid"],
        color: 1
      },
      {
        icon: "👨",
        sentence: "___ is great",
        correctWord: "dad",
        options: ["dad", "mom", "boy", "man"],
        color: 2
      },
      {
        icon: "🍲",
        sentence: "A cooking ___",
        correctWord: "pot",
        options: ["pot", "pan", "bowl", "cup"],
        color: 3
      },
      {
        icon: "🍳",
        sentence: "Fry in a ___",
        correctWord: "pan",
        options: ["pan", "pot", "bowl", "plate"],
        color: 4
      },
      {
        icon: "🐛",
        sentence: "A small ___",
        correctWord: "bug",
        options: ["bug", "bird", "bee", "ant"],
        color: 5
      },
      {
        icon: "🥫",
        sentence: "I ___ do it",
        correctWord: "can",
        options: ["can", "will", "may", "must"],
        color: 6
      },
      {
        icon: "👜",
        sentence: "A school ___",
        correctWord: "bag",
        options: ["bag", "box", "book", "pen"],
        color: 1
      },
      {
        icon: "🪵",
        sentence: "A wooden ___",
        correctWord: "log",
        options: ["log", "stick", "tree", "wood"],
        color: 2
      },
      {
        icon: "🦊",
        sentence: "A clever ___",
        correctWord: "fox",
        options: ["fox", "dog", "cat", "wolf"],
        color: 3
      },
      {
        icon: "🐔",
        sentence: "A brown ___",
        correctWord: "hen",
        options: ["hen", "duck", "bird", "chick"],
        color: 4
      }
    ]
  },
  {
    title: "✏️ Fill in the Blanks - Page 3 ✏️",
    pageNumber: 3,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-emerald-200 via-emerald-300 to-emerald-400",
    blanks: [
      {
        icon: "🖊️",
        sentence: "Write with ___",
        correctWord: "pen",
        options: ["pen", "pencil", "marker", "crayon"],
        color: 5
      },
      {
        icon: "🎾",
        sentence: "Catch in ___",
        correctWord: "net",
        options: ["net", "bag", "box", "cup"],
        color: 6
      },
      {
        icon: "✈️",
        sentence: "A fast ___",
        correctWord: "jet",
        options: ["jet", "car", "bus", "train"],
        color: 1
      },
      {
        icon: "🗺️",
        sentence: "Look at ___",
        correctWord: "map",
        options: ["map", "book", "picture", "photo"],
        color: 2
      },
      {
        icon: "😴",
        sentence: "Take a ___",
        correctWord: "nap",
        options: ["nap", "rest", "walk", "bath"],
        color: 3
      },
      {
        icon: "🧎",
        sentence: "Sit on my ___",
        correctWord: "lap",
        options: ["lap", "bed", "chair", "floor"],
        color: 4
      },
      {
        icon: "🚐",
        sentence: "A big ___",
        correctWord: "van",
        options: ["van", "car", "bus", "truck"],
        color: 5
      },
      {
        icon: "🪭",
        sentence: "Turn on ___",
        correctWord: "fan",
        options: ["fan", "light", "tv", "radio"],
        color: 6
      },
      {
        icon: "🍓",
        sentence: "Strawberry ___",
        correctWord: "jam",
        options: ["jam", "jelly", "juice", "cake"],
        color: 1
      },
      {
        icon: "🤐",
        sentence: "___ your bag",
        correctWord: "zip",
        options: ["zip", "open", "close", "pack"],
        color: 2
      },
      {
        icon: "🦵",
        sentence: "Stand on ___",
        correctWord: "leg",
        options: ["leg", "foot", "hand", "head"],
        color: 3
      },
      {
        icon: "📍",
        sentence: "Hang on ___",
        correctWord: "peg",
        options: ["peg", "hook", "nail", "wall"],
        color: 4
      },
      {
        icon: "🕸️",
        sentence: "A spider ___",
        correctWord: "web",
        options: ["web", "net", "trap", "house"],
        color: 5
      },
      {
        icon: "💇",
        sentence: "A funny ___",
        correctWord: "wig",
        options: ["wig", "hat", "cap", "mask"],
        color: 6
      },
      {
        icon: "🏃‍♂️",
        sentence: "___ in park",
        correctWord: "jog",
        options: ["jog", "run", "walk", "play"],
        color: 1
      },
      {
        icon: "⛏️",
        sentence: "___ a hole",
        correctWord: "dig",
        options: ["dig", "make", "find", "fill"],
        color: 2
      },
      {
        icon: "🤗",
        sentence: "Give a ___",
        correctWord: "hug",
        options: ["hug", "kiss", "hand", "gift"],
        color: 3
      },
      {
        icon: "🍺",
        sentence: "A coffee ___",
        correctWord: "mug",
        options: ["mug", "cup", "bowl", "glass"],
        color: 4
      },
      {
        icon: "🧶",
        sentence: "A soft ___",
        correctWord: "rug",
        options: ["rug", "mat", "carpet", "blanket"],
        color: 5
      },
      {
        icon: "🚢",
        sentence: "___ the rope",
        correctWord: "tug",
        options: ["tug", "pull", "push", "tie"],
        color: 6
      }
    ]
  }
];

// Book 8: Fill the letter (spelling practice)
export interface FillLetter {
  icon: string;
  wordWithBlank: string; // Word with _ for missing letter(s), e.g., "C_T"
  correctWord: string; // Full word, e.g., "CAT"
  missingLetter: string; // The missing letter(s), e.g., "A"
  options: string[]; // Letter options including correct letter
  color: number;
}

export interface FillLetterPage {
  title: string;
  pageNumber: number;
  totalPages: number;
  pageClass: string;
  letters: FillLetter[];
}

export const book8Data: FillLetterPage[] = [
  {
    title: "🔤 Fill the Letter - Page 1 🔤",
    pageNumber: 1,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-violet-200 via-violet-300 to-violet-400",
    letters: [
      {
        icon: "🐱",
        wordWithBlank: "C_T",
        correctWord: "CAT",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 1
      },
      {
        icon: "🐶",
        wordWithBlank: "D_G",
        correctWord: "DOG",
        missingLetter: "O",
        options: ["O", "A", "E", "U"],
        color: 2
      },
      {
        icon: "☀️",
        wordWithBlank: "S_N",
        correctWord: "SUN",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 3
      },
      {
        icon: "🏃",
        wordWithBlank: "R_N",
        correctWord: "RUN",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 4
      },
      {
        icon: "🛏️",
        wordWithBlank: "B_D",
        correctWord: "BED",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 5
      },
      {
        icon: "🚗",
        wordWithBlank: "C_R",
        correctWord: "CAR",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 6
      },
      {
        icon: "👦",
        wordWithBlank: "B_Y",
        correctWord: "BOY",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 1
      },
      {
        icon: "🧸",
        wordWithBlank: "T_Y",
        correctWord: "TOY",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 2
      },
      {
        icon: "🎉",
        wordWithBlank: "F_N",
        correctWord: "FUN",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 3
      },
      {
        icon: "🐘",
        wordWithBlank: "B_G",
        correctWord: "BIG",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      },
      {
        icon: "🎩",
        wordWithBlank: "H_T",
        correctWord: "HAT",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 5
      },
      {
        icon: "🐷",
        wordWithBlank: "P_G",
        correctWord: "PIG",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 6
      },
      {
        icon: "🔴",
        wordWithBlank: "R_D",
        correctWord: "RED",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 1
      },
      {
        icon: "✅",
        wordWithBlank: "Y_S",
        correctWord: "YES",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 2
      },
      {
        icon: "🪑",
        wordWithBlank: "S_T",
        correctWord: "SIT",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 3
      },
      {
        icon: "🐰",
        wordWithBlank: "H_P",
        correctWord: "HOP",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 4
      },
      {
        icon: "🦇",
        wordWithBlank: "B_T",
        correctWord: "BAT",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 5
      },
      {
        icon: "☕",
        wordWithBlank: "C_P",
        correctWord: "CUP",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 6
      },
      {
        icon: "📦",
        wordWithBlank: "B_X",
        correctWord: "BOX",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 1
      },
      {
        icon: "🔝",
        wordWithBlank: "T_P",
        correctWord: "TOP",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 2
      }
    ]
  },
  {
    title: "🔤 Fill the Letter - Page 2 🔤",
    pageNumber: 2,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-fuchsia-200 via-fuchsia-300 to-fuchsia-400",
    letters: [
      {
        icon: "👩",
        wordWithBlank: "M_M",
        correctWord: "MOM",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 3
      },
      {
        icon: "👨",
        wordWithBlank: "D_D",
        correctWord: "DAD",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 4
      },
      {
        icon: "🍲",
        wordWithBlank: "P_T",
        correctWord: "POT",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 5
      },
      {
        icon: "🍳",
        wordWithBlank: "P_N",
        correctWord: "PAN",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 6
      },
      {
        icon: "🐛",
        wordWithBlank: "B_G",
        correctWord: "BUG",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 1
      },
      {
        icon: "🥫",
        wordWithBlank: "C_N",
        correctWord: "CAN",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 2
      },
      {
        icon: "👜",
        wordWithBlank: "B_G",
        correctWord: "BAG",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 3
      },
      {
        icon: "🪵",
        wordWithBlank: "L_G",
        correctWord: "LOG",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 4
      },
      {
        icon: "🦊",
        wordWithBlank: "F_X",
        correctWord: "FOX",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 5
      },
      {
        icon: "🐔",
        wordWithBlank: "H_N",
        correctWord: "HEN",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 6
      },
      {
        icon: "🖊️",
        wordWithBlank: "P_N",
        correctWord: "PEN",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 1
      },
      {
        icon: "🎾",
        wordWithBlank: "N_T",
        correctWord: "NET",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 2
      },
      {
        icon: "✈️",
        wordWithBlank: "J_T",
        correctWord: "JET",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 3
      },
      {
        icon: "🗺️",
        wordWithBlank: "M_P",
        correctWord: "MAP",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 4
      },
      {
        icon: "😴",
        wordWithBlank: "N_P",
        correctWord: "NAP",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 5
      },
      {
        icon: "🧎",
        wordWithBlank: "L_P",
        correctWord: "LAP",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 6
      },
      {
        icon: "🚐",
        wordWithBlank: "V_N",
        correctWord: "VAN",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 1
      },
      {
        icon: "🪭",
        wordWithBlank: "F_N",
        correctWord: "FAN",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 2
      },
      {
        icon: "🍓",
        wordWithBlank: "J_M",
        correctWord: "JAM",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 3
      },
      {
        icon: "🤐",
        wordWithBlank: "Z_P",
        correctWord: "ZIP",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      }
    ]
  },
  {
    title: "🔤 Fill the Letter - Page 3 🔤",
    pageNumber: 3,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400",
    letters: [
      {
        icon: "🦵",
        wordWithBlank: "L_G",
        correctWord: "LEG",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 5
      },
      {
        icon: "📍",
        wordWithBlank: "P_G",
        correctWord: "PEG",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 6
      },
      {
        icon: "🕸️",
        wordWithBlank: "W_B",
        correctWord: "WEB",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 1
      },
      {
        icon: "💇",
        wordWithBlank: "W_G",
        correctWord: "WIG",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 2
      },
      {
        icon: "🏃‍♂️",
        wordWithBlank: "J_G",
        correctWord: "JOG",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 3
      },
      {
        icon: "⛏️",
        wordWithBlank: "D_G",
        correctWord: "DIG",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      },
      {
        icon: "🤗",
        wordWithBlank: "H_G",
        correctWord: "HUG",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 5
      },
      {
        icon: "🍺",
        wordWithBlank: "M_G",
        correctWord: "MUG",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 6
      },
      {
        icon: "🧶",
        wordWithBlank: "R_G",
        correctWord: "RUG",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 1
      },
      {
        icon: "🚢",
        wordWithBlank: "T_G",
        correctWord: "TUG",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 2
      },
      {
        icon: "🍔",
        wordWithBlank: "B_N",
        correctWord: "BUN",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 3
      },
      {
        icon: "🏆",
        wordWithBlank: "W_N",
        correctWord: "WIN",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      },
      {
        icon: "🐟",
        wordWithBlank: "F_N",
        correctWord: "FIN",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 5
      },
      {
        icon: "📌",
        wordWithBlank: "P_N",
        correctWord: "PIN",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 6
      },
      {
        icon: "🔟",
        wordWithBlank: "T_N",
        correctWord: "TEN",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 1
      },
      {
        icon: "🔥",
        wordWithBlank: "H_T",
        correctWord: "HOT",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 2
      },
      {
        icon: "✔️",
        wordWithBlank: "G_T",
        correctWord: "GOT",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 3
      },
      {
        icon: "⚫",
        wordWithBlank: "D_T",
        correctWord: "DOT",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 4
      },
      {
        icon: "🅿️",
        wordWithBlank: "L_T",
        correctWord: "LOT",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 5
      },
      {
        icon: "🧘",
        wordWithBlank: "M_T",
        correctWord: "MAT",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 6
      }
    ]
  }
];

// Book 9: Fill in the blanks for 4-letter words
export const book9Data: FillBlankPage[] = [
  {
    title: "✏️ 4-Letter Words - Fill in the Blanks ✏️",
    pageNumber: 1,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-lime-200 via-lime-300 to-lime-400",
    blanks: [
      {
        icon: "🐦",
        sentence: "A ___ flies",
        correctWord: "bird",
        options: ["bird", "duck", "eagle", "swan"],
        color: 1
      },
      {
        icon: "🎂",
        sentence: "A birthday ___",
        correctWord: "cake",
        options: ["cake", "gift", "card", "party"],
        color: 2
      },
      {
        icon: "🚪",
        sentence: "Open the ___",
        correctWord: "door",
        options: ["door", "gate", "window", "box"],
        color: 3
      },
      {
        icon: "🐟",
        sentence: "A ___ swims",
        correctWord: "fish",
        options: ["fish", "duck", "frog", "whale"],
        color: 4
      },
      {
        icon: "🎮",
        sentence: "Play a ___",
        correctWord: "game",
        options: ["game", "song", "toy", "ball"],
        color: 5
      },
      {
        icon: "✋",
        sentence: "Raise your ___",
        correctWord: "hand",
        options: ["hand", "arm", "head", "leg"],
        color: 6
      },
      {
        icon: "🦘",
        sentence: "___ up high",
        correctWord: "jump",
        options: ["jump", "run", "walk", "sit"],
        color: 1
      },
      {
        icon: "🪁",
        sentence: "Fly a ___",
        correctWord: "kite",
        options: ["kite", "plane", "bird", "balloon"],
        color: 2
      },
      {
        icon: "🦁",
        sentence: "A big ___",
        correctWord: "lion",
        options: ["lion", "tiger", "bear", "wolf"],
        color: 3
      },
      {
        icon: "🥛",
        sentence: "Drink some ___",
        correctWord: "milk",
        options: ["milk", "juice", "water", "soda"],
        color: 4
      },
      {
        icon: "🐦",
        sentence: "A bird ___",
        correctWord: "nest",
        options: ["nest", "cage", "tree", "house"],
        color: 5
      },
      {
        icon: "🔓",
        sentence: "___ the box",
        correctWord: "open",
        options: ["open", "close", "find", "make"],
        color: 6
      },
      {
        icon: "🎮",
        sentence: "Let us ___",
        correctWord: "play",
        options: ["play", "work", "rest", "eat"],
        color: 1
      },
      {
        icon: "🌧️",
        sentence: "It is ___",
        correctWord: "raining",
        options: ["raining", "sunny", "windy", "cloudy"],
        color: 2
      },
      {
        icon: "⭐",
        sentence: "A bright ___",
        correctWord: "star",
        options: ["star", "sun", "moon", "light"],
        color: 3
      },
      {
        icon: "🌳",
        sentence: "A tall ___",
        correctWord: "tree",
        options: ["tree", "plant", "flower", "grass"],
        color: 4
      },
      {
        icon: "🚶",
        sentence: "___ to school",
        correctWord: "walk",
        options: ["walk", "run", "go", "come"],
        color: 5
      },
      {
        icon: "🏡",
        sentence: "Play in ___",
        correctWord: "yard",
        options: ["yard", "park", "house", "room"],
        color: 6
      },
      {
        icon: "🔵",
        sentence: "___ is nice",
        correctWord: "blue",
        options: ["blue", "red", "green", "yellow"],
        color: 1
      },
      {
        icon: "❄️",
        sentence: "It is ___",
        correctWord: "cold",
        options: ["cold", "hot", "warm", "cool"],
        color: 2
      }
    ]
  },
  {
    title: "✏️ More 4-Letter Words - Fill in the Blanks ✏️",
    pageNumber: 2,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
    blanks: [
      {
        icon: "🦆",
        sentence: "A ___ quacks",
        correctWord: "duck",
        options: ["duck", "bird", "goose", "swan"],
        color: 3
      },
      {
        icon: "🥚",
        sentence: "Two ___ please",
        correctWord: "eggs",
        options: ["eggs", "apples", "bananas", "oranges"],
        color: 4
      },
      {
        icon: "🚜",
        sentence: "Visit the ___",
        correctWord: "farm",
        options: ["farm", "park", "zoo", "store"],
        color: 5
      },
      {
        icon: "👧",
        sentence: "A happy ___",
        correctWord: "girl",
        options: ["girl", "boy", "kid", "baby"],
        color: 6
      },
      {
        icon: "🏠",
        sentence: "Go back ___",
        correctWord: "home",
        options: ["home", "house", "room", "yard"],
        color: 1
      },
      {
        icon: "💡",
        sentence: "A good ___",
        correctWord: "idea",
        options: ["idea", "plan", "thought", "dream"],
        color: 2
      },
      {
        icon: "🔑",
        sentence: "___ it safe",
        correctWord: "keep",
        options: ["keep", "hold", "save", "store"],
        color: 3
      },
      {
        icon: "🏞️",
        sentence: "Swim in ___",
        correctWord: "lake",
        options: ["lake", "pool", "ocean", "river"],
        color: 4
      },
      {
        icon: "🌙",
        sentence: "The ___ shines",
        correctWord: "moon",
        options: ["moon", "sun", "star", "light"],
        color: 5
      },
      {
        icon: "🏷️",
        sentence: "What is your ___",
        correctWord: "name",
        options: ["name", "age", "grade", "class"],
        color: 6
      },
      {
        icon: "🌳",
        sentence: "Play in ___",
        correctWord: "park",
        options: ["park", "yard", "house", "room"],
        color: 1
      },
      {
        icon: "❓",
        sentence: "Take a ___",
        correctWord: "quiz",
        options: ["quiz", "test", "exam", "game"],
        color: 2
      },
      {
        icon: "📖",
        sentence: "___ a book",
        correctWord: "read",
        options: ["read", "write", "draw", "paint"],
        color: 3
      },
      {
        icon: "🎤",
        sentence: "___ a song",
        correctWord: "sing",
        options: ["sing", "play", "dance", "jump"],
        color: 4
      },
      {
        icon: "⏰",
        sentence: "What ___ is it",
        correctWord: "time",
        options: ["time", "date", "day", "hour"],
        color: 5
      },
      {
        icon: "📦",
        sentence: "One ___ please",
        correctWord: "unit",
        options: ["unit", "piece", "part", "item"],
        color: 6
      },
      {
        icon: "✅",
        sentence: "___ good job",
        correctWord: "very",
        options: ["very", "so", "too", "much"],
        color: 1
      },
      {
        icon: "🔥",
        sentence: "It is ___",
        correctWord: "warm",
        options: ["warm", "hot", "cold", "cool"],
        color: 2
      },
      {
        icon: "💨",
        sentence: "The ___ blows",
        correctWord: "wind",
        options: ["wind", "rain", "snow", "storm"],
        color: 3
      },
      {
        icon: "⭐",
        sentence: "Make a ___",
        correctWord: "wish",
        options: ["wish", "dream", "hope", "plan"],
        color: 4
      }
    ]
  },
  {
    title: "✏️ Final 4-Letter Words - Fill in the Blanks ✏️",
    pageNumber: 3,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
    blanks: [
      {
        icon: "👶",
        sentence: "A cute ___",
        correctWord: "baby",
        options: ["baby", "child", "kid", "toddler"],
        color: 5
      },
      {
        icon: "🪑",
        sentence: "Sit at ___",
        correctWord: "desk",
        options: ["desk", "table", "chair", "bench"],
        color: 6
      },
      {
        icon: "😊",
        sentence: "It is ___",
        correctWord: "easy",
        options: ["easy", "hard", "fun", "good"],
        color: 1
      },
      {
        icon: "😀",
        sentence: "A happy ___",
        correctWord: "face",
        options: ["face", "smile", "look", "eye"],
        color: 2
      },
      {
        icon: "👍",
        sentence: "___ job done",
        correctWord: "good",
        options: ["good", "nice", "great", "fine"],
        color: 3
      },
      {
        icon: "🆘",
        sentence: "I need ___",
        correctWord: "help",
        options: ["help", "rest", "food", "water"],
        color: 4
      },
      {
        icon: "➡️",
        sentence: "Go ___ room",
        correctWord: "into",
        options: ["into", "onto", "over", "under"],
        color: 5
      },
      {
        icon: "⚖️",
        sentence: "___ do it",
        correctWord: "just",
        options: ["just", "only", "also", "even"],
        color: 6
      },
      {
        icon: "❤️",
        sentence: "Be ___ always",
        correctWord: "kind",
        options: ["kind", "nice", "good", "sweet"],
        color: 1
      },
      {
        icon: "⬅️",
        sentence: "Turn to ___",
        correctWord: "left",
        options: ["left", "right", "back", "front"],
        color: 2
      },
      {
        icon: "🔢",
        sentence: "___ toys here",
        correctWord: "many",
        options: ["many", "some", "few", "lots"],
        color: 3
      },
      {
        icon: "✨",
        sentence: "Have a ___ day",
        correctWord: "nice",
        options: ["nice", "good", "great", "fine"],
        color: 4
      },
      {
        icon: "1️⃣",
        sentence: "___ one left",
        correctWord: "only",
        options: ["only", "just", "also", "even"],
        color: 5
      },
      {
        icon: "🧩",
        sentence: "___ of whole",
        correctWord: "part",
        options: ["part", "piece", "bit", "some"],
        color: 6
      },
      {
        icon: "🛑",
        sentence: "Do not ___",
        correctWord: "quit",
        options: ["quit", "stop", "end", "finish"],
        color: 1
      },
      {
        icon: "😴",
        sentence: "Take a ___",
        correctWord: "rest",
        options: ["rest", "nap", "break", "pause"],
        color: 2
      },
      {
        icon: "👥",
        sentence: "___ of them",
        correctWord: "some",
        options: ["some", "many", "few", "all"],
        color: 3
      },
      {
        icon: "✋",
        sentence: "___ your time",
        correctWord: "take",
        options: ["take", "give", "make", "have"],
        color: 4
      },
      {
        icon: "👆",
        sentence: "___ the table",
        correctWord: "upon",
        options: ["upon", "over", "under", "above"],
        color: 5
      },
      {
        icon: "👀",
        sentence: "A nice ___",
        correctWord: "view",
        options: ["view", "sight", "scene", "look"],
        color: 6
      }
    ]
  }
];

// Book 10: Fill the letter for 4-letter words
export const book10Data: FillLetterPage[] = [
  {
    title: "🔤 4-Letter Words - Fill the Letter 🔤",
    pageNumber: 1,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400",
    letters: [
      {
        icon: "🐦",
        wordWithBlank: "B_RD",
        correctWord: "BIRD",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 1
      },
      {
        icon: "🎂",
        wordWithBlank: "C_KE",
        correctWord: "CAKE",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 2
      },
      {
        icon: "🚪",
        wordWithBlank: "D_OR",
        correctWord: "DOOR",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 3
      },
      {
        icon: "🐟",
        wordWithBlank: "F_SH",
        correctWord: "FISH",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      },
      {
        icon: "🎮",
        wordWithBlank: "G_ME",
        correctWord: "GAME",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 5
      },
      {
        icon: "✋",
        wordWithBlank: "H_ND",
        correctWord: "HAND",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 6
      },
      {
        icon: "🦘",
        wordWithBlank: "J_MP",
        correctWord: "JUMP",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 1
      },
      {
        icon: "🪁",
        wordWithBlank: "K_TE",
        correctWord: "KITE",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 2
      },
      {
        icon: "🦁",
        wordWithBlank: "L_ON",
        correctWord: "LION",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 3
      },
      {
        icon: "🥛",
        wordWithBlank: "M_LK",
        correctWord: "MILK",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      },
      {
        icon: "🐦",
        wordWithBlank: "N_ST",
        correctWord: "NEST",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 5
      },
      {
        icon: "🔓",
        wordWithBlank: "O_EN",
        correctWord: "OPEN",
        missingLetter: "P",
        options: ["P", "B", "D", "T"],
        color: 6
      },
      {
        icon: "🎮",
        wordWithBlank: "P_AY",
        correctWord: "PLAY",
        missingLetter: "L",
        options: ["L", "R", "T", "S"],
        color: 1
      },
      {
        icon: "🌧️",
        wordWithBlank: "R_IN",
        correctWord: "RAIN",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 2
      },
      {
        icon: "⭐",
        wordWithBlank: "S_AR",
        correctWord: "STAR",
        missingLetter: "T",
        options: ["T", "P", "B", "D"],
        color: 3
      },
      {
        icon: "🌳",
        wordWithBlank: "T_EE",
        correctWord: "TREE",
        missingLetter: "R",
        options: ["R", "L", "N", "M"],
        color: 4
      },
      {
        icon: "🚶",
        wordWithBlank: "W_LK",
        correctWord: "WALK",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 5
      },
      {
        icon: "🏡",
        wordWithBlank: "Y_RD",
        correctWord: "YARD",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 6
      },
      {
        icon: "🔵",
        wordWithBlank: "B_UE",
        correctWord: "BLUE",
        missingLetter: "L",
        options: ["L", "R", "N", "M"],
        color: 1
      },
      {
        icon: "❄️",
        wordWithBlank: "C_LD",
        correctWord: "COLD",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 2
      }
    ]
  },
  {
    title: "🔤 More 4-Letter Words - Fill the Letter 🔤",
    pageNumber: 2,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-teal-200 via-teal-300 to-teal-400",
    letters: [
      {
        icon: "🦆",
        wordWithBlank: "D_CK",
        correctWord: "DUCK",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 3
      },
      {
        icon: "🥚",
        wordWithBlank: "E_GS",
        correctWord: "EGGS",
        missingLetter: "G",
        options: ["G", "B", "D", "T"],
        color: 4
      },
      {
        icon: "🚜",
        wordWithBlank: "F_RM",
        correctWord: "FARM",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 5
      },
      {
        icon: "👧",
        wordWithBlank: "G_RL",
        correctWord: "GIRL",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 6
      },
      {
        icon: "🏠",
        wordWithBlank: "H_ME",
        correctWord: "HOME",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 1
      },
      {
        icon: "💡",
        wordWithBlank: "I_EA",
        correctWord: "IDEA",
        missingLetter: "D",
        options: ["D", "B", "P", "T"],
        color: 2
      },
      {
        icon: "🔑",
        wordWithBlank: "K_EP",
        correctWord: "KEEP",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 3
      },
      {
        icon: "🏞️",
        wordWithBlank: "L_KE",
        correctWord: "LAKE",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 4
      },
      {
        icon: "🌙",
        wordWithBlank: "M_ON",
        correctWord: "MOON",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 5
      },
      {
        icon: "🏷️",
        wordWithBlank: "N_ME",
        correctWord: "NAME",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 6
      },
      {
        icon: "🌳",
        wordWithBlank: "P_RK",
        correctWord: "PARK",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 1
      },
      {
        icon: "❓",
        wordWithBlank: "Q_IZ",
        correctWord: "QUIZ",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 2
      },
      {
        icon: "📖",
        wordWithBlank: "R_AD",
        correctWord: "READ",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 3
      },
      {
        icon: "🎤",
        wordWithBlank: "S_NG",
        correctWord: "SING",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      },
      {
        icon: "⏰",
        wordWithBlank: "T_ME",
        correctWord: "TIME",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 5
      },
      {
        icon: "📦",
        wordWithBlank: "U_IT",
        correctWord: "UNIT",
        missingLetter: "N",
        options: ["N", "M", "L", "R"],
        color: 6
      },
      {
        icon: "✅",
        wordWithBlank: "V_RY",
        correctWord: "VERY",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 1
      },
      {
        icon: "🔥",
        wordWithBlank: "W_RM",
        correctWord: "WARM",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 2
      },
      {
        icon: "💨",
        wordWithBlank: "W_ND",
        correctWord: "WIND",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 3
      },
      {
        icon: "⭐",
        wordWithBlank: "W_SH",
        correctWord: "WISH",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      }
    ]
  },
  {
    title: "🔤 Final 4-Letter Words - Fill the Letter 🔤",
    pageNumber: 3,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400",
    letters: [
      {
        icon: "👶",
        wordWithBlank: "B_BY",
        correctWord: "BABY",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 5
      },
      {
        icon: "🪑",
        wordWithBlank: "D_SK",
        correctWord: "DESK",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 6
      },
      {
        icon: "😊",
        wordWithBlank: "E_SY",
        correctWord: "EASY",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 1
      },
      {
        icon: "😀",
        wordWithBlank: "F_CE",
        correctWord: "FACE",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 2
      },
      {
        icon: "👍",
        wordWithBlank: "G_OD",
        correctWord: "GOOD",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 3
      },
      {
        icon: "🆘",
        wordWithBlank: "H_LP",
        correctWord: "HELP",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 4
      },
      {
        icon: "➡️",
        wordWithBlank: "I_TO",
        correctWord: "INTO",
        missingLetter: "N",
        options: ["N", "M", "L", "R"],
        color: 5
      },
      {
        icon: "⚖️",
        wordWithBlank: "J_ST",
        correctWord: "JUST",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 6
      },
      {
        icon: "❤️",
        wordWithBlank: "K_ND",
        correctWord: "KIND",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 1
      },
      {
        icon: "⬅️",
        wordWithBlank: "L_FT",
        correctWord: "LEFT",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 2
      },
      {
        icon: "🔢",
        wordWithBlank: "M_NY",
        correctWord: "MANY",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 3
      },
      {
        icon: "✨",
        wordWithBlank: "N_CE",
        correctWord: "NICE",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 4
      },
      {
        icon: "1️⃣",
        wordWithBlank: "O_LY",
        correctWord: "ONLY",
        missingLetter: "N",
        options: ["N", "M", "L", "R"],
        color: 5
      },
      {
        icon: "🧩",
        wordWithBlank: "P_RT",
        correctWord: "PART",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 6
      },
      {
        icon: "🛑",
        wordWithBlank: "Q_IT",
        correctWord: "QUIT",
        missingLetter: "U",
        options: ["U", "A", "E", "I"],
        color: 1
      },
      {
        icon: "😴",
        wordWithBlank: "R_ST",
        correctWord: "REST",
        missingLetter: "E",
        options: ["E", "A", "I", "O"],
        color: 2
      },
      {
        icon: "👥",
        wordWithBlank: "S_ME",
        correctWord: "SOME",
        missingLetter: "O",
        options: ["O", "A", "E", "I"],
        color: 3
      },
      {
        icon: "✋",
        wordWithBlank: "T_KE",
        correctWord: "TAKE",
        missingLetter: "A",
        options: ["A", "E", "I", "O"],
        color: 4
      },
      {
        icon: "👆",
        wordWithBlank: "U_ON",
        correctWord: "UPON",
        missingLetter: "P",
        options: ["P", "B", "D", "T"],
        color: 5
      },
      {
        icon: "👀",
        wordWithBlank: "V_EW",
        correctWord: "VIEW",
        missingLetter: "I",
        options: ["I", "A", "E", "O"],
        color: 6
      }
    ]
  }
];

