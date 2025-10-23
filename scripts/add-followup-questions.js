/**
 * Script to automatically add follow-up questions to Stan AI knowledge base
 * Adds relevant follow-ups to ~400 Q&A entries
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'stan-knowledge-base.ts');

// Read the file
let content = fs.readFileSync(filePath, 'utf-8');

// Define follow-up question templates by category
const followUpTemplates = {
  'personal_information': [
    "What is the 7K Ecosystem?",
    "Tell me about Kunal's skills",
    "What apps has Kunal built?",
    "What are Kunal's career plans?"
  ],
  '7k_ecosystem_and_apps': [
    "What is 7K Life?",
    "Tell me about 7K Polyglot",
    "What is 7K LawPrep?",
    "How many apps are there?",
    "Are the apps free?"
  ],
  'skills_and_technical_expertise': [
    "What's Kunal's tech stack?",
    "Can Kunal do backend development?",
    "What frameworks does Kunal use?",
    "Tell me about Kunal's AI experience"
  ],
  'services_and_freelancing': [
    "How much does web development cost?",
    "What services does Kunal offer?",
    "How do I hire Kunal?",
    "Can Kunal build mobile apps?",
    "What's included in UI/UX design?"
  ],
  'portfolio_designs_and_features': [
    "How many portfolio styles exist?",
    "What are the portfolio categories?",
    "Tell me about the Story portfolio",
    "Show me the Arcade portfolio"
  ],
  'career_plans_and_goals': [
    "What are Kunal's future plans?",
    "Does Kunal want to become a lawyer?",
    "What's next in the ecosystem?",
    "Will Kunal work in tech or law?"
  ],
  'hobbies_and_interests': [
    "What are Kunal's hobbies?",
    "Does Kunal play chess?",
    "What languages is Kunal learning?",
    "Tell me about Kunal's interests"
  ]
};

// General follow-ups for entries without specific category
const generalFollowUps = [
  "Tell me more about Kunal",
  "What is the 7K Ecosystem?",
  "What apps has Kunal built?",
  "What services does Kunal offer?"
];

// Counter for entries modified
let entriesModified = 0;

// Process entries that don't already have followUpQuestions
const lines = content.split('\n');
const newLines = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  newLines.push(line);
  
  // Check if this is a Q entry and doesn't have followUpQuestions
  if (line.match(/^\s*\/\/ Q\d+:/)) {
    // Look ahead to find the category and check if followUpQuestions exists
    let j = i + 1;
    let entryLines = [line];
    let hasFollowUps = false;
    let category = null;
    let priority = null;
    let foundClosingBrace = false;
    
    while (j < lines.length && !foundClosingBrace) {
      entryLines.push(lines[j]);
      
      if (lines[j].includes('followUpQuestions:')) {
        hasFollowUps = true;
      }
      
      if (lines[j].includes('category:')) {
        const match = lines[j].match(/category:\s*"([^"]+)"/);
        if (match) category = match[1];
      }
      
      if (lines[j].includes('priority:')) {
        const match = lines[j].match(/priority:\s*(\d+)/);
        if (match) priority = parseInt(match[1]);
      }
      
      // Check for closing brace of the entry
      if (lines[j].match(/^\s*\},?\s*$/)) {
        foundClosingBrace = true;
        
        // Add follow-ups if not present
        if (!hasFollowUps && entriesModified < 400) {
          // Get appropriate follow-ups based on category
          let followUps = generalFollowUps;
          if (category && followUpTemplates[category]) {
            followUps = followUpTemplates[category];
          }
          
          // Pick 3-4 random follow-ups
          const shuffled = [...followUps].sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, Math.min(4, shuffled.length));
          
          // Insert before closing brace
          const closingLine = newLines.pop(); // Remove the closing brace line we just added
          
          // Find the last non-empty line and add comma if needed
          for (let k = newLines.length - 1; k >= 0; k--) {
            const trimmed = newLines[k].trim();
            if (trimmed && !trimmed.endsWith(',')) {
              newLines[k] = newLines[k] + ',';
              break;
            }
            if (trimmed.endsWith(',')) {
              break;
            }
          }
          
          // Add followUpQuestions
          const indent = '    ';
          newLines.push(`${indent}followUpQuestions: [`);
          selected.forEach((q, idx) => {
            const comma = idx < selected.length - 1 ? ',' : '';
            newLines.push(`${indent}  "${q}"${comma}`);
          });
          newLines.push(`${indent}]`);
          
          // Add back the closing brace
          newLines.push(closingLine);
          
          entriesModified++;
        }
      }
      
      j++;
    }
    
    // Skip the lines we already processed
    i = j;
    continue;
  }
  
  i++;
}

// Write the modified content back
const newContent = newLines.join('\n');
fs.writeFileSync(filePath, newContent, 'utf-8');

console.log(`✅ Successfully added follow-up questions to ${entriesModified} entries!`);
console.log(`📊 Total lines: ${newLines.length}`);
console.log(`📁 File: ${filePath}`);
