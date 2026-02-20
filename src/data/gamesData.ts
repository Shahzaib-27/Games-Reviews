

import game1 from "@/assets/God_of_War_Ragnarök_cover.jpg";
import game2 from "@/assets/Red_Dead_Redemption_II.jpg";
import game3 from "@/assets/Battlefield_2042_cover_art.jpg";
import game4 from "@/assets/Call_of_Duty_Modern_Warfare_(2019)_cover.jpg";
import game5 from "@/assets/Spider-Man_PS4_cover.jpg";
import game6 from "@/assets/Avengers_2020_cover_art.jpg";
import game7 from "@/assets/EA_FC24_Cover.jpg";
import game8 from "@/assets/Battlefield_1_cover_art.jpg";

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
  title: "God of War Ragnarök",
  image: game1,
  rating: 4.9,
  category: "RPG",
  shortDesc: "Kratos and Atreus embark on a mythological journey toward Ragnarök.",
  fullReview: "God of War Ragnarök is a masterpiece of storytelling and action combat. The Norse mythology setting is breathtaking, and the emotional depth between Kratos and Atreus elevates the narrative. Combat is brutal, fluid, and deeply satisfying.",
  pros: ["Emotional storytelling", "Incredible combat", "Stunning visuals"],
  cons: ["Very large install size"],
},
{
  id: 2,
  title: "Red Dead Redemption II",
  image: game2,
  rating: 5.0,
  category: "Adventure",
  shortDesc: "An epic western tale set in a vast and living open world.",
  fullReview: "Red Dead Redemption II sets a new benchmark for open-world games. Arthur Morgan’s journey is emotional and unforgettable. The world feels alive with realistic NPCs, wildlife, and dynamic events.",
  pros: ["Deep storytelling", "Living open world", "Incredible detail"],
  cons: ["Slow pacing at times"],
},
{
  id: 3,
  title: "Battlefield 2042",
  image: game3,
  rating: 3.8,
  category: "Shooter",
  shortDesc: "Futuristic large-scale warfare with dynamic weather events.",
  fullReview: "Battlefield 2042 introduces 128-player battles and massive maps with dynamic weather effects like tornadoes. While ambitious, the launch had technical issues. Updates have improved gameplay, but it still lacks the depth of previous entries.",
  pros: ["Large-scale chaos", "Dynamic weather system"],
  cons: ["Rough launch", "Missing classic features"],
},
{
  id: 4,
  title: "Call of Duty: Modern Warfare (2019)",
  image: game4,
  rating: 4.7,
  category: "Shooter",
  shortDesc: "A gritty reboot with realistic gunplay and a powerful campaign.",
  fullReview: "Modern Warfare (2019) revitalized the franchise with realistic visuals and impactful storytelling. Gunplay feels tight and tactical, and multiplayer remains highly competitive.",
  pros: ["Realistic gunplay", "Strong campaign", "Competitive multiplayer"],
  cons: ["Large file size"],
},
{
  id: 5,
  title: "Marvel’s Spider-Man",
  image: game5,
  rating: 4.8,
  category: "Action",
  shortDesc: "Swing through New York City in one of the best superhero games ever made.",
  fullReview: "Marvel’s Spider-Man perfectly captures the feeling of being Spider-Man. Web-swinging is fluid and exhilarating, combat is dynamic, and the story is heartfelt and engaging.",
  pros: ["Amazing web-swinging", "Strong story", "Fun combat"],
  cons: ["Some repetitive side missions"],
},
{
  id: 6,
  title: "Marvel's Avengers",
  image: game6,
  rating: 3.5,
  category: "Action",
  shortDesc: "Team up as Earth’s Mightiest Heroes in an action-packed superhero adventure.",
  fullReview: "Marvel's Avengers delivers cinematic superhero action with iconic characters like Iron Man, Thor, Hulk, and Captain America. While fun in co-op, repetitive missions hold it back.",
  pros: ["Fun superhero combat", "Great character performances"],
  cons: ["Repetitive missions", "Heavy grind elements"],
},
{
  id: 7,
  title: "EA Sports FC 24",
  image: game7,
  rating: 4.2,
  category: "Sports",
  shortDesc: "The next evolution of football gaming with improved realism.",
  fullReview: "EA Sports FC 24 continues the football simulation legacy with improved animations and refined gameplay mechanics. Online modes remain the most popular.",
  pros: ["Realistic gameplay", "Improved animations"],
  cons: ["Microtransactions"],
},
{
  id: 8,
  title: "Battlefield 1",
  image: game8,
  rating: 4.6,
  category: "Shooter",
  shortDesc: "A gripping World War I shooter with cinematic battles.",
  fullReview: "Battlefield 1 delivers emotional war stories and massive multiplayer battles with stunning environments and immersive sound design.",
  pros: ["Immersive atmosphere", "Massive battles", "Beautiful visuals"],
  cons: ["Limited weapon customization"],
}
];

export const categories = [
  { name: "Action", icon: "⚔️", color: "from-red-500 to-orange-500" },
  { name: "RPG", icon: "🛡️", color: "from-purple-500 to-indigo-500" },
  { name: "Adventure", icon: "🗺️", color: "from-emerald-500 to-teal-500" },
  { name: "Sports", icon: "🏎️", color: "from-blue-500 to-cyan-500" },
  { name: "Multiplayer", icon: "🌐", color: "from-pink-500 to-rose-500" },
  { name: "Indie", icon: "🎮", color: "from-amber-500 to-yellow-500" },
];
