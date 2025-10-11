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

And Anvi had been inside it longer than him.

"Why help me?" he asked.

Anvi smiled slightly. Not warmth. Not trust. Just calculation.

"Because I want to win."

Rudra nodded.

Two players now.

And the game had just changed.`,
      },
    ],
  },
};
