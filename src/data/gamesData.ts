import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import game6 from "@/assets/game-6.jpg";

export interface Game {
  id: number;
  title: string;
  image: string;
  rating: number;
  category: string;
  shortDesc: string;
  fullReview: string;
  pros: string[];
  cons: string[];
}

export const gamesData: Game[] = [
  {
    id: 1,
    title: "Ember of Souls",
    image: game1,
    rating: 4.8,
    category: "RPG",
    shortDesc: "A breathtaking dark fantasy RPG with deep combat and stunning world design.",
    fullReview: "Ember of Souls delivers an unforgettable journey through a meticulously crafted dark fantasy world. The combat system is deep and rewarding, offering countless build possibilities. Every corner of the map tells a story, and the atmospheric soundtrack elevates the experience to new heights. The boss encounters are some of the best in the genre, demanding strategy and skill in equal measure.",
    pros: ["Stunning world design", "Deep combat mechanics", "Incredible boss fights", "Rich lore"],
    cons: ["Steep learning curve", "Occasional frame drops"],
  },
  {
    id: 2,
    title: "Neon Strike",
    image: game2,
    rating: 4.5,
    category: "Action",
    shortDesc: "Fast-paced cyberpunk shooter with incredible visuals and tight gunplay.",
    fullReview: "Neon Strike sets a new standard for cyberpunk shooters. The gunplay is crisp and satisfying, with a wide arsenal of futuristic weapons. The neon-drenched cityscapes are gorgeous, and the story keeps you hooked from start to finish. Multiplayer modes add tremendous replay value with competitive and cooperative options.",
    pros: ["Tight gunplay", "Beautiful visuals", "Engaging story", "Great multiplayer"],
    cons: ["Short campaign", "Some balancing issues"],
  },
  {
    id: 3,
    title: "Velocity X",
    image: game3,
    rating: 4.2,
    category: "Sports",
    shortDesc: "The ultimate racing experience with photorealistic graphics and intense tracks.",
    fullReview: "Velocity X pushes the boundaries of racing games with photorealistic graphics and a physics engine that makes every turn feel real. The career mode is deep, with hundreds of cars to unlock and customize. Online racing is smooth and competitive, with seasonal events keeping the community engaged.",
    pros: ["Photorealistic graphics", "Deep career mode", "Excellent physics", "Regular updates"],
    cons: ["Aggressive microtransactions", "Long load times"],
  },
  {
    id: 4,
    title: "Lost Horizons",
    image: game4,
    rating: 4.7,
    category: "Adventure",
    shortDesc: "An epic adventure through ancient ruins with mind-bending puzzles.",
    fullReview: "Lost Horizons is a masterclass in adventure game design. The ancient ruins you explore are filled with clever puzzles that never feel unfair. The story unfolds beautifully, revealing a rich mythology. The sense of discovery when entering a new area is unmatched, and the dynamic weather system adds incredible atmosphere.",
    pros: ["Brilliant puzzles", "Rich mythology", "Sense of discovery", "Dynamic weather"],
    cons: ["Combat feels secondary", "Some backtracking"],
  },
  {
    id: 5,
    title: "Starfront Command",
    image: game5,
    rating: 4.6,
    category: "Multiplayer",
    shortDesc: "Epic space battles with massive fleet combat and strategic depth.",
    fullReview: "Starfront Command delivers the space combat experience fans have been waiting for. Commanding your fleet through massive battles is exhilarating. The strategic layer adds depth, requiring careful resource management and tactical positioning. Co-op campaigns with friends are an absolute blast.",
    pros: ["Massive scale battles", "Strategic depth", "Great co-op", "Active community"],
    cons: ["Requires dedicated time", "Complex for newcomers"],
  },
  {
    id: 6,
    title: "Pixel Pals",
    image: game6,
    rating: 4.3,
    category: "Indie",
    shortDesc: "A charming indie platformer with vibrant pixel art and creative level design.",
    fullReview: "Pixel Pals proves that indie games can compete with the best. The pixel art is gorgeous and full of personality. Level design is creative and challenging without being frustrating. The soundtrack is catchy and perfectly complements the whimsical world. A hidden gem that deserves way more attention.",
    pros: ["Gorgeous pixel art", "Creative levels", "Amazing soundtrack", "Affordable price"],
    cons: ["Relatively short", "Limited replay value"],
  },
];

export const categories = [
  { name: "Action", icon: "⚔️", color: "from-red-500 to-orange-500" },
  { name: "RPG", icon: "🛡️", color: "from-purple-500 to-indigo-500" },
  { name: "Adventure", icon: "🗺️", color: "from-emerald-500 to-teal-500" },
  { name: "Sports", icon: "🏎️", color: "from-blue-500 to-cyan-500" },
  { name: "Multiplayer", icon: "🌐", color: "from-pink-500 to-rose-500" },
  { name: "Indie", icon: "🎮", color: "from-amber-500 to-yellow-500" },
];
