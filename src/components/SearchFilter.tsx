import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Star, SlidersHorizontal } from "lucide-react";
import { Game } from "@/data/gamesData";

interface Props {
  games: Game[];
  onReadReview: (game: Game) => void;
}

const SearchFilter = ({ games, onReadReview }: Props) => {
  const [query, setQuery] = useState("");
  const [minRating, setMinRating] = useState(0);

  const results = useMemo(() => {
    return games.filter((g) => {
      const matchesQuery = g.title.toLowerCase().includes(query.toLowerCase());
      const matchesRating = g.rating >= minRating;
      return matchesQuery && matchesRating;
    });
  }, [games, query, minRating]);

  const showResults = query || minRating > 0;

  return (
    <section id="search" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Search <span className="gradient-text">Games</span>
          </h2>
          <p className="text-muted-foreground">Find any game in our collection</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by game name..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="relative">
              <SlidersHorizontal size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="pl-10 pr-8 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
              >
                <option value={0}>All Ratings</option>
                <option value={4}>4+ Stars</option>
                <option value={4.5}>4.5+ Stars</option>
                <option value={4.7}>4.7+ Stars</option>
              </select>
            </div>
          </div>

          {showResults && (
            <div className="mt-6 space-y-3">
              {results.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No games found</p>
              ) : (
                results.map((game) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => onReadReview(game)}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <img src={game.image} alt={game.title} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-semibold truncate">{game.title}</h4>
                      <span className="text-xs text-muted-foreground">{game.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-star text-star" />
                      <span className="text-sm font-semibold">{game.rating}</span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SearchFilter;
