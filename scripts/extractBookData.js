// Script to extract book data from HTML files
const fs = require('fs');
const path = require('path');

function extractWordsFromHTML(htmlContent) {
  const pages = [];
  const pageMatches = htmlContent.matchAll(/<!-- Page (\d+):.*?-->(.*?)<!-- Page \d+:/gs);
  
  let pageNum = 1;
  for (const match of pageMatches) {
    const pageContent = match[2];
    const titleMatch = pageContent.match(/<div class="title">(.*?)<\/div>/);
    const title = titleMatch ? titleMatch[1] : `Page ${pageNum}`;
    
    const wordMatches = pageContent.matchAll(/<div class="word-card color-(\d)">.*?<div class="icon">(.*?)<\/div>.*?<div class="word">(.*?)<\/div>(?:<div class="phrase">(.*?)<\/div>)?/gs);
    const words = [];
    
    for (const wordMatch of wordMatches) {
      words.push({
        icon: wordMatch[2],
        word: wordMatch[3],
        phrase: wordMatch[4] || undefined,
        color: parseInt(wordMatch[1])
      });
    }
    
    pages.push({
      title,
      words,
      pageNumber: pageNum,
      totalPages: 5,
      pageClass: `page-${pageNum}`
    });
    
    pageNum++;
  }
  
  return pages;
}

// Extract from book3.html
const book3HTML = fs.readFileSync(path.join(__dirname, '../book3.html'), 'utf8');
const book3Data = extractWordsFromHTML(book3HTML);

console.log('Book 3 Data:');
console.log(JSON.stringify(book3Data, null, 2));

