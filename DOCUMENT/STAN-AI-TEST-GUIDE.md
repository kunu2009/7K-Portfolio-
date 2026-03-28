# 🧪 Stan AI - Quick Test Guide

## Test Commands

### Greetings Test (10 patterns)
```
✅ "hello"          → Should show friendly greeting + 4 follow-ups
✅ "hi"             → Same as hello
✅ "hey"            → Same as hello
✅ "good morning"   → Morning greeting ☀️ + 4 follow-ups
✅ "good afternoon" → Afternoon greeting 🌤️ + 4 follow-ups
✅ "good evening"   → Evening greeting 🌆 + 4 follow-ups
✅ "good night"     → Night greeting 🌙 + 4 follow-ups
✅ "how are you"    → Status response 😊 + 4 follow-ups
✅ "thanks"         → Appreciation response + 4 follow-ups
✅ "bye"            → Farewell 👋 + 4 follow-ups
✅ "who are you"    → Self-introduction 🤖 + 4 follow-ups
✅ "help"           → Capabilities list ✨ + 4 follow-ups
```

### Follow-Up Questions Test (6 entries)
```
✅ "Who is Kunal?"
   Expected: 5 follow-ups
   - What is the 7K Ecosystem?
   - What are Kunal's career plans?
   - Tell me about Kunal's skills
   - What apps has Kunal built?
   - How can I contact Kunal?

✅ "What is 7K Ecosystem?"
   Expected: 5 follow-ups
   - How many apps are in the 7K Ecosystem?
   - What is 7K Life?
   - Tell me about all the apps
   - Why build an ecosystem instead of one app?
   - How do the apps connect?

✅ "What is 7K Life?"
   Expected: 5 follow-ups
   - What features does 7K Life have?
   - Tell me about other productivity apps
   - What is 7K Polyglot?
   - How much does 7K Life cost?
   - Is 7K Life available on mobile?

✅ "What services does Kunal offer?"
   Expected: 5 follow-ups
   - How much does web development cost?
   - Can Kunal build mobile apps?
   - What's included in UI/UX design?
   - How do I hire Kunal?
   - What's Kunal's tech stack?

✅ "What's Kunal's tech stack?"
   Expected: 5 follow-ups
   - Can Kunal do backend development?
   - What frameworks does Kunal use?
   - Does Kunal know TypeScript?
   - Tell me about Kunal's AI experience
   - What deployment platforms does Kunal use?

✅ "How many portfolio styles exist?"
   Expected: 5 follow-ups
   - What are the portfolio categories?
   - Tell me about the Story portfolio
   - What's the Terminal portfolio like?
   - Show me the Arcade portfolio
   - Can I see all portfolio designs?
```

### Fallback Test
```
✅ "random gibberish xyz123"
   Expected: Fallback + default follow-ups
   - Who is Kunal?
   - What is 7K Ecosystem?
   - Tell me about Kunal's apps
   - What services does Kunal offer?
```

### Click Test
```
1. Type: "Who is Kunal?"
2. Click: "What is the 7K Ecosystem?" button
3. Expected: New answer with 5 new follow-ups
4. Click any follow-up
5. Expected: Seamless navigation
```

## Visual Checklist

### Button Appearance
- [ ] Purple-pink gradient background
- [ ] Rounded-full (pill shape)
- [ ] White text
- [ ] Hover: scales up slightly
- [ ] Disabled: 50% opacity

### Layout
- [ ] Message appears on left (assistant)
- [ ] Follow-ups below answer
- [ ] Label: "💡 You might also want to know:"
- [ ] Buttons wrap to next line if needed
- [ ] Mobile responsive

### Interaction
- [ ] Click follow-up → auto-sends question
- [ ] Loading state → buttons disabled
- [ ] Smooth scroll to new message
- [ ] No console errors

## Priority Test

```
Priority 15 (highest): Greetings
Priority 10: Personal info (Who is Kunal)
Priority 9: Ecosystem, Tech Stack
Priority 7: Services, Portfolio

Test: "hello what is 7k"
Expected: "hello" should match first (priority 15)
```

## Mobile Test

- [ ] Follow-up buttons readable on small screens
- [ ] Text wraps correctly
- [ ] Touch targets are large enough (min 44px)
- [ ] Buttons don't overflow container
- [ ] Smooth scrolling on mobile

## Expected Results

✅ All greetings respond naturally  
✅ All questions show follow-ups  
✅ Follow-ups are clickable and functional  
✅ No TypeScript errors  
✅ No console errors  
✅ Smooth UX with loading states  

## Performance Check

- [ ] Response time < 100ms (local)
- [ ] No memory leaks
- [ ] Chat scrolls smoothly
- [ ] Follow-up clicks are instant

---

**Status: Ready to test! 🚀**

Start the dev server:
```bash
npm run dev
```

Open: http://localhost:3000
Click: Stan AI floating button (bottom-right)
Test: All commands above

---

Built with ❤️ by Kunal Chheda
