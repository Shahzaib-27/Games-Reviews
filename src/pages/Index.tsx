import { useState } from "react";
import { Game, gamesData } from "@/data/gamesData";
 
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedReviews from "@/components/FeaturedReviews";
import TopRatedGames from "@/components/TopRatedGames";
import SearchFilter from "@/components/SearchFilter";
import ReviewModal from "@/components/ReviewModal";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import GameFooter from "@/components/GameFooter";


const Index = () => {
  const [selectedGame, setSelectedGame] = useState < Game | null > ( null );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SearchFilter games={gamesData} onReadReview={setSelectedGame} />
      <FeaturedReviews games={gamesData} onReadReview={setSelectedGame} />
      <TopRatedGames games={gamesData} />
      <ContactSection />
      <GameFooter />
      <ReviewModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
};

export default Index;
