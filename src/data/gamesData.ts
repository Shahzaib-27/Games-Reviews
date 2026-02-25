

import game1 from "@/assets/God_of_War_Ragnarök_cover.jpg";
import game2 from "@/assets/Red_Dead_Redemption_II.jpg";
import game3 from "@/assets/Battlefield_2042_cover_art.jpg";
import game4 from "@/assets/Call_of_Duty_Modern_Warfare_(2019)_cover.jpg";
import game5 from "@/assets/AssassinsCreedValhalla.jpg";




import game6 from "@/assets/Avengers_2020_cover_art.jpg";

import game7 from "@/assets/EA_FC24_Cover.jpg";

import game8 from "@/assets/Battlefield_1_cover_art.jpg";
import game9 from "@/assets/Witcher-3.jpg";
import game10 from "@/assets/elden_ring_cover.jpg";
import game11 from "@/assets/cyberpunk_2077_cover.jpg";
import game12 from "@/assets/gta_v_cover.jpg";
import game13 from "@/assets/forza_horizon_5_cover.jpg";
import game14 from "@/assets/minecraft_cover.jpg";
import game15 from "@/assets/Spider-Man_PS4_cover.jpg";


import game16 from "@/assets/Destiny.jpg";
import game17 from "@/assets/Halo.jpg";
import game18 from "@/assets/TheLastOfUsPartII.jpg"



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
  featured: boolean;
}

export const gamesData: Game[] = [
  // title: "God of War Ragnarök",
{
  id: 1,
  title: "God of War Ragnarök",
  image: game1,
  rating: 5.0,
  category: "RPG",
  shortDesc: "Kratos and Atreus embark on a mythological journey toward Ragnarök.",
  fullReview: "God of War Ragnarök is a masterpiece of storytelling and action combat. The Norse mythology setting is breathtaking, and the emotional depth between Kratos and Atreus elevates the narrative. Combat is brutal, fluid, and deeply satisfying.",
  pros: ["Emotional storytelling", "Incredible combat", "Stunning visuals"],
  cons: ["Very large install size"],
  featured: true
},

// title: "Red Dead Redemption II",
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
  featured: true
},

// title: "Battlefield 2042",
{
  id: 3,
  title: "Battlefield 2042",
  image: game3,
  rating: 3.1,
  category: "Shooter",
  shortDesc: "Futuristic large-scale warfare with dynamic weather events.",
  fullReview: "Battlefield 2042 introduces 128-player battles and massive maps with dynamic weather effects like tornadoes. While ambitious, the launch had technical issues. Updates have improved gameplay, but it still lacks the depth of previous entries.",
  pros: ["Large-scale chaos", "Dynamic weather system"],
  cons: ["Rough launch", "Missing classic features"],
  featured: true
},

// title: "Call of Duty: Modern Warfare (2019)",
{
  id: 4,
  title: "Call of Duty: Modern Warfare (2019)",
  image: game4,
  rating: 4.5,
  category: "Shooter",
  shortDesc: "A gritty reboot with realistic gunplay and a powerful campaign.",
  fullReview: "Modern Warfare (2019) revitalized the franchise with realistic visuals and impactful storytelling. Gunplay feels tight and tactical, and multiplayer remains highly competitive.",
  pros: ["Realistic gunplay", "Strong campaign", "Competitive multiplayer"],
  cons: ["Large file size"],
  featured: true
},

// title: "Assassin's Creed Valhalla",
{
  id: 5,
  title: "Assassin's Creed Valhalla",
  image: game5,
  rating: 4.3,
  category: "RPG",
  shortDesc: "A Viking saga filled with brutal combat and rich storytelling.",
  fullReview: "Assassin's Creed Valhalla takes players to the age of Vikings, where you lead your clan from Norway to England. The game offers large open-world exploration, brutal combat mechanics, and deep RPG progression systems.",
  pros: ["Massive open world", "Strong storytelling", "Engaging combat"],
  cons: ["Repetitive side quests"],
  featured: true
},


// title: "Marvel's Avengers",
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
  featured: true
},

// title: "EA Sports FC 24",
{
  id: 7,
  title: "EA Sports FC 24",
  image: game7,
  rating: 4.8,
  category: "Sports",
  shortDesc: "The next evolution of football gaming with improved realism.",
  fullReview: "EA Sports FC 24 continues the football simulation legacy with improved animations and refined gameplay mechanics. Online modes remain the most popular.",
  pros: ["Realistic gameplay", "Improved animations"],
  cons: ["Microtransactions"],
  featured: true
},

// title: "Battlefield 1",
{
  id: 8,
  title: "Battlefield 1",
  image: game8,
  rating: 4.9,
  category: "Shooter",
  shortDesc: "A gripping World War I shooter with cinematic battles.",
  fullReview: "Battlefield 1 delivers emotional war stories and massive multiplayer battles with stunning environments and immersive sound design.",
  pros: ["Immersive atmosphere", "Massive battles", "Beautiful visuals"],
  cons: ["Limited weapon customization"],
  featured: true
},

//  title: "The Witcher 3: Wild Hunt",
{
  id: 9,
  title: "The Witcher 3: Wild Hunt",
  image: game9,
  rating: 4.9,
  category: "RPG",
  shortDesc: "A masterpiece open-world RPG following Geralt of Rivia in a dark fantasy world.",
  fullReview: "The Witcher 3: Wild Hunt is widely regarded as one of the greatest RPGs ever made. You play as Geralt of Rivia, a monster hunter navigating a morally complex world filled with political conflict, supernatural creatures, and emotional storytelling. The open world is massive and alive with meaningful side quests that often rival the main story. Combat is strategic, dialogue choices matter, and the expansions add even more depth to an already unforgettable experience.",
  pros: [
    "Deep and emotional storytelling",
    "Massive open world",
    "Meaningful side quests",
    "Excellent expansions"
  ],
  cons: [
    "Combat can feel repetitive",
    "Steep learning curve for beginners"
  ],
  featured: true
},

// title: "Elden Ring",
{
  id: 10,
  title: "Elden Ring",
  image: game10,
  rating: 4.9,
  category: "RPG",
  shortDesc: "A brutal yet breathtaking open-world action RPG from FromSoftware.",
  fullReview: "Elden Ring blends challenging Souls-style combat with a massive open world filled with secrets. Exploration feels rewarding, bosses are unforgettable, and build variety is nearly endless. A true modern RPG masterpiece.",
  pros: ["Deep combat system", "Massive open world", "Incredible boss fights"],
  cons: ["Very difficult for beginners"],
  featured: true
},

// title: "Elden Ring",
{
  id: 11,
  title: "Cyberpunk 2077",
  image: game11,
  rating: 4.0,
  category: "RPG",
  shortDesc: "A futuristic open-world RPG set in the neon city of Night City.",
  fullReview: "Cyberpunk 2077 delivers a visually stunning cyberpunk experience with deep customization and immersive storytelling. After major updates, the gameplay is smoother and more stable than ever.",
  pros: ["Beautiful city design", "Strong narrative", "Deep character builds"],
  cons: ["Had a rough launch"],
  featured: true
 
},

// title: "Elden Ring",
{
  id: 12,
  title: "Grand Theft Auto V",
  image: game12,
  rating: 4.8,
  category: "Adventure",
  shortDesc: "An iconic open-world crime saga set in Los Santos.",
  fullReview: "GTA V offers one of the most detailed open worlds ever created. With three playable characters and endless online content, it remains one of the most successful games of all time.",
  pros: ["Huge open world", "Multiple protagonists", "Massive online mode"],
  cons: ["Online grind can be heavy"],
  featured: true
  
},

//  title: "Forza Horizon 5",
{
  id: 13,
  title: "Forza Horizon 5",
  image: game13,
  rating: 3.5,
  category: "Sports",
  shortDesc: "An open-world racing experience set in vibrant Mexico.",
  fullReview: "Forza Horizon 5 delivers stunning visuals, smooth racing mechanics, and an enormous car roster. The dynamic seasons and events keep gameplay fresh and exciting.",
  pros: ["Beautiful graphics", "Huge car collection", "Smooth driving mechanics"],
  cons: ["Similar to previous entries"],
   featured: true

},

// itle: "Minecraft",
{
  id: 14,
  title: "Minecraft",
  image: game14,
  rating: 4.0,
  category: "Indie",
  shortDesc: "The ultimate sandbox game where creativity has no limits.",
  fullReview: "Minecraft allows players to build, explore, and survive in a procedurally generated block world. Its creative freedom and massive modding community make it one of the most influential games ever made.",
  pros: ["Unlimited creativity", "Huge mod community", "Multiplayer fun"],
  cons: ["Graphics are simple"],
   featured: true
},


// title: "Marvel’s Spider-Man",
{
  id: 15,
  title: "Marvel’s Spider-Man",
  image: game15,
  rating: 5.0,
  category: "Action",
  shortDesc: "Swing through New York City in one of the best superhero games ever made.",
  fullReview: "Marvel’s Spider-Man perfectly captures the feeling of being Spider-Man. Web-swinging is fluid and exhilarating, combat is dynamic, and the story is heartfelt and engaging.",
  pros: ["Amazing web-swinging", "Strong story", "Fun combat"],
  cons: ["Some repetitive side missions"],
  featured: true
},

{
  id: 16,
  title: "Destiny 2",
  image: game16,
  rating: 4.2,
  category: "Shooter",
  shortDesc: "A fast-paced sci-fi shooter with deep multiplayer content.",
  fullReview: "Destiny 2 blends FPS action with RPG mechanics in a rich sci-fi universe. Players team up for raids, PvP battles, and seasonal story updates with stunning visuals and satisfying gunplay.",
  pros: ["Great gunplay", "Frequent updates", "Co-op raids"],
  cons: ["Some content locked behind DLC"],
  featured: true
},
{
  id: 17,
  title: "Halo Infinite",
  image: game17,
  rating: 4.4,
  category: "Shooter",
  shortDesc: "Master Chief returns in an epic sci-fi adventure.",
  fullReview: "Halo Infinite brings back Master Chief in a semi-open world experience. With improved mobility, classic Halo gunplay, and a gripping campaign, it successfully revives the legendary franchise.",
  pros: ["Classic Halo feel", "Strong campaign", "Smooth multiplayer"],
  cons: ["Limited launch content"],
  featured: true
},

{
  id: 18,
  title: "The Last of Us Part II",
  image: game18,
  rating: 4.8,
  category: "Action",
  shortDesc: "An emotional journey of survival and revenge.",
  fullReview: "The Last of Us Part II delivers a powerful and emotional narrative with intense survival gameplay. Its cinematic presentation, detailed environments, and character development set a new benchmark for storytelling in games.",
  pros: ["Emotional storytelling", "Beautiful visuals", "Strong performances"],
  cons: ["Heavy themes may not appeal to everyone"],
  featured: true
}

];
