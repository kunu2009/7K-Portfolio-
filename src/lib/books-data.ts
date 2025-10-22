export interface BookChapter {
  id: number;
  title: string;
  pages: string;
  content?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  pages: number;
  language: string;
  coverImage: string;
  synopsis: string;
  category: string;
  chapters: BookChapter[];
}

export const booksData: Book[] = [
  {
    "id": "ethos",
    "title": "Ethos and Thought",
    "author": "Kunal Paresh Chheda",
    "rating": 4.5,
    "pages": 193,
    "language": "ENG",
    "coverImage": "/images/books/ethos-cover.png",
    "synopsis": "This chapter names the two central instruments of this book and shows how they shape the world you design, lead, and live inside. I offer precise definitions, a few guiding metaphors, concrete stories from product work and community projects, and repeatable practices you can use today to surface assumptions and rewire defaults.",
    "category": "Philosophy",
    "chapters": [
      {
        "id": 1,
        "title": "Ethos and Thought",
        "pages": "1-15"
      },
      {
        "id": 2,
        "title": "Dharma, Karma, Moksha",
        "pages": "16-29"
      },
      {
        "id": 3,
        "title": "Reason Humanism Individualism",
        "pages": "30-43"
      },
      {
        "id": 4,
        "title": "Spirituality and Secularism",
        "pages": "44-57"
      },
      {
        "id": 5,
        "title": "Community and Individualism",
        "pages": "58-71"
      },
      {
        "id": 6,
        "title": "Symbolism in Art and Architecture",
        "pages": "72-85"
      },
      {
        "id": 7,
        "title": "Education and Knowledge Systems",
        "pages": "86-99"
      },
      {
        "id": 8,
        "title": "How Values Shape Tech Design",
        "pages": "100-113"
      },
      {
        "id": 9,
        "title": "Globalization and Ethical Fusion",
        "pages": "114-127"
      },
      {
        "id": 10,
        "title": "Rituals Habits and Inner Work",
        "pages": "128-141"
      },
      {
        "id": 11,
        "title": "Organizational Design Structures",
        "pages": "142-155"
      },
      {
        "id": 12,
        "title": "A Minimal Manifesto",
        "pages": "156-193"
      }
    ]
  },
  {
    "id": "kupgames",
    "title": "The Kup Games",
    "author": "Kunal Paresh Chheda",
    "rating": 4.7,
    "pages": 160,
    "language": "ENG",
    "coverImage": "/images/books/kupgames-cover.png",
    "synopsis": "Jack and Jill is the story of a boy and a girl who went up a hill together. They went to fetch a pail of water, but unfortunately, their plan is disrupted when Jack came. Not only do the main characters face obstacles in their quest for water, but they also encounter mysterious forces in Kupam that test their courage and wit.",
    "category": "Mystery",
    "chapters": [
      {
        "id": 1,
        "title": "The Arrival at Kupam",
        "pages": "1-32"
      },
      {
        "id": 2,
        "title": "The First Crack",
        "pages": "33-64"
      },
      {
        "id": 3,
        "title": "The Disappearance",
        "pages": "65-96"
      },
      {
        "id": 4,
        "title": "The Watcher",
        "pages": "97-128"
      },
      {
        "id": 5,
        "title": "The Enemy or the Ally",
        "pages": "129-160"
      }
    ]
  }
];
