import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Game } from "@/data/gamesData";
import { useState } from "react";

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
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground/30"
        }
      />
    ))}
    <span className="ml-1.5 text-sm text-muted-foreground">{rating}</span>
  </div>
);

const FeaturedReviews = ({ games, onReadReview } : Props) => {
  
  const  featuredGames = games?.filter(game => game.featured);
  const [ visibleCount, setVisibleCount] = useState(4);
  const  visibleGames = featuredGames.slice(0, visibleCount);

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10">

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Featured Reviews</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Our latest featured game reviews
          </p>
        
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">

          {visibleGames.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card h-full overflow-hidden group hover:shadow-[0px_0px_30px] hover:shadow-cyan-500 cursor-pointer transition-all duration-200 ease-in-out"
              onClick={() => onReadReview(game)}>

              <div className="relative h-50 overflow-hidden ">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"/>

                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black text-primary border border-primary/30">
                  {game.category}
                </span>

              </div>

              <div className="p-2 m-2 mt-10 ">
                <h3 className="font-display text-lg font-semibold mb-2 ">
                     {game.title}
                </h3>

                <StarRating rating={game.rating} />
                
                <p className="text-sm text-muted-foreground mt-3 line-clamp-2 ">
                  {game.shortDesc}
                </p>
                
                <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onReadReview(game);
                  }}  
                 className="mt-3 text-sm font-semibold text-primary hover:text-sky-500">
                  Read Review →
                </button>
              
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < featuredGames.length && (
          <div className="text-center mt-20">

            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              
              className="px-3 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all duration-150 ease-in-out">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedReviews;