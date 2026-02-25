import { useState } from "react";
import { Game, gamesData } from "@/data/gamesData";
import { X, Star, ThumbsUp, ThumbsDown } from "lucide-react";

import FeaturedReviews from "@/components/FeaturedReviews";
import ReviewModal from "@/components/ReviewModal";


import Navbar from "@/components/Navbar";
import GameFooter from "@/components/GameFooter";

const MoreReviews = () => {
  const [selectedGame, setSelectedGame] = useState < Game | null>(null);

  return (
    <>
      <Navbar />

        <div className="min-h-screen text-foreground px-12 py-12 bg-gradient-to-b from-background/70 via-background/50 to-background bg-blue-950">

        <div 
        //  onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} 
         >
          
           <FeaturedReviews games={gamesData} onReadReview={setSelectedGame} />
           <ReviewModal game={selectedGame} onClose={() => setSelectedGame(null)} />
        </div>
       </div>

      <GameFooter />
    </>
  );
};

export default MoreReviews;