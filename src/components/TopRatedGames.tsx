import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Game } from "@/data/gamesData";

const TopRatedGames = ({ games }: { games: Game[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sorted = [...games].sort((a, b) => b.rating - a.rating);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section id="top-games" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Top <span className="gradient-text">Rated</span>
            </h2>
            <p className="text-muted-foreground">The highest rated games on GameVerse</p>
          </div>
          <div className="hidden sm:flex gap-2">
            
            <button onClick={() => scroll("left")} className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
              <ChevronLeft size={20} /> 
              </button>
            
            <button onClick={() => scroll("right")} className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
              <ChevronRight size={20} />
            </button>
            
          </div>
        </motion.div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x">
          {sorted.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-56 glass-card overflow-hidden group snap-start"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display text-sm font-semibold truncate">{game.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={12} className="fill-star text-star" />
                    <span className="text-xs font-bold text-star">{game.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedGames;
