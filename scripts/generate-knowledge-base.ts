import fs from 'fs';
import path from 'path';

/**
 * Script to convert STAN-AI-COMPLETE-CONTEXT.md into TypeScript knowledge base
 * This generates the complete stan-knowledge-base.ts file with all 550+ Q&A pairs
 */

interface QAPair {
  question: string;
  answer: string;
  category: string;
  questionNumber: number;
}

function extractQuestionsFromMarkdown(markdownContent: string): QAPair[] {
  const questions: QAPair[] = [];
  const lines = markdownContent.split('\n');
  
  let currentCategory = '';
  let inQASection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect category headers
    if (line.startsWith('### **Category')) {
      const categoryMatch = line.match(/Category \d+: (.+?) \(/);
      if (categoryMatch) {
        currentCategory = categoryMatch[1].toLowerCase().replace(/\s+/g, '_');
        inQASection = true;
      }
      continue;
    }
    
    // Detect question
    const questionMatch = line.match(/^\*\*Q(\d+): (.+?)\*\*/);
    if (questionMatch && inQASection) {
      const questionNumber = parseInt(questionMatch[1]);
      const question = questionMatch[2];
      
      // Look for answer on next line
      if (i + 1 < lines.length) {
        const answerLine = lines[i + 1].trim();
        const answerMatch = answerLine.match(/^A: (.+)/);
        if (answerMatch) {
          questions.push({
            question,
            answer: answerMatch[1],
            category: currentCategory,
            questionNumber
          });
        }
      }
    }
  }
  
  return questions;
}

function generateKeywords(question: string): string[] {
  // Extract important words from question
  const commonWords = ['is', 'are', 'the', 'what', 'how', 'can', 'does', 'do', 'tell', 'me', 'about', 'kunal', 'a', 'an'];
  const words = question.toLowerCase()
    .replace(/[?!.,]/g, '')
    .split(' ')
    .filter(word => word.length > 2 && !commonWords.includes(word));
  
  return [...new Set(words)].slice(0, 8); // Return unique keywords, max 8
}

function generatePatterns(question: string): string {
  // Create regex patterns from question
  const patterns: string[] = [];
  
  // Add main question pattern
  const cleanQuestion = question.toLowerCase()
    .replace(/[?]/g, '')
    .replace(/kunal'?s?/gi, '(kunal|his)');
  
  patterns.push(`/${cleanQuestion}/i`);
  
  // Add variations
  if (question.includes('What is')) {
    patterns.push(`/${cleanQuestion.replace('what is', '(what is|tell me about|explain)')}/i`);
  }
  if (question.includes('Tell me')) {
    patterns.push(`/${cleanQuestion.replace('tell me', '(tell me|what)')}/i`);
  }
  
  return `[${patterns.join(', ')}]`;
}

function generateTypeScriptKnowledgeBase(questions: QAPair[]): string {
  let output = `/**
 * Stan AI Knowledge Base - AUTO-GENERATED
 * 550+ preloaded Q&A about Kunal Chheda and the 7K Ecosystem
 * Generated from STAN-AI-COMPLETE-CONTEXT.md
 * Last Updated: ${new Date().toLocaleDateString()}
 */

export type KnowledgeEntry = {
  keywords: string[];
  patterns: RegExp[];
  answer: string;
  category: string;
  priority?: number;
  questionId: number;
};

export const STAN_KNOWLEDGE: KnowledgeEntry[] = [\n`;

  questions.forEach((qa, index) => {
    const keywords = generateKeywords(qa.question);
    const keywordsStr = JSON.stringify(keywords);
    const patterns = generatePatterns(qa.question);
    const answer = qa.answer.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    
    output += `  {
    keywords: ${keywordsStr},
    patterns: ${patterns},
    answer: "${answer}",
    category: "${qa.category}",
    questionId: ${qa.questionNumber},
    priority: ${index < 50 ? 10 : index < 100 ? 9 : 8}
  },\n`;
  });

  output += `];\n\n`;
  
  // Add fun facts
  output += `export const FUN_FACTS = [
  "Kunal built 24+ apps while still being in 12th standard! Talk about productivity! 🚀",
  "The 7K Ecosystem started as personal tools Kunal needed himself—now they're helping others too!",
  "Kunal is balancing being a 12th grader, a developer, AND preparing to be a lawyer. Triple threat! ⚖️💻📚",
  "This entire portfolio has 28+ different design variations across 7 categories!",
  "Kunal loves chess (1300+ rating) because it teaches strategic thinking!",
  "7K Life integrates productivity, habits, goals, and life management all in one place!",
  "Kunal believes in 'Radical Productivity'—tools that amplify focus and eliminate friction!",
  "Kunal taught himself React, Next.js, TypeScript, and more—all while studying for school exams!",
  "Kunal is learning 6+ languages simultaneously as a polyglot in progress!",
  "Kunal achieved 95+ Lighthouse scores on all his applications!",
  "The 7K ecosystem has 24+ apps spanning productivity, education, finance, health, and entertainment!",
  "Kunal completed an e-commerce website (GiftsKraftByGK.in) for his first client project!",
  "7K Polyglot supports 20+ languages with AI conversation practice!",
  "Kunal's portfolio includes playable games like Snake, Tetris, and Memory Match!",
  "Every app follows three principles: Radical Productivity, Continuous Growth, and Creative Freedom!"
];\n`;

  return output;
}

// Main execution
function main() {
  const contextPath = path.join(process.cwd(), 'STAN-AI-COMPLETE-CONTEXT.md');
  const outputPath = path.join(process.cwd(), 'src', 'lib', 'stan-knowledge-base.ts');
  
  console.log('📖 Reading context file...');
  const markdownContent = fs.readFileSync(contextPath, 'utf-8');
  
  console.log('🔍 Extracting Q&A pairs...');
  const questions = extractQuestionsFromMarkdown(markdownContent);
  
  console.log(`✅ Found ${questions.length} questions!`);
  
  console.log('⚙️  Generating TypeScript knowledge base...');
  const tsContent = generateTypeScriptKnowledgeBase(questions);
  
  console.log('💾 Writing to file...');
  fs.writeFileSync(outputPath, tsContent, 'utf-8');
  
  console.log(`\n🎉 Success! Generated knowledge base with ${questions.length} Q&A pairs!`);
  console.log(`📁 Output: ${outputPath}`);
}

if (require.main === module) {
  main();
}

export { extractQuestionsFromMarkdown, generateTypeScriptKnowledgeBase };
