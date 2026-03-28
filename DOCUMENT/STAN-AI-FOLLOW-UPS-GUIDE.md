# Stan AI - Follow-Up Questions & Greetings Feature

## 🎯 Overview
Stan AI now includes:
1. **Conversational Greetings** - Responds naturally to hello, good morning, thanks, etc.
2. **Follow-Up Questions** - Suggests related questions for deeper exploration (WhatsApp-style)

---

## 🗣️ Greetings Feature

### Supported Greetings
Stan now responds to:
- **hello, hi, hey** → Friendly introduction
- **good morning** ☀️ → Morning greeting
- **good afternoon** 🌤️ → Afternoon greeting
- **good evening** 🌆 → Evening greeting
- **good night** 🌙 → Night greeting
- **how are you** → Status check
- **thanks, thank you** → Appreciation response
- **bye, goodbye** → Farewell
- **who are you** → Self-introduction
- **help** → Capabilities overview

### Priority
- All greetings have **priority: 15** (highest)
- Ensures immediate matching before other patterns

---

## 💬 Follow-Up Questions Feature

### How It Works
1. User asks a question
2. Stan provides an answer
3. Stan suggests 3-5 related follow-up questions
4. User can click/tap to explore deeper

### Example Flow
```
User: "What is the 7K Ecosystem?"

Stan: "The 7K Ecosystem is Kunal's interconnected system of 24+ apps..."

Follow-up suggestions:
→ "How many apps are in the 7K Ecosystem?"
→ "What is 7K Life?"
→ "Tell me about all the apps"
→ "Why build an ecosystem instead of one app?"
→ "How do the apps connect?"
```

---

## 🔧 Technical Implementation

### Type Definition
```typescript
export type KnowledgeEntry = {
  keywords: string[];
  patterns: RegExp[];
  answer: string;
  category?: string;
  questionId?: number;
  priority?: number;
  followUpQuestions?: string[]; // NEW: Optional follow-up suggestions
};
```

### Response Format
```typescript
export type ChatOutput = {
  answer: string;
  followUpQuestions?: string[]; // Array of suggested questions
};
```

### Usage in Code
```typescript
const response = await askChatAssistant("Who is Kunal?");
console.log(response.answer); // Main answer
console.log(response.followUpQuestions); // ["What is the 7K Ecosystem?", ...]
```

---

## 📝 Key Q&A Entries with Follow-Ups

### Currently Added
1. **Who is Kunal?** (Q1)
   - What is the 7K Ecosystem?
   - What are Kunal's career plans?
   - Tell me about Kunal's skills
   - What apps has Kunal built?
   - How can I contact Kunal?

2. **What is 7K Ecosystem?** (Q101)
   - How many apps are in the 7K Ecosystem?
   - What is 7K Life?
   - Tell me about all the apps
   - Why build an ecosystem instead of one app?
   - How do the apps connect?

3. **What is 7K Life?** (Q103)
   - What features does 7K Life have?
   - Tell me about other productivity apps
   - What is 7K Polyglot?
   - How much does 7K Life cost?
   - Is 7K Life available on mobile?

4. **What services does Kunal offer?** (Q251)
   - How much does web development cost?
   - Can Kunal build mobile apps?
   - What's included in UI/UX design?
   - How do I hire Kunal?
   - What's Kunal's tech stack?

5. **What's Kunal's tech stack?** (Q55)
   - Can Kunal do backend development?
   - What frameworks does Kunal use?
   - Does Kunal know TypeScript?
   - Tell me about Kunal's AI experience
   - What deployment platforms does Kunal use?

6. **How many portfolio styles exist?** (Q201)
   - What are the portfolio categories?
   - Tell me about the Story portfolio
   - What's the Terminal portfolio like?
   - Show me the Arcade portfolio
   - Can I see all portfolio designs?

---

## 🎨 UI Implementation Guide

### Recommended UI Pattern (WhatsApp-style)

```tsx
// Example React component
function ChatMessage({ response }) {
  return (
    <div className="chat-message">
      {/* Main answer */}
      <div className="answer">
        {response.answer}
      </div>
      
      {/* Follow-up suggestions */}
      {response.followUpQuestions && (
        <div className="follow-ups">
          <p className="follow-ups-label">💡 You might also want to know:</p>
          <div className="follow-up-buttons">
            {response.followUpQuestions.map((question, i) => (
              <button
                key={i}
                className="follow-up-btn"
                onClick={() => handleFollowUp(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

### Suggested Styling
```css
.follow-ups {
  margin-top: 16px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.follow-up-btn {
  display: inline-block;
  margin: 4px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
}

.follow-up-btn:hover {
  transform: translateY(-2px);
}
```

### Swipe Interaction (Mobile)
```tsx
// Use swipe library like react-swipeable
import { useSwipeable } from 'react-swipeable';

function FollowUpCard({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex(prev => 
      Math.min(prev + 1, questions.length - 1)
    ),
    onSwipedRight: () => setCurrentIndex(prev => 
      Math.max(prev - 1, 0)
    ),
  });
  
  return (
    <div {...handlers} className="swipeable-card">
      <p>{questions[currentIndex]}</p>
      <div className="dots">
        {questions.map((_, i) => (
          <span key={i} className={i === currentIndex ? 'active' : ''} />
        ))}
      </div>
    </div>
  );
}
```

---

## 🚀 Testing

### Test Greetings
```javascript
// Test basic greetings
await askChatAssistant("hello");
await askChatAssistant("good morning");
await askChatAssistant("how are you");
await askChatAssistant("thanks");
await askChatAssistant("bye");
```

### Test Follow-Ups
```javascript
// Test follow-up questions
const response = await askChatAssistant("Who is Kunal?");
console.log(response.followUpQuestions);
// Expected: ["What is the 7K Ecosystem?", "What are Kunal's career plans?", ...]
```

### Test Fallback
```javascript
// Unknown question should still provide follow-ups
const response = await askChatAssistant("random unknown question");
console.log(response.followUpQuestions);
// Expected: ["Who is Kunal?", "What is 7K Ecosystem?", ...]
```

---

## 📊 Statistics

- **Total Greetings**: 10 patterns
- **Total Q&A with Follow-Ups**: 6 (more can be added)
- **Follow-Ups per Question**: 3-5 suggestions
- **Priority Level**: 15 (greetings), 7-10 (Q&A)

---

## 🎯 Next Steps

### To Add More Follow-Ups
1. Open `src/lib/stan-knowledge-base.ts`
2. Find the Q&A entry you want to enhance
3. Add `followUpQuestions: ["Question 1", "Question 2", ...]`
4. Test the response

### Example
```typescript
{
  keywords: ["polyglot"],
  patterns: [/what is 7k polyglot/i],
  answer: "7K Polyglot is a language learning app...",
  priority: 8,
  followUpQuestions: [ // ADD THIS
    "What languages can I learn?",
    "How does spaced repetition work?",
    "Is there a mobile app?",
    "Tell me about other educational apps"
  ]
}
```

---

## ✨ Best Practices

1. **Keep Follow-Ups Relevant** - Only suggest questions related to the current topic
2. **3-5 Suggestions** - Not too few, not too many
3. **Natural Language** - Write questions as users would ask them
4. **Progressive Disclosure** - Start broad, then offer specific details
5. **Test Priority** - Ensure high-priority entries match first

---

## 🐛 Troubleshooting

### Follow-ups not showing?
- Check if `followUpQuestions` array is defined
- Verify the entry is being matched (check priority/patterns)
- Ensure UI component is rendering the follow-ups

### Wrong greeting matched?
- Check pattern regex for conflicts
- Verify priority is set to 15
- Test pattern matching with console logs

### UI not displaying properly?
- Check CSS styling for `.follow-ups` class
- Verify click handlers are connected
- Test responsive design on mobile

---

Built with ❤️ by Kunal Chheda - 7K Ecosystem
