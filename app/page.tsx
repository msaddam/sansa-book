import Link from "next/link";

export default function Home() {
  const englishBooks = [
    { id: 1, title: "3-Letter Words", description: "Learn basic 3-letter words", href: "/book1" },
    { id: 2, title: "3-Letter Words with Phrases", description: "3-letter words with simple phrases", href: "/book2" },
    { id: 8, title: "Fill the Letter", description: "Practice spelling by filling missing letters", href: "/book8" },
    { id: 6, title: "Test Book", description: "Preview words and take a test", href: "/book6" },
    { id: 7, title: "Fill in the Blanks", description: "Practice filling in missing words", href: "/book7" },
    { id: 3, title: "4-Letter Words", description: "Learn 4-letter words with phrases", href: "/book3" },
    { id: 9, title: "4-Letter Fill in the Blanks", description: "Fill in the blanks with 4-letter words", href: "/book9" },
    { id: 10, title: "4-Letter Fill the Letter", description: "Fill missing letters in 4-letter words", href: "/book10" },
    { id: 4, title: "Comic Book", description: "4-letter words in comic book style", href: "/book4" },
    { id: 5, title: "Reading Book", description: "Words less than 5 letters for reading practice", href: "/book5" },
  ];

  const mathBooks = [
    { id: 11, title: "Numbers 1-100", description: "Learn numbers from 1 to 100", href: "/math/numbers" },
    { id: 12, title: "Missing Numbers", description: "Find the missing number in sequences", href: "/math/missing" },
    { id: 13, title: "Addition", description: "Practice addition problems", href: "/math/addition" },
    { id: 14, title: "Subjects", description: "Learn about different school subjects", href: "/math/subjects" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 flex items-center justify-center pt-20 p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-roboto)' }}>
            📚 Sansa Book
          </h1>
          <p className="text-2xl text-white/90">Kids Learning Platform</p>
        </div>

        <div className="space-y-12">
          {/* English Books Section */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-roboto)' }}>
              📚 English Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {englishBooks.map((book) => (
                <Link
                  key={book.id}
                  href={book.href}
                  className="bg-white rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3">📖</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'var(--font-roboto)' }}>
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{book.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Math Section */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-roboto)' }}>
              🔢 Math
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mathBooks.map((book) => (
                <Link
                  key={book.id}
                  href={book.href}
                  className="bg-white rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3">🔢</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'var(--font-roboto)' }}>
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{book.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-white/80">
          <p>Choose a book to start learning!</p>
        </div>
      </div>
    </div>
  );
}

