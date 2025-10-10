'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Menu, Settings, Bookmark, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bookContent: Record<string, any> = {
  ethos: {
    title: 'Ethos and Thought',
    author: 'Kunal Paresh Chheda',
    chapters: [
      {
        id: 1,
        title: 'Ethos and Thought',
        content: `# Chapter 1 - Ethos and Thought

This chapter names the two central instruments of this book and shows how they shape the world you design, lead, and live inside.

## What is Ethos?

Ethos is the set of values, beliefs, and cultural practices that guide how we make decisions. It's the invisible architecture behind every choice - from the products we build to the organizations we lead.

In design work, ethos determines:
- Which problems we choose to solve
- Who we design for
- What trade-offs we accept
- How we measure success

## What is Thought?

Thought is the conscious act of reasoning, questioning, and challenging assumptions. It's the discipline of examining our ethos critically.

### The Practice

1. **Surface your defaults** - What do you take for granted?
2. **Question the obvious** - Why does it have to be this way?
3. **Test alternatives** - What happens if we flip the assumption?
4. **Choose deliberately** - Make explicit what was implicit

## Ethos × Thought in Action

When we combine ethos (our values) with thought (critical examination), we create intentional design.

### Case Study: The Calendar App

A team building a calendar app had to choose: optimize for productivity or presence?

Their ethos valued human connection over efficiency. Their thought process revealed that most calendar apps reinforce transactional relationships.

They designed for quality time instead of quantity of meetings.

## Your Turn

**Exercise 1: Name Your Ethos**
Write down 3 values that guide your work. For each, ask:
- Where did this value come from?
- Who benefits when I follow it?
- What might I be missing?

**Exercise 2: Thought Experiment**
Pick a recent design decision. Ask:
- What assumptions did I make?
- Who did I design for?
- What alternatives did I not consider?

## Templates

Use these frameworks to make ethos and thought visible in your practice:

### Decision Document
- **Context**: What problem are we solving?
- **Values**: What ethos guides us?
- **Options**: What alternatives did we consider?
- **Choice**: What did we decide and why?
- **Impact**: Who wins? Who loses?

### Assumption Audit
- List all assumptions
- Rate confidence (1-5)
- Identify whose perspective is missing
- Test top 3 risky assumptions

## Key Takeaways

- Ethos shapes what we build
- Thought makes ethos visible
- Together they create intentional design
- Practice makes both stronger

The rest of this book expands these ideas across culture, technology, and leadership.`,
      },
      {
        id: 2,
        title: 'Dharma, Karma, Moksha',
        content: `# Chapter 2 - Dharma, Karma, Moksha

Three Sanskrit concepts that offer powerful frameworks for design and leadership.

## Dharma: Purpose and Duty

Dharma is often translated as "duty" or "righteousness," but it's more nuanced - it's about finding your purpose in relation to the whole.

In product design, dharma asks: What is this product's true purpose? Who does it serve?

### Design Application
- **Product dharma**: Core purpose beyond profit
- **User dharma**: What helps users fulfill their own purpose?
- **Team dharma**: How does each role serve the whole?

## Karma: Action and Consequence

Karma isn't fate - it's the principle that actions have consequences, often beyond what we can see immediately.

### Design Patterns
- **Immediate feedback loops**: Show users impact of their actions
- **Long-term thinking**: Design for consequences 5 years out
- **System effects**: Map downstream impacts

### Case Study: Social Media Feed
Early social feeds optimized for engagement (action). The karma (consequence) was addiction, polarization, anxiety. Better design acknowledges both.

## Moksha: Liberation and Freedom

Moksha is liberation from cycles that trap us. In design, it's about creating freedom rather than dependency.

### Anti-Patterns to Avoid
- Dark patterns that manipulate
- Addictive engagement loops
- Artificial scarcity
- Lock-in tactics

### Freedom-Centered Design
- **Easy exit**: Users can leave anytime with their data
- **Transparent choices**: Show all options clearly
- **Sustainable engagement**: Build healthy habits, not addiction
- **User agency**: Maximize control and choice

## The Triangle in Practice

These three concepts work together:
1. **Dharma** defines your purpose
2. **Karma** reminds you of consequences
3. **Moksha** ensures you create freedom

### Exercise: Audit Your Product

Ask these questions:
- **Dharma**: What is our true purpose? Beyond revenue, what value do we create?
- **Karma**: What are the second and third-order effects of our design choices?
- **Moksha**: Does our product create freedom or dependency?

## Template: Ethical Design Canvas

| Dimension | Current State | Desired State | Actions |
|-----------|---------------|---------------|---------|
| Dharma | | | |
| Karma | | | |
| Moksha | | | |

## Bridging East and West

These concepts complement Western design thinking:
- User stories + Dharma = Purpose-driven features
- A/B testing + Karma = Long-term impact measurement
- User control + Moksha = True user empowerment

Next chapter explores how reason, humanism, and individualism interact with these frameworks.`,
      },
    ],
  },
  kupgames: {
    title: 'The Kup Games',
    author: 'Kunal Paresh Chheda',
    chapters: [
      {
        id: 1,
        title: 'The Arrival at Kupam',
        content: `# Chapter 1 - The Arrival at Kupam

The bus rattled down the winding road, surrounded by dense forest on both sides. Rudra sat in the back, earbuds in, watching the trees blur past. His classmates chattered excitedly about the field trip, but he preferred silence.

Kupam School for Science and Technology loomed ahead - a massive colonial building that had been converted into an elite boarding school. This three-day trip was meant to be educational, a chance to see how the other half lived.

## First Impressions

The architecture was impressive. Victorian-era pillars mixed with modern glass extensions. Manicured lawns stretched between buildings. But something felt off. The windows of the old wing were darker than they should be.

"Creepy, isn't it?" Anvi Rao appeared beside his seat, startling him.

Rudra pulled out an earbud. "It's just old."

"Old buildings have stories." She smiled mysteriously before returning to her friends.

## The Orientation

Mr. Deshmukh, their teacher, gathered everyone in the main hall.

"You'll be paired with Kupam students for the next three days. They'll show you around, attend classes with you, and host you in their dorms. This is a cultural exchange, so be on your best behavior."

Rudra was paired with Karthik, a lanky boy with thick glasses who seemed nervous.

"I'll show you to the dorm," Karthik said quietly, avoiding eye contact.

## The Dormitory

The old wing dorms were different from the modern campus. Long corridors with high ceilings. Doors with actual keyholes instead of card readers. Karthik led Rudra to room 214.

"We're sharing this room. I cleaned up, hope that's okay."

The room was spotless - too clean, actually. Like someone had scrubbed away evidence.

## The First Clue

That night, while Karthik slept, Rudra noticed something. The floorboard near his bed creaked differently. He pressed it gently - it was loose.

Underneath, wrapped in old newspaper, was a journal. The last entry was dated three weeks ago.

*"They're watching us. Not the teachers - something else. The games have started again, and this time, I don't think everyone will make it out."*

The entry was signed: **Varun Malhotra, Room 214**

Rudra looked at the empty bed across from Karthik's. There were three beds in the room. Where was Varun?

## Midnight Encounter

A knock on the door made him hide the journal quickly. He opened it to find a prefect.

"Late night walk? Not allowed in the old wing after 10 PM." The prefect's smile didn't reach his eyes.

"Just getting water."

"Water fountain's in the new wing. This hallway leads to storage rooms. Nothing interesting here." The prefect lingered, looking into the room. "Sleep well. Tomorrow's orientation starts early."

After he left, Rudra noticed something on the doorframe - fresh scratch marks, like someone had been trying to get in. Or get out.

He didn't sleep that night. Instead, he read Varun's journal by flashlight, learning about the hidden cameras, the secret society of students called "The Watchers," and the games that had been played in this school for decades.

Games that not everyone survived.

## Morning Assembly

The next morning, during assembly, Rudra scanned the crowd, counting students. He memorized faces, noting who stood where, who looked nervous, who looked predatory.

Karthik noticed him watching. "You okay? You seem... alert."

"Just observing," Rudra said. "New place, new people."

"Yeah, well, stay close to me. Some students here... they don't like visitors."

As they filed out of the hall, Rudra saw her again - Anvi Rao. But this time, she wasn't with their group from Mumbai. She was talking to a group of Kupam students, laughing like she'd been here forever.

When she caught his eye, she winked.

Something was very wrong at Kupam. And Rudra was going to find out what.`,
      },
      {
        id: 2,
        title: 'The First Crack',
        content: `# Chapter 2 - The First Crack

The morning classes were uneventful, but Rudra couldn't focus. He kept thinking about Varun's journal. During lunch break, he decided to investigate.

## The Old Library

Karthik had mentioned the old library was off-limits during renovation. Perfect place to start.

The door was locked, but the adjacent window was slightly ajar. Rudra slipped through, landing quietly on dusty floorboards. Rows of ancient books lined the shelves, many damaged by moisture and time.

He found the student records section. Varun Malhotra's file was missing, but there were others - students who had "transferred" suddenly over the past five years. Twelve names. Too many for coincidence.

## The Laptop Incident

That afternoon, Karthik's laptop went missing during sports period. It reappeared in his bag later with a new folder: "The Games - Rules."

Inside were videos. Security camera footage from around campus, edited together to show students being followed, watched, manipulated into compromising positions. The final video showed Varun Malhotra entering the old wing basement. He never came out.

Karthik was terrified. "We need to tell someone!"

"Who?" Rudra asked calmly. "The teachers? The prefects? Someone put this back in your bag. They have access everywhere."

## The Message

That night, Karthik's laptop screen lit up by itself with a message:

**"Welcome to the Kup Games. You have been selected as players. Rule 1: Trust no one. Rule 2: The games end when we say so. Rule 3: Don't look for Varun. You won't like what you find."**

Karthik was shaking. "What do we do?"

Rudra had dealt with bullies before, but this was different. Organized. Systematic. He needed more information.

"We play along," he said. "But on our terms."

## The Alliance

The next morning, Anvi approached him during breakfast. "You found Varun's journal, didn't you?"

Rudra didn't answer.

"I'm not one of them," she said quickly. "I'm from the Mumbai group, but my cousin went to Kupam. She transferred suddenly last year. No explanation. I came on this trip to find out why."

She showed him her phone - photos of her cousin looking increasingly anxious in her last few weeks at Kupam. In one photo, Rudra could see a figure watching from a window behind her.

"How many are there?" Rudra asked.

"At least five core members. They call themselves The Watchers. They've been doing this for years - selecting students, running psychological experiments, seeing how far they can push people."

"Why hasn't anyone stopped them?"

"Because they're smart. They target students who are isolated, new, or vulnerable. By the time anyone realizes something's wrong, the victim has already 'transferred' and the evidence disappears."

## The Plan

Rudra formulated a strategy:
1. Identify The Watchers
2. Document everything
3. Find where they're keeping the footage
4. Get proof
5. Expose them

But first, they needed to survive the next two days without becoming the next disappearances.

## The First Challenge

That afternoon, a note appeared in Rudra's textbook:

**"Karthik is weak. Sacrifice him, and you'll be safe. Protect him, and you both suffer. Choose by midnight."**

Karthik saw the note and went pale. "They're going to hurt me, aren't they?"

Rudra crumpled the note. "No one's getting hurt. This is psychology - they want us scared and divided."

But inside, he was calculating. The Watchers had shown their hand too early. They were arrogant, used to easy targets. They didn't know who they were dealing with.

Rudra had played games like this before. And he always won.

## Midnight Decision

At midnight, Rudra placed a note under door 214:

**"I don't make deals with cowards who hide behind cameras. Come face me, or shut down your little game. Your move."**

By morning, things would escalate. But Rudra was ready.

The Kup Games had officially begun.`,
      },
    ],
  },
};

export default function ReadingPage({
  params,
}: {
  params: Promise<{ id: string; chapter: string }>;
}) {
  const resolvedParams = use(params);
  const [fontSize, setFontSize] = useState(16);
  const [showSettings, setShowSettings] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const bookId = resolvedParams.id;
  const chapterId = parseInt(resolvedParams.chapter);
  const book = bookContent[bookId];
  const chapter = book?.chapters.find((ch: any) => ch.id === chapterId);
  
  const totalChapters = book?.chapters.length || 0;
  const prevChapter = chapterId > 1 ? chapterId - 1 : null;
  const nextChapter = chapterId < totalChapters ? chapterId + 1 : null;

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!book || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chapter not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-1 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link
            href={`/books/${bookId}`}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold hidden sm:inline">Back</span>
          </Link>

          <div className="flex-1 text-center">
            <h1 className="text-sm font-semibold text-foreground truncate max-w-[200px] sm:max-w-none mx-auto">
              Chapter {chapterId} of {totalChapters}
            </h1>
            <p className="text-xs text-muted-foreground">{Math.round(progress)}% complete</p>
          </div>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="border-t border-border/40 bg-card/50 backdrop-blur p-4">
            <div className="container max-w-2xl mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Font Size</span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  >
                    A-
                  </Button>
                  <span className="text-sm w-12 text-center">{fontSize}px</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  >
                    A+
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Reading Content */}
      <main className="container max-w-3xl mx-auto px-4 py-12">
        <article
          className="prose prose-slate dark:prose-invert max-w-none"
          style={{ fontSize: `${fontSize}px` }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{chapter.title}</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
          
          <div className="whitespace-pre-wrap leading-relaxed">
            {chapter.content}
          </div>
        </article>

        {/* Chapter Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          {prevChapter ? (
            <Link href={`/books/${bookId}/read/${prevChapter}`}>
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous Chapter
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link href={`/books/${bookId}/read/${nextChapter}`}>
              <Button className="gap-2 bg-gradient-to-r from-primary to-accent">
                Next Chapter
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href={`/books/${bookId}`}>
              <Button className="gap-2 bg-gradient-to-r from-primary to-accent">
                Finish Reading
                <Home className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </main>

      {/* Mobile Reading Controls */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border/40 px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {prevChapter ? (
            <Link href={`/books/${bookId}/read/${prevChapter}`}>
              <Button variant="ghost" size="sm" className="gap-1">
                <ChevronLeft className="h-4 w-4" />
                Prev
              </Button>
            </Link>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Bookmark className="h-5 w-5" />
            </button>
            <span className="text-sm font-medium">
              {chapterId}/{totalChapters}
            </span>
          </div>

          {nextChapter ? (
            <Link href={`/books/${bookId}/read/${nextChapter}`}>
              <Button variant="ghost" size="sm" className="gap-1">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href={`/books/${bookId}`}>
              <Button variant="ghost" size="sm">
                Done
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
