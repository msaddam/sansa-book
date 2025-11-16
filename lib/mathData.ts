export interface NumberItem {
  number: number;
  icon: string;
  color: number;
}

export interface MissingNumberItem {
  sequence: number[];
  missingIndex: number;
  icon: string;
  color: number;
}

export interface AdditionItem {
  num1: number;
  num2: number;
  answer: number;
  icon: string;
  color: number;
}

export interface SubjectItem {
  subject: string;
  icon: string;
  description: string;
  color: number;
}

export interface NumberPage {
  title: string;
  numbers: NumberItem[];
  pageNumber: number;
  totalPages: number;
  pageClass: string;
}

export interface MissingNumberPage {
  title: string;
  problems: MissingNumberItem[];
  pageNumber: number;
  totalPages: number;
  pageClass: string;
}

export interface AdditionPage {
  title: string;
  problems: AdditionItem[];
  pageNumber: number;
  totalPages: number;
  pageClass: string;
}

export interface SubjectPage {
  title: string;
  subjects: SubjectItem[];
  pageNumber: number;
  totalPages: number;
  pageClass: string;
}

// Numbers 1-100 Book
const numberIcons = ["🔢", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
const getNumberIcon = (num: number) => {
  if (num <= 10) return numberIcons[num] || "🔢";
  if (num <= 20) return "🔟";
  if (num <= 30) return "2️⃣0️⃣";
  if (num <= 40) return "3️⃣0️⃣";
  if (num <= 50) return "4️⃣0️⃣";
  if (num <= 60) return "5️⃣0️⃣";
  if (num <= 70) return "6️⃣0️⃣";
  if (num <= 80) return "7️⃣0️⃣";
  if (num <= 90) return "8️⃣0️⃣";
  return "9️⃣0️⃣";
};

export const numbers1to100Data: NumberPage[] = [];
for (let page = 0; page < 10; page++) {
  const startNum = page * 10 + 1;
  const endNum = Math.min((page + 1) * 10, 100);
  const numbers: NumberItem[] = [];
  
  for (let i = startNum; i <= endNum; i++) {
    numbers.push({
      number: i,
      icon: getNumberIcon(i),
      color: ((i - 1) % 6) + 1
    });
  }
  
  numbers1to100Data.push({
    title: `Numbers ${startNum} to ${endNum}`,
    numbers,
    pageNumber: page + 1,
    totalPages: 10,
    pageClass: page % 2 === 0 
      ? "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400"
      : "bg-gradient-to-br from-green-200 via-green-300 to-green-400"
  });
}

// Missing Numbers Book
export const missingNumbersData: MissingNumberPage[] = [
  {
    title: "Find the Missing Number! 🔍",
    pageNumber: 1,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400",
    problems: [
      { sequence: [1, 2, 3, 5, 6], missingIndex: 3, icon: "🔢", color: 1 },
      { sequence: [5, 6, 7, 9, 10], missingIndex: 3, icon: "🔢", color: 2 },
      { sequence: [10, 11, 13, 14, 15], missingIndex: 2, icon: "🔢", color: 3 },
      { sequence: [20, 21, 22, 24, 25], missingIndex: 3, icon: "🔢", color: 4 },
      { sequence: [15, 16, 18, 19, 20], missingIndex: 2, icon: "🔢", color: 5 },
      { sequence: [30, 31, 32, 34, 35], missingIndex: 3, icon: "🔢", color: 6 },
      { sequence: [40, 41, 43, 44, 45], missingIndex: 2, icon: "🔢", color: 1 },
      { sequence: [50, 52, 53, 54, 55], missingIndex: 1, icon: "🔢", color: 2 },
    ]
  },
  {
    title: "More Missing Numbers! 🎯",
    pageNumber: 2,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
    problems: [
      { sequence: [2, 4, 6, 8, 12], missingIndex: 4, icon: "🔢", color: 1 },
      { sequence: [5, 10, 15, 25, 30], missingIndex: 3, icon: "🔢", color: 2 },
      { sequence: [10, 20, 30, 50, 60], missingIndex: 3, icon: "🔢", color: 3 },
      { sequence: [3, 6, 9, 15, 18], missingIndex: 3, icon: "🔢", color: 4 },
      { sequence: [4, 8, 12, 20, 24], missingIndex: 3, icon: "🔢", color: 5 },
      { sequence: [7, 14, 21, 35, 42], missingIndex: 3, icon: "🔢", color: 6 },
      { sequence: [11, 22, 33, 55, 66], missingIndex: 3, icon: "🔢", color: 1 },
      { sequence: [9, 18, 27, 45, 54], missingIndex: 3, icon: "🔢", color: 2 },
    ]
  },
  {
    title: "Advanced Missing Numbers! 🚀",
    pageNumber: 3,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
    problems: [
      { sequence: [25, 30, 35, 45, 50], missingIndex: 3, icon: "🔢", color: 1 },
      { sequence: [40, 45, 50, 60, 65], missingIndex: 3, icon: "🔢", color: 2 },
      { sequence: [60, 65, 70, 80, 85], missingIndex: 3, icon: "🔢", color: 3 },
      { sequence: [70, 75, 80, 90, 95], missingIndex: 3, icon: "🔢", color: 4 },
      { sequence: [80, 85, 90, 100, 105], missingIndex: 3, icon: "🔢", color: 5 },
      { sequence: [12, 24, 36, 60, 72], missingIndex: 3, icon: "🔢", color: 6 },
      { sequence: [15, 30, 45, 75, 90], missingIndex: 3, icon: "🔢", color: 1 },
      { sequence: [20, 40, 60, 100, 120], missingIndex: 3, icon: "🔢", color: 2 },
    ]
  },
  {
    title: "Challenge Missing Numbers! 💪",
    pageNumber: 4,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
    problems: [
      { sequence: [1, 3, 5, 9, 11], missingIndex: 3, icon: "🔢", color: 1 },
      { sequence: [2, 5, 8, 14, 17], missingIndex: 3, icon: "🔢", color: 2 },
      { sequence: [10, 13, 16, 22, 25], missingIndex: 3, icon: "🔢", color: 3 },
      { sequence: [20, 23, 26, 32, 35], missingIndex: 3, icon: "🔢", color: 4 },
      { sequence: [30, 33, 36, 42, 45], missingIndex: 3, icon: "🔢", color: 5 },
      { sequence: [50, 53, 56, 62, 65], missingIndex: 3, icon: "🔢", color: 6 },
      { sequence: [100, 95, 90, 80, 75], missingIndex: 3, icon: "🔢", color: 1 },
      { sequence: [90, 85, 80, 70, 65], missingIndex: 3, icon: "🔢", color: 2 },
    ]
  },
  {
    title: "Final Missing Numbers! 🏆",
    pageNumber: 5,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-cyan-200 via-cyan-300 to-cyan-400",
    problems: [
      { sequence: [1, 4, 7, 13, 16], missingIndex: 3, icon: "🔢", color: 1 },
      { sequence: [5, 9, 13, 21, 25], missingIndex: 3, icon: "🔢", color: 2 },
      { sequence: [10, 15, 20, 30, 35], missingIndex: 3, icon: "🔢", color: 3 },
      { sequence: [25, 30, 35, 45, 50], missingIndex: 3, icon: "🔢", color: 4 },
      { sequence: [50, 55, 60, 70, 75], missingIndex: 3, icon: "🔢", color: 5 },
      { sequence: [75, 80, 85, 95, 100], missingIndex: 3, icon: "🔢", color: 6 },
      { sequence: [100, 90, 80, 60, 50], missingIndex: 3, icon: "🔢", color: 1 },
      { sequence: [50, 40, 30, 10, 0], missingIndex: 3, icon: "🔢", color: 2 },
    ]
  }
];

// Addition Book
export const additionData: AdditionPage[] = [
  {
    title: "Simple Addition! ➕",
    pageNumber: 1,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-green-200 via-green-300 to-green-400",
    problems: [
      { num1: 1, num2: 1, answer: 2, icon: "➕", color: 1 },
      { num1: 2, num2: 2, answer: 4, icon: "➕", color: 2 },
      { num1: 3, num2: 1, answer: 4, icon: "➕", color: 3 },
      { num1: 2, num2: 3, answer: 5, icon: "➕", color: 4 },
      { num1: 4, num2: 1, answer: 5, icon: "➕", color: 5 },
      { num1: 3, num2: 3, answer: 6, icon: "➕", color: 6 },
      { num1: 5, num2: 1, answer: 6, icon: "➕", color: 1 },
      { num1: 4, num2: 2, answer: 6, icon: "➕", color: 2 },
    ]
  },
  {
    title: "More Addition! 🎯",
    pageNumber: 2,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400",
    problems: [
      { num1: 5, num2: 5, answer: 10, icon: "➕", color: 1 },
      { num1: 6, num2: 4, answer: 10, icon: "➕", color: 2 },
      { num1: 7, num2: 3, answer: 10, icon: "➕", color: 3 },
      { num1: 8, num2: 2, answer: 10, icon: "➕", color: 4 },
      { num1: 9, num2: 1, answer: 10, icon: "➕", color: 5 },
      { num1: 4, num2: 6, answer: 10, icon: "➕", color: 6 },
      { num1: 3, num2: 7, answer: 10, icon: "➕", color: 1 },
      { num1: 2, num2: 8, answer: 10, icon: "➕", color: 2 },
    ]
  },
  {
    title: "Bigger Numbers! 🚀",
    pageNumber: 3,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
    problems: [
      { num1: 10, num2: 5, answer: 15, icon: "➕", color: 1 },
      { num1: 12, num2: 8, answer: 20, icon: "➕", color: 2 },
      { num1: 15, num2: 5, answer: 20, icon: "➕", color: 3 },
      { num1: 18, num2: 2, answer: 20, icon: "➕", color: 4 },
      { num1: 20, num2: 10, answer: 30, icon: "➕", color: 5 },
      { num1: 25, num2: 5, answer: 30, icon: "➕", color: 6 },
      { num1: 30, num2: 10, answer: 40, icon: "➕", color: 1 },
      { num1: 35, num2: 5, answer: 40, icon: "➕", color: 2 },
    ]
  },
  {
    title: "Advanced Addition! 💪",
    pageNumber: 4,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
    problems: [
      { num1: 40, num2: 20, answer: 60, icon: "➕", color: 1 },
      { num1: 50, num2: 30, answer: 80, icon: "➕", color: 2 },
      { num1: 60, num2: 40, answer: 100, icon: "➕", color: 3 },
      { num1: 25, num2: 25, answer: 50, icon: "➕", color: 4 },
      { num1: 45, num2: 15, answer: 60, icon: "➕", color: 5 },
      { num1: 55, num2: 25, answer: 80, icon: "➕", color: 6 },
      { num1: 35, num2: 35, answer: 70, icon: "➕", color: 1 },
      { num1: 75, num2: 25, answer: 100, icon: "➕", color: 2 },
    ]
  },
  {
    title: "Master Addition! 🏆",
    pageNumber: 5,
    totalPages: 5,
    pageClass: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
    problems: [
      { num1: 11, num2: 9, answer: 20, icon: "➕", color: 1 },
      { num1: 13, num2: 7, answer: 20, icon: "➕", color: 2 },
      { num1: 16, num2: 4, answer: 20, icon: "➕", color: 3 },
      { num1: 19, num2: 1, answer: 20, icon: "➕", color: 4 },
      { num1: 22, num2: 8, answer: 30, icon: "➕", color: 5 },
      { num1: 27, num2: 3, answer: 30, icon: "➕", color: 6 },
      { num1: 33, num2: 7, answer: 40, icon: "➕", color: 1 },
      { num1: 48, num2: 2, answer: 50, icon: "➕", color: 2 },
    ]
  }
];

// Subjects Book - Alphabet Letters
export const subjectsData: SubjectPage[] = [
  {
    title: "Alphabet Letters! 🔤",
    pageNumber: 1,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400",
    subjects: [
      { subject: "k", icon: "🔤", description: "Letter k", color: 1 },
      { subject: "kh", icon: "🔤", description: "Letter kh", color: 2 },
      { subject: "g", icon: "🔤", description: "Letter g", color: 3 },
      { subject: "gh", icon: "🔤", description: "Letter gh", color: 4 },
      { subject: "ng", icon: "🔤", description: "Letter ng", color: 5 },
      { subject: "c", icon: "🔤", description: "Letter c", color: 6 },
      { subject: "ch", icon: "🔤", description: "Letter ch", color: 1 },
      { subject: "j", icon: "🔤", description: "Letter j", color: 2 },
    ]
  },
  {
    title: "More Letters! 🌟",
    pageNumber: 2,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-teal-200 via-teal-300 to-teal-400",
    subjects: [
      { subject: "jh", icon: "🔤", description: "Letter jh", color: 1 },
      { subject: "ny", icon: "🔤", description: "Letter ny", color: 2 },
      { subject: "t", icon: "🔤", description: "Letter t", color: 3 },
      { subject: "th", icon: "🔤", description: "Letter th", color: 4 },
      { subject: "d", icon: "🔤", description: "Letter d", color: 5 },
      { subject: "dh", icon: "🔤", description: "Letter dh", color: 6 },
      { subject: "n", icon: "🔤", description: "Letter n", color: 1 },
      { subject: "p", icon: "🔤", description: "Letter p", color: 2 },
    ]
  },
  {
    title: "More Alphabet! 🎉",
    pageNumber: 3,
    totalPages: 3,
    pageClass: "bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400",
    subjects: [
      { subject: "ph", icon: "🔤", description: "Letter ph", color: 1 },
      { subject: "b", icon: "🔤", description: "Letter b", color: 2 },
      { subject: "bh", icon: "🔤", description: "Letter bh", color: 3 },
      { subject: "m", icon: "🔤", description: "Letter m", color: 4 },
      { subject: "y", icon: "🔤", description: "Letter y", color: 5 },
      { subject: "r", icon: "🔤", description: "Letter r", color: 6 },
      { subject: "l", icon: "🔤", description: "Letter l", color: 1 },
      { subject: "v", icon: "🔤", description: "Letter v", color: 2 },
    ]
  }
];

