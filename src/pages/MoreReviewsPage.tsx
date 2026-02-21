import { useState } from "react";
import { Game, gamesData } from "@/data/gamesData";

import FeaturedReviews from "@/components/FeaturedReviews";
import Navbar from "@/components/Navbar";
import GameFooter from "@/components/GameFooter";

const MoreReviews = () => {
      
    const [selectedGame, setSelectedGame] = useState < Game | null > ( null );

    return (
    <>
    <Navbar />
    <div className="min-h-screen  text-foreground px-6 py-12 bg-gradient-to-b from-background/70 via-background/50 to-background bg-blue-950 flex ">
        <div className="p-10 mt-2  bg-gradient">
        <FeaturedReviews games={gamesData} onReadReview={setSelectedGame}/>
    </div>
    </div>   
    <GameFooter />
    </>
  );
};

export default MoreReviews;