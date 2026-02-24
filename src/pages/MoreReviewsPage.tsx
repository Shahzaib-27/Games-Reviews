import { useState } from "react";
import { Game, gamesData } from "@/data/gamesData";
import { X, Star, ThumbsUp, ThumbsDown } from "lucide-react";

import FeaturedReviews from "@/components/FeaturedReviews";
import Navbar from "@/components/Navbar";
import GameFooter from "@/components/GameFooter";

const MoreReviews = () => {
  const [selectedGame, setSelectedGame] = useState < Game | null>(null);

  return (
    <>
      <Navbar />
        <div className="min-h-screen text-foreground px-12 py-12 bg-gradient-to-b from-background/70 via-background/50 to-background bg-blue-950">

        {/* SHOW ALL REVIEWS */}
        {!selectedGame && (
          <FeaturedReviews 
            games={gamesData} 
            onReadReview={setSelectedGame}
          />
        )}

        {/* SHOW FULL REVIEW */}
        {selectedGame && (
          <div className="max-w-4xl mx-auto bg-background/60 backdrop-blur-md p-8 rounded-xl shadow-lg mt-10 p-10 ">   
            <button
              onClick={() => setSelectedGame(null)}
              className="mb-6 text-primary hover:underline"
            >
              ← Back to Reviews
            </button>

            <img src={selectedGame.image} alt={selectedGame.title} 
            className="w-full h-40 object-contain mb-10 " />

            <div className="flex items-start justify-between mb-4">

              <div>
                <h2 className="font-display text-2xl font-bold">{selectedGame.title}</h2>
                <span className="text-sm text-primary">{selectedGame.category}</span>
              </div>

              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                <Star size={16} className="fill-star text-star" />
                <span className="font-display font-bold text-star">{selectedGame.rating}</span>
              </div>

            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{selectedGame.fullReview}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3">
                 
                  <ThumbsUp size={16} className="text-emerald-400" />
                  
                  <span className="font-display text-sm font-semibold text-emerald-400">
                    Pros
                  </span>
                
                </div>
               
                <ul className="space-y-1.5">
                  {selectedGame.pros.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground">+{p}</li>
                  ))}
                </ul>

              </div>

            <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-2 mb-3">
                 
                  <ThumbsDown size={16} className="text-red-400" />
                  
                  <span className="font-display text-sm font-semibold text-red-400">Cons</span>
               
                </div>
                
                <ul className="space-y-1.5">
                  {selectedGame.cons.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground">- {c}</li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        )}

      </div>

      <GameFooter />
    </>
  );
};

export default MoreReviews;