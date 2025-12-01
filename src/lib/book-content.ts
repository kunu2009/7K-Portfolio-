export const bookData: Record<string, any> = {
  ethos: {
    title: 'Ethos and Thought',
    author: 'Kunal Paresh Chheda',
    rating: 4.5,
    pages: 193,
    language: 'ENG',
    coverImage: '/images/books/ethos-cover.png',
    synopsis: 'This chapter names the two central instruments of this book and shows how they shape the world you design, lead, and live inside. I offer precise definitions, a few guiding metaphors, concrete stories from product work and community projects, and repeatable practices you can use today to surface assumptions and rewire defaults.',
    chapters: [
      { id: 1, title: 'Ethos and Thought', pages: '1-15' },
      { id: 2, title: 'Dharma, Karma, Moksha', pages: '16-29' },
      { id: 3, title: 'Reason Humanism Individualism', pages: '30-43' },
      { id: 4, title: 'Spirituality and Secularism', pages: '44-57' },
      { id: 5, title: 'Community and Individualism', pages: '58-71' },
      { id: 6, title: 'Symbolism in Art and Architecture', pages: '72-85' },
      { id: 7, title: 'Education and Knowledge Systems', pages: '86-99' },
      { id: 8, title: 'How Values Shape Tech Design', pages: '100-113' },
      { id: 9, title: 'Globalization and Ethical Fusion', pages: '114-127' },
      { id: 10, title: 'Rituals Habits and Inner Work', pages: '128-141' },
      { id: 11, title: 'Organizational Design Structures', pages: '142-155' },
      { id: 12, title: 'A Minimal Manifesto', pages: '156-193' },
    ],
  },
  kupgames: {
    title: 'The Kup Games',
    author: 'Kunal Paresh Chheda',
    rating: 4.7,
    pages: 160,
    language: 'ENG',
    coverImage: '/images/books/kupgames-cover.png',
    synopsis: 'Jack and Jill is the story of a boy and a girl who went up a hill together. They went to fetch a pail of water, but unfortunately, their plan is disrupted when Jack came. Not only do the main characters face obstacles in their quest for water, but they also encounter mysterious forces in Kupam that test their courage and wit.',
    chapters: [
      { id: 1, title: 'The Arrival at Kupam', pages: '1-32' },
      { id: 2, title: 'The First Crack', pages: '33-64' },
      { id: 3, title: 'The Disappearance', pages: '65-96' },
      { id: 4, title: 'The Watcher', pages: '97-128' },
      { id: 5, title: 'The Enemy or the Ally', pages: '129-160' },
    ],
  },
  'somaiya-survival': {
    title: 'The Somaiya Survival Manual',
    author: 'Kunal Paresh Chheda',
    rating: 4.9,
    pages: 120,
    language: 'ENG',
    coverImage: '/images/books/somaiya-survival-cover.png',
    synopsis: 'Everything you need to know to survive and thrive at KJ Somaiya College. From navigating Gate 3 to acing your exams, from finding the best food spots to making lifelong friends—this is the unofficial guide every Somaiya student wishes they had on Day 1.',
    chapters: [
      { id: 1, title: 'Welcome to Somaiya', pages: '1-15' },
      { id: 2, title: 'The Campus Map (The Real One)', pages: '16-28' },
      { id: 3, title: 'Gate Politics 101', pages: '29-38' },
      { id: 4, title: 'Library Survival Guide', pages: '39-50' },
      { id: 5, title: 'The Food Bible', pages: '51-64' },
      { id: 6, title: 'Professor Types & How to Handle Them', pages: '65-78' },
      { id: 7, title: 'Exam Hacks That Actually Work', pages: '79-95' },
      { id: 8, title: 'The Unwritten Rules', pages: '96-120' },
    ],
  },
};

export const bookContent: Record<string, any> = {
  ethos: {
    title: 'Ethos and Thought',
    chapters: [
      {
        id: 1,
        title: 'Ethos and Thought',
        content: `This chapter names the two central instruments of this book and shows how they shape the world you design, lead, and live inside. I offer precise definitions, a few guiding metaphors, concrete stories from product work and community projects, and repeatable practices you can use today to surface assumptions and rewire defaults.

## What Ethos Is

Ethos is the visible grammar of a place or people. It is the pattern you step into the moment you cross a threshold: the rituals, the habits, the expectations, the way authority is spoken for, the tacit rules that make some actions sensible and others unthinkable. Ethos is made of objects and rituals as much as of laws and roles. It is an architecture of belonging.

**Components of ethos:**
- **Rituals**: repeated acts that structure time and attention.
- **Roles**: stable social positions with expected duties.
- **Artifacts**: objects and spaces that encode use and value.
- **Narratives**: shared stories that make actions meaningful.
- **Defaults**: what systems assume by omission.

Ethos explains why two communities can inhabit the same product and experience it as different things. It isn't only cultural in the exotic sense; workplaces, families, and online communities all have ethos.

## What Thought Is

Thought names the disciplined habits of attention and reasoning cultivated by people and institutions. Thought is how a culture prizes certain questions, trains its practitioners to argue, and forms the mental routines that become reliable tools.

**Shapes of thought:**
- **Disciplines**: formal methods like experiment, critique, and craft.
- **Attention habits**: what people habitually notice and ignore.
- **Argument styles**: what counts as sufficient evidence or a convincing story.
- **Imaginative repertoires**: the metaphors and mental models at hand.

Thought is portable; you can train it, teach it, borrow it. Thought can travel across cultures, but it will land differently depending on ethos.

## How Ethos and Thought Interact

Ethos and thought are not separate spheres that simply coexist. They are mutually formative.

- Ethos channels thought by privileging some questions and muting others.
- Thought reshapes ethos when practices and arguments become widely adopted and institutionalized.
- Ethos stabilizes thought by making certain habits easy to reproduce.
- Thought destabilizes ethos when new ideas expose old defaults as brittle.

Think of ethos as the field and thought as the weather. Weather patterns (thoughts) move across the field (ethos) and over time change what kinds of plants thrive there.

## The Grid and the Brushstroke Design Metaphor

For designers and makers, this relationship is best understood through a practical metaphor.

- **Ethos is the grid**. It defines columns, margins, and the invisible logic that gives compositional coherence. It constrains and enables.
- **Thought is the brushstroke**. It is the agentive gesture that moves across the grid, sometimes honoring it, sometimes subverting it.

Design choices are decisions about where the brushstroke may land and what the grid privileges by default. When you change a default—privacy settings, shared accounts, onboarding copy—you are shifting the grid. When you teach a team a new review habit or a new cognitive model, you are training the brushstroke.

## A Short, Grounded Anecdote

When I first worked on a homescreen launcher intended for multi-person households, interviews suggested a collision between two logics. Younger testers wanted quick, personalized access to apps. Elders wanted the screen to carry a short daily notice: the family task, the timings for prayer or school pickup, and the neighborhood announcement. The team's prototype optimized for single-user shortcuts—the prevailing product thought of "most used app first." The elders consistently ignored it.

We changed the default: the top row now included a small communal strip that could be edited by anyone with a physical token at the device. Personal shortcuts remained, scrollable beneath. Adoption rose. The change revealed a simple truth: product defaults encode a civic posture. A default that assumes single-user autonomy invisibilizes collective obligations. A small design affordance made a different ethos legible and usable.`,
      },
      {
        id: 2,
        title: 'Dharma, Karma, Moksha',
        content: `This chapter reads three millennia-deep Indian concepts as practical design, leadership, and life heuristics. I translate their philosophical cores into concrete metaphors, product patterns, organizational rituals, and personal practices. My aim is not to present authoritative exegesis but to show how dharma, karma, and moksha can sharpen decision-making when you build systems that hold people, time, and responsibility.

## Mapping the Terms

- **Dharma** — a role-shaped architecture of duty, fit, and alignment. Dharma names what a person or thing is called to do in a context. It is neither abstract moralism nor blind obedience; it is a situated responsibility that makes systems coherent and predictable.
- **Karma** — patterned consequence and time-lagged feedback. Karma describes how actions propagate through systems, creating predictable returns, frictions, or amplifications across time. It is causal ecology, not fate.
- **Moksha** — the practice and design of graceful release. Moksha is the capacity to disentangle when attachments cease to serve flourishing. It is an exit that preserves dignity and continuity.

Read together, these three form a triadic design language: roles that hold systems steady (dharma), feedback that teaches them to adapt (karma), and exits that keep systems humane (moksha).

## Dharma as Role-Architecture

Dharma gives shape to expectations. In product and organizational design it maps to role clarity, responsibility rituals, and contextual affordances.

- **Role clarity reduces friction**. When everyone understands their dharma, coordination happens through expectations instead of continuous negotiation. A clear dharma lowers cognitive load and reduces the hidden labor of constant alignment.
- **Dharma is contextual**. What counts as a duty in one setting may be irrelevant in another. Good design surfaces context and maps responsibilities to it rather than imposing universal roles by default.
- **Dharma is relational and layered**. People hold multiple dharmas simultaneously—parent, engineer, mentor. Systems should allow layered identities rather than flattening them.

## Karma as Feedback Ecology

Karma helps you see the distributed consequences of design choices. It shifts attention from immediate metrics to long-run causal loops.

- **Small actions compound**. Tiny design nudges or managerial microbehaviors build accumulative effects over months and years.
- **Delays matter**. Karma highlights that effects often arrive after a lag—what you measure today may be the echo of an earlier design choice.
- **Feedback channels must be legible**. If a system's karma is opaque, people cannot learn from it. Make feedback interpretable and attributable.

## Moksha as Graceful Exit

Moksha reframes endings as design elements. Systems without humane exits accumulate tension and brittle workarounds.

- **Exit design preserves dignity**. Allowing people and components to leave gracefully reduces hidden costs of retention and conflict.
- **Surrender as feature**. Building the option to step away can increase long-term engagement because participants trust the system.
- **Moksha limits harm**. When attachments create harm—burnout, ossified processes, or toxic norms—exit pathways dissipate damage.`,
      },
    ],
  },
  kupgames: {
    title: 'The Kup Games',
    chapters: [
      {
        id: 1,
        title: 'The Arrival at Kupam',
        content: `The train screeched to a halt at the silent, sun-kissed station of Kupam. Dust hung thick in the warm air, and a few cattle dozed lazily beside the tracks. Students poured out of the compartments like ants from a cracked nest—chatting, laughing, bumping into each other with wide-eyed excitement.

But one figure stepped out without a word.

He adjusted his brown-tinted, aluminum-rimmed navigator spectacles, slung his modest black duffel over one shoulder, and scanned the surroundings. No smile. No comment. Just a quiet awareness.

His name was Rudra.

To most of his classmates, Rudra was a filler in the background—a polite, slightly awkward boy who said just enough to be ignored. Not a nerd, not a rebel, not a class clown. Just… there. He didn't try to shine, and people forgot him before they remembered him.

But what they didn't know: Rudra was anything but ordinary.

His shirt hid lean muscle built through years of secret training. His silence veiled a mind honed in chess, hacking, circuitry, languages, combat tactics—and more. While others crammed for tests and snapped selfies, Rudra spent nights building drones, cracking security systems, and pushing his body past the limits most adults never reached.

But he never told a soul. And he never needed to.

## First Day at Kupam

The field trip to Kupam was supposed to be for scientific observation—geology, weathering patterns, soil studies. To Rudra, it was something else entirely: a battlefield in disguise.

Within five minutes of arriving, the teachers were already scrambling with last-minute coordination, arguing over room allocations, and trying to control the overexcited batch. Rudra, unnoticed, had already memorized the campus layout, noted two exits, a half-collapsed wall near the boys' dorm, and which teacher looked like they could be manipulated if needed.

He moved silently, calculating.

When a classmate tripped over a broken step, he caught him mid-fall without blinking, nodded, and vanished before a "thank you" could form.

In the mess hall, he sat at the edge. Not lonely—strategic. He watched, listened. Already, alliances were forming, cliques tightening, secret romances whispering behind water bottles. Rudra catalogued it all.

He knew better than to get involved.

Until something forced him to.

It started small. One of the students lost his phone. Another claimed it was stolen. Accusations flew, a teacher threatened suspension. No one noticed Rudra watching quietly from his table, eyes hidden behind tinted lenses, reading lips, gestures, inconsistencies.

By nightfall, the phone was returned anonymously—placed perfectly beneath a loose floor tile, exactly where Rudra knew the actual thief had stashed it. No credit was given. No suspect identified. Just relief, confusion, and a lesson learned.

And Rudra? He simply finished tightening a small homemade antenna on the dorm roof, rerouting weak Wi-Fi signals to triple the speed.

No one knew who did it.

That's how he preferred it.

But the silence wouldn't last forever. Because Kupam had secrets—ones far beyond science, and Rudra could sense the undercurrent.

A storm was coming.

And he would face it alone.`,
      },
      {
        id: 2,
        title: 'The First Crack',
        content: `The second week at Kupam began like a slow simmer—quiet skies, chalky wind, and students finally adjusting to life outside the city. Lectures took place under banyan trees, experiments were scribbled in dusty notebooks, and the town's sleepy rhythm began lulling most of them into a false sense of peace.

But Rudra didn't believe in peace. Not without checking the locks twice.

He was on the terrace before sunrise, every morning—stretching, training, listening. It wasn't just habit; it was instinct. He could feel tension creeping into the air like pressure before a storm.

It broke on a Wednesday.

## Karthik's Target

The school was affiliated with a local private institute in Kupam, where a few regional students also joined the ICSE batch for the four-month field course. Among them was a boy named Karthik—loud, cocky, quick to laugh at his own jokes, and with an ego too big for the dorms.

Karthik had a habit of picking targets. And today, he picked the wrong one.

Dev, a soft-spoken student from Rudra's class, had left his laptop unattended in the common room. It was supposed to be a five-minute tea break. But when he returned, the screen was shattered. Brutally.

No one confessed.

Whispers spread fast—Karthik had been bragging about "teaching Dev a lesson" for making him look stupid during a geology quiz.

The teachers pretended to investigate. But nothing happened.

Dev didn't complain. He just swallowed his loss. That was the rule here: survive quietly.

But Rudra saw everything.

## Silent Justice

He'd watched Karthik's smirk as Dev passed by. He'd noticed the fresh bruise on Karthik's knuckles. And more importantly, he had footage.

He had installed a hidden pinhole camera in the common room three days ago—not because he expected trouble, but because Rudra always anticipated it.

That night, Rudra walked to the dark corner of the storage shed behind the dorms. He knelt beside a half-buried toolbox, unscrewed the false bottom, and retrieved a small chip from a mounted drive.

Minutes later, in his room, lit only by a flickering emergency light, he watched the footage on his own laptop—Karthik, furious, pacing, muttering. Then, without warning, he picked up Dev's laptop and smashed it against the iron bunk.

Rudra didn't flinch.

He didn't report it. He didn't speak to Karthik. He simply began setting the trap.

By morning, whispers of a strange message had begun circulating in the Kupam boys' WhatsApp group. Anonymous. A 10-second video: blurred, eerie, showing only the sound of smashing glass and Karthik's voice saying "You think you're smart, huh?"

Students were tense. Karthik looked pale. His confidence cracked.

Then the final nail: a printout of his class photo with the words "WE SEE WHO YOU REALLY ARE" was taped outside the staff room.

No one saw who did it.

Karthik was summoned. He stammered through the interrogation, sweating. He denied everything. But the fear had set in.

Later that evening, Rudra walked past Karthik in the corridor. Their eyes met.

Rudra didn't blink. Didn't smile.

He simply knew.

That night, Karthik left the common room alone. And didn't return for dinner.

Rudra sat silently in the shadows of the terrace, watching the stars. Calm. Detached. His job was done.

But this was only the beginning.

Kupam was starting to show its true face.`,
      },
      {
        id: 3,
        title: 'The Disappearance',
        content: `The next morning came wrapped in fog.

Kupam's skies had turned an unusual shade of dull gray, as if hiding something beneath. A strange hush had fallen over the school building—a kind of silence that made footsteps sound louder, whispers sound like shouts.

Roll call was taken at breakfast. Names ticked off. Everyone answered.

Except one.

Varun Desai.

## Missing

A quiet boy. Average in everything. He wasn't friends with many, wasn't hated by any. He simply existed, floating through the trip with the grace of someone used to being overlooked.

But today, his bed was made. Untouched.

His locker unopened.

His toothbrush still wet from the night before.

"Maybe he overslept," one teacher muttered. Another rolled their eyes. "Kids these days—too many late-night phone calls."

But Rudra knew better.

People didn't just disappear. Not without noise. Not without a trace. Especially not in Kupam.

By mid-morning, the teachers began to worry. Staff searched the dorms, the mess hall, the library—even the toilet blocks. No one had seen Varun since last night.

Rudra stood beside the banyan tree as the chaos unfolded, arms folded, watching. His thoughts were cold. Precise.

Varun never went beyond the main gate alone. He had a sprained ankle two weeks ago. He walked with a limp. So where could he have gone?

## The Investigation

At lunch, the principal called the local police. A report was filed.

That night, the air grew tenser. Students stayed in their rooms. Rumors exploded like fireworks.

"He ran away."

"No, someone took him."

"I heard he was cursed… something about that stone he picked up from the forest on the weekend."

Rudra ignored the noise.

Instead, he spent the night walking alone—retracing Varun's routine. The library. The backside of the science lab. The rusted fence near the pump room. Nothing stood out.

Until he reached the abandoned biology lab.

It had been shut for years—part of an old wing of the institute damaged in a landslide. It was supposed to be off-limits. Yet Rudra noticed something subtle: a trail of flattened grass, almost invisible, leading from the side of the new lab to the old building.

He followed it.

At the rear window of the abandoned lab, Rudra knelt. The lock on the grille had been tampered with—slightly bent, as if someone forced it open with a crowbar.

He didn't enter. Not yet. It was too risky. He had no backup, no reason to be there.

But his gut screamed.

Back at the dorm, he pulled out a map of the compound he'd sketched weeks ago. He circled the old lab, highlighted the blind spots in camera coverage, noted every room that had remained unsearched by staff.

He didn't know what he was about to uncover. But Varun hadn't run away. Rudra was certain of it.

Something darker was happening in Kupam.

And whatever it was… it had begun to notice Rudra too.`,
      },
      {
        id: 4,
        title: 'The Watcher',
        content: `Something had shifted.

Rudra wasn't sure when it began—maybe it was the cold draft that crept through the dorm window despite it being shut, or maybe it was the way the corridor lights flickered exactly when he passed. Small things. Things no one else noticed.

But Rudra noticed everything.

He kept his expression blank, his voice calm. He didn't want the others to know what he suspected: someone was watching him.

## Being Watched

The problem wasn't fear. Rudra didn't fear. Not in the way others did. What unsettled him was the precision of it.

Whoever it was, they were skilled.

For two nights, he ran silent tests. He placed a thin thread of fishing wire across the hallway door—twice it was disturbed, though no one admitted entering. He rubbed chalk dust lightly over the floor near his bedside—twice the prints came and vanished by morning.

Then came the messages.

Slipped under his pillow in the middle of the night. Typed on old, yellowed paper. No signature.

"You're not the only one with eyes."

"Curiosity kills more than cats."

"You were never invisible. Just unimportant. Until now."

Rudra didn't flinch.

But a part of him, buried under years of training and logic, felt something. Not fear. Not paranoia.

Something worse—recognition.

## The Discovery

It was like facing a mirror in the dark: blurred, distorted, but undeniably familiar.

He'd spent years learning to predict people. To read their patterns, manipulate outcomes, stay three steps ahead. But now, someone was doing it to him.

At breakfast, he noticed the stares. Not obvious ones—calculated glances. People looking and quickly looking away. Was it guilt? Fear? Or was he imagining it?

In the afternoon, Rudra skipped the lecture. Instead, he returned to the abandoned biology lab—this time with gloves, a flashlight, and a crowbar.

The door gave way with a groan.

Inside, the air was thick with dust and something else… a sharp, metallic stench. He scanned the room: broken furniture, scattered books, old jars of formaldehyde. Nothing obvious.

Until he found the mirror.

Large. Cracked. Leaning against the far wall.

It hadn't been there before. He was sure.

He approached slowly.

Written in jagged letters on the surface—using what looked like dried red ink—were four words:

"You are not alone."

Behind the mirror, hidden in the wall cavity, he found a camera. Modern. Wireless. Streaming.

Someone had been watching the lab.

Rudra's breath didn't quicken. His hands didn't shake. But inside, the calm shattered slightly.

This wasn't just about Varun anymore.

This was a game.

And Rudra was no longer the only player.`,
      },
      {
        id: 5,
        title: 'The Enemy or the Ally',
        content: `The camera was slick. Professional. Not the kind of device a student could easily buy, not without leaving a trail. Rudra dismantled it quickly, took the chip, crushed the lens. No fingerprints, no serials.

He was being hunted—but by who, and why?

He didn't sleep that night. He lay in bed, eyes open, heart steady, brain spiraling through possibilities. He had enemies. Not many, but enough. Most didn't even know he existed. But this… this was personal.

By morning, he had a new plan.

He needed to draw them out.

## Making Contact

So during lunch, he did something he never did—he spoke.

Not to a teacher. Not to Dev or Karthik. He walked straight to the table where the regional students sat—the locals from Kupam who had joined the ICSE batch—and sat down without a word.

The table fell silent.

They stared at him.

One girl didn't.

She kept eating her food without pause. Her presence was different—calm, controlled, dangerous.

Her name was Anvi Rao.

She was known for being brilliant but detached. Topped the local board exams. Spoke five languages. Once punched a guy for taking her pen without asking. People called her cold. But Rudra saw it differently.

She was a mirror.

Another version of himself—reflected in a different skin.

"You've been watching too," he said softly, barely audible.

Anvi didn't look up. But her hand paused for just a second.

Then: "You're late. I've been waiting."

Rudra's jaw tightened.

"You knew?"

"I suspected. They made their first mistake last month." She wiped her mouth and stood up. "Walk with me."

## The Truth

They moved to the edge of the campus, near the broken stone fence where no one ever came. Wind rustled dry leaves across the dirt.

Anvi spoke quietly, clinically.

"Two students have gone missing in the last three years. Both from other field groups. Both reported as runaways. One was found in a ditch, half a kilometer from town. Head trauma. No investigation."

Rudra stared at her. "And you knew this?"

"I didn't care… until now. Until they started watching me too."

"So this is a game."

She met his gaze. Her eyes were steel.

"No. This is a test."

Rudra felt the pieces locking into place. The notes. The surveillance. The manipulation. The cracked mirror. The careful silence.

Someone was building something in Kupam.
`
      }
    ]
  },
  'somaiya-survival': {
    title: 'The Somaiya Survival Manual',
    chapters: [
      {
        id: 1,
        title: 'Welcome to Somaiya',
        content: `# Welcome to Somaiya

## Your First Day

Congratulations! You've made it to KJ Somaiya College. Whether you're in Vidyavihar, Ghatkopar, or any of the sprawling campuses, you're about to embark on an adventure that will shape the next few years of your life.

But let's be honest—no one gives you a real guide. They give you a prospectus full of achievements, a campus map that makes no sense, and a senior who's too busy to explain anything properly.

That's why this book exists.

## The First Week Survival Kit

What you actually need:

### Physical Items
- **ID Card**: Guard it with your life. Seriously. Read Chapter 3.
- **Water bottle**: Dehydration is real, and the lines at the canteen are longer.
- **Power bank**: Because every classroom outlet is mysteriously broken.
- **Earphones**: For the commute, the library, and tuning out that one loud group.
- **Umbrella**: Mumbai weather doesn't care about your plans.

### Mental Preparation
- **Patience**: Lines are long. Always.
- **Flexibility**: Your schedule will change. Accept it.
- **Curiosity**: Explore every corner of campus in the first month.
- **Humility**: You don't know everything. Neither does anyone else.

## The Unspoken Rules (Preview)

1. The first bench is a commitment, not a choice.
2. The last bench is also a commitment, just a different kind.
3. "5 more minutes" from a professor means 15-20 minutes.
4. The WiFi works. Sometimes. In specific spots. That change randomly.
5. Always, ALWAYS, keep your ID card somewhere accessible.

## How to Use This Book

This isn't a textbook. Don't read it in order unless you want to.

- **Feeling lost on campus?** → Chapter 2
- **Gate giving you trouble?** → Chapter 3
- **Library stress?** → Chapter 4
- **Hungry?** → Chapter 5
- **Professor problems?** → Chapter 6
- **Exam panic?** → Chapter 7
- **General life advice?** → Chapter 8

Welcome to the family. Let's survive this together.

---

*"The journey of a thousand assignments begins with a single attendance."*
— Ancient Somaiya Proverb (just made up)
`
      },
      {
        id: 2,
        title: 'The Campus Map (The Real One)',
        content: `# The Campus Map (The Real One)

## Why the Official Map Doesn't Help

The official map shows you buildings. Great. But it doesn't tell you:
- Which staircase is faster
- Where the secret shortcuts are
- Which bathrooms are actually clean
- Where you can nap without being caught
- The optimal route between buildings

This chapter fixes that.

## Key Locations You Need to Know

### The Gates

**Gate 1 (Main Gate)**
- The "formal" entrance
- Where parents drop you off
- Where you pretend to look responsible

**Gate 3 (The Daily Gate)**
- Your actual daily entrance
- Where the ID card drama happens
- Has the strictest security
- Pro tip: 8:00-8:30 AM is chaos. Plan accordingly.

**Gate 5 (The Escape Route)**
- Less crowded
- Useful for late entries
- Sometimes closed randomly

### Buildings Decoded

| Official Name | What Students Call It | What Actually Happens There |
|---------------|----------------------|----------------------------|
| Main Building | "Main" | Admin stuff, principal's office, avoid unless necessary |
| IT Block | "IT Block" | Computer labs, AC, the good WiFi |
| Library | "Lib" | Studying, "studying", sleeping, judging others |
| Canteen | "Canteen" | Food, gossip, failed diet plans |
| Seminar Hall | "Seminar" | Events, lectures no one wanted, AC naps |

### The Secret Spots

**Best Places to Study (That Aren't the Library)**
1. The benches near the garden (morning only, gets hot)
2. Empty classrooms after 4 PM
3. The corner of the IT lab (if you have access)

**Best Places to Chill**
1. Canteen (obviously)
2. The staircase no one uses (you'll find it)
3. Behind the auditorium (if it's not event season)

**Best Places to Nap**
1. Library basement (if your college has one)
2. Back benches of any empty classroom
3. The infirmary (claim a headache, get 30 minutes of peace)

## Navigation Tips

### The Fastest Routes

**From Gate 3 to IT Block:**
Skip the main path. Take the left side, past the parking, through the small garden. Saves 3 minutes.

**From Canteen to Library:**
Don't go through the main corridor during break time. Take the side stairs.

**From Any Building to Exit (When You're Late):**
Know your staircase. Right staircase is always less crowded after 4 PM.

### The WiFi Map

Yes, WiFi strength varies by location. Here's the unofficial map:

- **Strong Signal**: IT labs, library (ground floor), main admin building
- **Medium Signal**: Canteen (spotty), classrooms (varies)
- **Weak Signal**: Staircases, some corridors, your exact seat somehow
- **No Signal**: That one corner in every building, parking lot

---

*Navigate smart, not hard.*
`
      },
      {
        id: 3,
        title: 'Gate Politics 101',
        content: `# Gate Politics 101

## Understanding the System

The gates of Somaiya aren't just entry points—they're the first line of defense, the gatekeepers of attendance, and the source of countless stories of triumph and tragedy.

## The Players

### Security Guards

They've seen it all:
- The "I forgot my ID" excuse (1000+ times daily)
- The "I'm just going to the canteen" lie
- The dramatic phone calls to parents
- The tears (don't try this)

**How to Get on Their Good Side:**
1. Be consistently polite (it works over time)
2. Actually have your ID ready
3. Don't argue—negotiate calmly
4. Morning greetings go a long way

### The ID Card

Your ID card is:
- Your passport
- Your identity
- Your key to literally everything
- Somehow always in the wrong pocket

**ID Card Protection Tips:**
- Keep it in the same spot ALWAYS
- Take a photo of it (backup)
- Consider a lanyard (uncool but effective)
- Never lend it to anyone

## Common Scenarios and Solutions

### Scenario 1: Forgot Your ID

**Reality Check**: You will forget it. Everyone does.

**What to Do:**
1. Check your bag thoroughly (all pockets)
2. Check if you have a photo on your phone
3. Call a friend inside to vouch for you
4. As a last resort, call home

**What NOT to Do:**
- Argue aggressively
- Try to sneak in (you will be caught)
- Cry (won't help, just embarrassing)
- Claim you're a VIP's relative

### Scenario 2: Late Entry

The gates get stricter after class starts.

**How to Handle:**
1. Be honest: "Traffic problem"
2. Have a genuine-looking late excuse
3. Some guards track repeat offenders, so vary your gates

### Scenario 3: Re-entry (Leaving and Coming Back)

Want to grab lunch outside and come back? Here's the drill:
- Some colleges require you to sign out/in
- Keep your ID visible
- Don't take too long—guards remember faces

## Gate Timing Strategy

| Time | Crowd Level | Guard Mood | Pro Tip |
|------|-------------|------------|---------|
| 7:30-8:00 | Low | Fresh | Best entry time |
| 8:00-8:30 | CHAOS | Stressed | Avoid if possible |
| 8:30-9:00 | Medium | Strict | ID ready, be quick |
| 12:00-1:30 | High | Lunch mood | Easier re-entry |
| 4:00-5:00 | Rush | Tired | Exit is fine, entry strict |

## The Ultimate Gate Hack

**Build a relationship over time.**

- Same greeting every day
- Same gate if possible
- Remember their names (if they share)
- Be the student they don't have to worry about

After a semester, they'll remember your face. This is when "forgot my ID" becomes a minor issue instead of a major drama.

---

*The gate sees all, knows all, judges all. Respect it.*
`
      },
      {
        id: 4,
        title: 'Library Survival Guide',
        content: `# Library Survival Guide

## The Two Libraries

Somaiya typically has multiple libraries. Know the difference.

### Management/Main Library
- Stricter entry
- Quieter environment
- Better for focused study
- Book borrowing
- Computer access

### Department Libraries
- Easier access
- Subject-specific books
- Less crowded
- More relaxed rules

## Library Unwritten Rules

1. **The Seating Hierarchy**
   - First floor = Serious studiers
   - Ground floor = Group study (quiet)
   - Basement (if exists) = Nappers and question paper hunters

2. **The Phone Rule**
   - Officially: Silent/off
   - Reality: Silent, low brightness, pretend you're checking notes

3. **The Food Rule**
   - Officially: No food or drinks
   - Reality: Water bottles exist. Just don't be obvious with snacks.

## How to Find What You Need

### Books
1. Check the digital catalog (if available)
2. Know the call number system
3. Ask the librarian (they know everything)
4. Ask seniors (they know what's actually useful)

### Study Spots
1. Arrive early (before 9 AM for prime spots)
2. Corner seats = Less distraction
3. Near windows = Good for afternoon study
4. Near AC = Good for summer survival

### The Perfect Study Spot Criteria
- Power outlet nearby ✓
- Not directly under AC (too cold) ✓
- Not near the door (distractions) ✓
- Not at a creaky table ✓
- Cell signal still works ✓

## Library Hacks

### For Borrowing Books
- Check due dates immediately
- Renew online if possible
- Return on time (fines add up)
- Some books can't be borrowed—know which ones

### For Computer Access
- Log in and out properly
- Clear your browser history
- Don't save passwords
- Time limits exist—be aware

### For Exams
- Old question papers are gold—ask where to find them
- Group study rooms may need booking
- Library hours extend during exams (know the timing)

## The Library Ecosystem

**The Regulars:**
- The person who's always there (are they okay?)
- The group that whispers too loudly
- The one who takes calls outside (respect)
- The sleeper (we've all been there)

**Library Staff:**
- The strict one (don't cross them)
- The helpful one (cherish them)
- The one who's always on lunch break

## When NOT to Go to the Library

- During exam week (unless you arrive at 6 AM)
- When there's an event in the building
- Right after lunch (food coma + studying = sleeping)
- If you need to take calls

---

*The library is not just a building. It's a state of mind.*
`
      },
      {
        id: 5,
        title: 'The Food Bible',
        content: `# The Food Bible

## Campus Canteen Breakdown

### What to Expect
- Long lines during breaks
- Limited menu variety
- Surprisingly decent chai
- That one item everyone orders

### The Menu Decoded

| Item | Quality | Value | Wait Time |
|------|---------|-------|-----------|
| Vada Pav | ⭐⭐⭐⭐ | ₹30ish | 2 min |
| Samosa | ⭐⭐⭐ | ₹15ish | 3 min |
| Chai | ⭐⭐⭐⭐ | ₹10ish | 5 min (lines) |
| Cold Coffee | ⭐⭐⭐ | ₹50ish | 7 min |
| Full Meal | ⭐⭐⭐ | ₹80ish | 10+ min |

### Pro Tips for Canteen
1. Avoid 12:30-1:30 (peak chaos)
2. Go at 11 AM or 2 PM for peace
3. Know what you want before you queue
4. UPI is faster than cash
5. Find a regular counter person—builds rapport

## Off-Campus Food Zones

Every Somaiya campus has nearby areas with better food. Explore them.

### What's Usually Available Nearby
- Street food stalls (budget-friendly)
- Local restaurants (for when you want real food)
- Cafes (for the aesthetic Instagram people)
- Fast food chains (for consistency)

### Budget Categories

**Under ₹50:**
- Vada Pav, Samosa, Pav Bhaji stalls
- Chai tapri
- Bhel puri corners

**₹50-100:**
- Canteen meals
- Local thali places
- Dosa corners

**₹100-200:**
- Decent restaurants
- Combo meals
- Pizza/burger joints

**₹200+:**
- "Treating" friends
- Cafes
- When your parents send extra money

## Survival Eating Strategies

### When You're Broke
1. Canteen chai + biscuits = survival
2. Home tiffin if possible
3. Split meals with friends
4. The ₹30 vada pav is your friend

### When You're in a Hurry
1. Biscuit packets
2. Bananas (nature's fast food)
3. Pre-ordered canteen items
4. Energy bars

### When You Need to Impress
1. Know the "good" restaurant nearby
2. Book in advance if it's popular
3. Have 2-3 options ready for different budgets
4. Always have UPI ready

## Food Hacks

1. **Bring snacks from home**: Cheaper, healthier, always available
2. **Learn which stalls have the freshest food**: Morning is usually better
3. **Make friends with canteen staff**: Extra portion "sometimes" happens
4. **Know the timings**: Some stalls close early

## The Emergency Food Kit

Keep these in your bag:
- Energy bar / granola bar
- Biscuit packet
- Small water bottle
- ₹100 cash (for when UPI fails)

---

*A hungry student is a distracted student. Plan your meals.*
`
      },
      {
        id: 6,
        title: 'Professor Types & How to Handle Them',
        content: `# Professor Types & How to Handle Them

## Understanding the Species

Professors are not a monolith. Each type requires a different approach.

## The Classification

### Type 1: The Strict One
**Characteristics:**
- Attendance is sacred
- Late = locked out
- Phones are confiscated
- Assignments have zero tolerance

**How to Handle:**
- Be on time, always
- Sit in the front (shows respect)
- Actually prepare for their class
- Never make excuses—just apologize and improve

**The Silver Lining:**
You'll actually learn the subject well.

---

### Type 2: The Chill One
**Characteristics:**
- Attendance is flexible
- Late is "okay, come in"
- Actually makes jokes
- Treats students like adults

**How to Handle:**
- Don't abuse the flexibility
- Participate in discussions
- Submit work on time (they notice)
- Build a genuine rapport

**The Warning:**
Easy ≠ Good grades. You still need to work.

---

### Type 3: The Ancient One
**Characteristics:**
- Same notes for 20 years
- Stories from "their time"
- Slow speaking pace
- Surprisingly tough exams

**How to Handle:**
- Get previous year questions (they repeat)
- Note the keywords they emphasize
- Don't rush them with questions
- Respect their experience

---

### Type 4: The Researcher
**Characteristics:**
- Focused on their research, not teaching
- May go off-topic into their work
- Brilliant but sometimes incomprehensible
- Viva discussions can be gold

**How to Handle:**
- Show interest in their research
- Ask intelligent questions
- Learn from their methodology
- They can be great mentors for projects

---

### Type 5: The New One
**Characteristics:**
- Still figuring things out
- Might be nervous
- Often stricter to prove themselves
- Actually prepares well

**How to Handle:**
- Be kind (they're learning too)
- Don't exploit their newness
- Give genuine feedback if asked
- They'll remember helpful students later

---

## Universal Professor Rules

### What ALWAYS Works:
1. **Punctuality**: Arrive on time, submit on time
2. **Preparation**: Skim the topic before class
3. **Participation**: Ask one good question per week
4. **Politeness**: Basic manners go very far
5. **Professionalism**: Email them properly (subject line, greetings, signature)

### What NEVER Works:
1. Arguing in front of the class
2. Making excuses repeatedly
3. Copying obviously
4. Lying about attendance
5. Being on your phone constantly

## The Attendance Game

Attendance rules vary by professor. Know yours.

- Some take attendance at start (arrive early)
- Some take at end (don't leave early)
- Some take randomly (be present throughout)
- Some never take it (but will notice absence in viva)

## How to Email a Professor

**Email Template:**

**Subject:** [Course Name] - Query regarding [Topic]

Dear Professor [Last Name],

I am [Your Name] from [Year, Section].

I have a question regarding [specific topic] from today's lecture. 
[Ask your question clearly and concisely]

Thank you for your time.

Best regards,
[Your Name]
[Roll Number]

---

*Every professor was once a student. They get it more than you think.*
`
      },
      {
        id: 7,
        title: 'Exam Hacks That Actually Work',
        content: `# Exam Hacks That Actually Work

## Pre-Exam Strategy

### 2 Weeks Before
- **Gather resources**: Notes, question papers, study guides
- **Know the syllabus**: What's actually covered?
- **Identify weak areas**: Be honest with yourself
- **Form study groups**: But only with serious people

### 1 Week Before
- **Start revising**: Not reading—revising
- **Solve previous papers**: At least 3-5 years
- **Mock tests**: Time yourself
- **Sleep properly**: Pulling all-nighters starts the damage early

### Day Before
- **Light revision only**: No new topics
- **Pack your bag early**: ID, hall ticket, pens, water
- **Set multiple alarms**: At least 3
- **Sleep by 10 PM**: Your brain consolidates memory during sleep

### Exam Day
- **Wake early**: Time for breakfast and calm
- **Reach early**: Rushing = panic
- **Use the bathroom**: Before exam, not during
- **Read entire paper first**: Know what you're dealing with

## In-Exam Strategy

### Time Management

| Paper Length | Time Allocation |
|--------------|-----------------|
| 3 hours | 10 min reading + planning, 2.5 hours writing, 20 min review |
| 2 hours | 5 min reading, 1.5 hours writing, 25 min review |

### Question Selection
1. Read all questions first
2. Mark easy ones (do these first)
3. Allocate time per question based on marks
4. Don't get stuck on one question—move on

### Writing Strategy
- **Start with what you know**: Builds confidence
- **Use headings and bullets**: Easy for examiner to read
- **Draw diagrams**: Visual = extra marks
- **Write the formula first**: Even if you mess up, you get partial marks
- **Answer the question asked**: Not what you wish they asked

## What Actually Gets You Marks

### The Truth About Grading
1. **First impression matters**: Clean handwriting, proper margins
2. **Structure matters**: Introduction, body, conclusion
3. **Specific > Vague**: "The GDP grew by 7% in 2024" > "The GDP grew"
4. **Diagrams get marks**: Label them properly
5. **Answer all parts**: If it says A, B, C—write A, B, C

### Common Mistakes That Cost Marks
- Not reading the question fully
- Spending too much time on one question
- Skipping "easy" questions
- Illegible handwriting
- No conclusion/summary

## Subject-Specific Tips

### For Theory Subjects
- Memorize keywords
- Use examples
- Quote if relevant
- Structure your answers

### For Numerical Subjects
- Show all steps
- Write formulas
- Check calculations
- Box your final answer

### For Practical Exams
- Know your procedures
- Label everything
- Time your processes
- Stay calm if something goes wrong

## The Recovery Strategy

### If You Blank Out
1. Take 3 deep breaths
2. Close your eyes for 10 seconds
3. Write whatever keywords you remember
4. The brain often fills in gaps

### If You Run Out of Time
1. Write in bullet points
2. Skip introductions—go straight to points
3. Prioritize questions with more marks
4. Write "continued..." even if you can't continue (shows intent)

### If You Made a Mistake
1. Don't waste time feeling bad
2. Neatly cross out and rewrite
3. Move on—you have other questions
4. It happens to everyone

## Post-Exam Protocol

- Don't discuss answers immediately (anxiety spreads)
- Eat something
- Prepare for the next exam
- What's done is done

---

*Exams test preparation, not intelligence. Prepare smart.*
`
      },
      {
        id: 8,
        title: 'The Unwritten Rules',
        content: `# The Unwritten Rules

## The Rules Nobody Tells You

These aren't in any handbook. But break them at your own risk.

## Academic Unwritten Rules

### Attendance
- **75% is the official requirement**
- **85%+ is the safe zone** (for when life happens)
- Bunking is an art—know when, know limits
- The "one class won't matter" mindset is a trap

### Assignments
- Submitted ≠ Good
- Last minute work shows
- Plagiarism is checked—be smarter
- One good assignment > 5 copy-paste ones

### Group Projects
- Choose your team wisely
- One person always does more work—try not to be the one who does less
- Communication is everything
- Document contributions (CYA—Cover Your Achievements)

### Exams
- Previous papers are gold
- Study groups work IF everyone contributes
- All-nighters don't work for most people
- Exam week diet is temporary—don't make it permanent

## Social Unwritten Rules

### Making Friends
- First semester is for experimenting
- Your real friend group forms by second year
- Quality > Quantity
- Don't gossip—it comes back

### Seniors
- Respect doesn't mean fear
- Good seniors are mentors—find them
- Bad seniors exist—avoid them
- One day you'll be the senior—remember this

### Juniors
- Help them if you can
- Don't rag (it's illegal AND stupid)
- Share resources—your notes might save someone
- They'll remember kindness

### Relationships
- College relationships happen
- Breakups in the same class are awkward
- Keep it professional in group settings
- Your degree > Drama

## Professional Unwritten Rules

### Networking
- Every event is a networking event
- LinkedIn is mandatory by final year
- Alumni connections are underrated
- Help others get opportunities too

### Internships
- Start looking in second year
- College placements aren't the only option
- Skills > CGPA (after a threshold)
- Referrals work better than applications

### Career Building
- Build something—portfolio, project, skill
- Online presence matters
- Your batchmates are your first network
- College achievements expire—real skills don't

## Life Unwritten Rules

### Health
- Mental health matters as much as physical
- Sleep is not optional
- Eating junk daily will catch up
- Walk sometimes—between classes, to the station

### Money
- Track your spending
- UPI makes spending easy—too easy
- Emergency fund = 1 month expenses
- Learn to say no to expensive outings

### Time
- Time at college goes fast
- You'll miss it—eventually
- Don't spend it all in the canteen
- But don't spend it all studying either

## The Final Rules

1. **Show up**: Half of success is just being present
2. **Be kind**: People remember how you made them feel
3. **Ask for help**: No one succeeds alone
4. **Document everything**: Photos, notes, experiences
5. **Fail forward**: Mistakes are lessons
6. **Stay curious**: The learning doesn't stop at syllabus
7. **Have fun**: These years don't come back

## The Survival Philosophy

College is not just about passing exams. It's about:
- Finding what you're interested in
- Building relationships that last
- Learning how to learn
- Becoming an adult (gradually)
- Making memories worth keeping

The degree gets you the interview.
Everything else gets you the life.

---

*Survive first. Thrive next. Remember always.*

---

**You've reached the end of the Survival Manual.**

But your story is just beginning.

Welcome to Somaiya. Make it count.

— Kunal Chheda

P.S. If you found this useful, share it with the next batch. They'll need it too.
`
      }
    ]
  }
};
