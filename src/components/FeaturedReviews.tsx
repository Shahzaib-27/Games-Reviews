import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Game } from "@/data/gamesData";

interface Props {
  games: Game[];
  onReadReview: (game: Game) => void;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={14}
        className={
          star <= Math.round(rating)
            ? "fill-star text-star"
            : "text-muted-foreground/30"
        }
      />
    ))}
    <span className="ml-1.5 text-sm text-muted-foreground">{rating}</span>
  </div>
);

const FeaturedReviews = ({ games, onReadReview }: Props) => (
  <section id="reviews" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">Reviews</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our latest in-depth reviews of the hottest games
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group hover-glow cursor-pointer"
            onClick={() => onReadReview(game)}
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 backdrop-blur-md text-primary border border-primary/30">
                {game.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold mb-2">{game.title}</h3>
              <StarRating rating={game.rating} />
              <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{game.shortDesc}</p>
              <button className="mt-4 text-sm font-semibold text-primary hover:text-accent transition-colors">
                Read Review →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedReviews;
