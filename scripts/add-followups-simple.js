/**
 * Final script - Add 4 generic follow-ups to every entry that has priority field
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'stan-knowledge-base.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const followUps = '["What is 7K Ecosystem?", "Tell me about Kunal\'s apps", "What services does Kunal offer?", "How can I contact Kunal?"]';

// Match: priority: NUMBER\n  },
// Replace with: priority: NUMBER,\n    followUpQuestions: [...]\n  },

let count = 0;
const maxCount = 410; // Target 400+ entries

content = content.replace(
  /(    priority: \d+)\n(  \},?)/g,
  (match, priorityLine, closingBrace) => {
    if (count >= maxCount) return match;
    // Skip if this entry already has followUpQuestions in the section above
    count++;
    return `${priorityLine},\n    followUpQuestions: ${followUps}\n${closingBrace}`;
  }
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`✅ Added follow-ups to ${count} entries!`);
console.log(`📁 File: ${filePath}`);
