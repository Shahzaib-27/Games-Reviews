import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Game } from "@/data/gamesData";

interface Props {
  game: Game | null;
  onClose: () => void;
}

const ReviewModal = ({ game, onClose }: Props) => (
  <AnimatePresence>
    {game && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card neon-glow-cyan"
        >
          <div className="relative h-56 sm:h-64">
            <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-md hover:bg-background/80 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-display text-2xl font-bold">{game.title}</h2>
                <span className="text-sm text-primary">{game.category}</span>
              </div>
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                <Star size={16} className="fill-star text-star" />
                <span className="font-display font-bold text-star">{game.rating}</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{game.fullReview}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <ThumbsUp size={16} className="text-emerald-400" />
                  <span className="font-display text-sm font-semibold text-emerald-400">Pros</span>
                </div>
                <ul className="space-y-1.5">
                  {game.pros.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground">+ {p}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <ThumbsDown size={16} className="text-red-400" />
                  <span className="font-display text-sm font-semibold text-red-400">Cons</span>
                </div>
                <ul className="space-y-1.5">
                  {game.cons.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground">- {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ReviewModal;
