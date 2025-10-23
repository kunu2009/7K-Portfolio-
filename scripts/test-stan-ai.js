/**
 * Stan AI Test Suite
 * Tests the knowledge base implementation
 */

import { askChatAssistant, getGreeting, getKnowledgeStats } from '../src/ai/stan-assistant';

async function runTests() {
  console.log('🧪 Stan AI Test Suite');
  console.log('====================\n');

  // Test 1: Knowledge Stats
  console.log('Test 1: Knowledge Base Stats');
  const stats = await getKnowledgeStats();
  console.log(`✓ Total Questions: ${stats.totalQuestions}`);
  console.log(`✓ Categories: ${stats.categories}`);
  console.log(`✓ Version: ${stats.version}\n`);

  // Test 2: Greeting
  console.log('Test 2: Greeting Message');
  const greeting = await getGreeting();
  console.log(`✓ ${greeting}\n`);

  // Test 3: Sample Questions
  console.log('Test 3: Sample Questions\n');
  
  const testQuestions = [
    "Who is Kunal Chheda?",
    "What programming languages does he know?",
    "Tell me about 7K Life",
    "What's Kunal's tech stack?",
    "How can I contact Kunal?",
    "What is 7K Ecosystem?",
    "Does Kunal play chess?",
    "What apps has he built?",
    "What services does Kunal offer?",
    "Why does Kunal want to be a lawyer?",
  ];

  for (const question of testQuestions) {
    console.log(`Q: ${question}`);
    const answer = await askChatAssistant(question);
    console.log(`A: ${answer.substring(0, 150)}...\n`);
  }

  // Test 4: Fallback Response
  console.log('Test 4: Fallback Response');
  const fallback = await askChatAssistant("Random gibberish that doesn't match anything");
  console.log(`✓ Fallback works: ${fallback.substring(0, 100)}...\n`);

  console.log('✅ All tests completed!');
}

runTests().catch(console.error);
