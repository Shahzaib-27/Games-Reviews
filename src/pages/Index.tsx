import { useState } from "react";
import { Game, gamesData } from "@/data/gamesData";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedReviews from "@/components/FeaturedReviews";
import TopRatedGames from "@/components/TopRatedGames";
import CategoriesSection from "@/components/CategoriesSection";
import SearchFilter from "@/components/SearchFilter";
import ReviewModal from "@/components/ReviewModal";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import GameFooter from "@/components/GameFooter";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturedReviews games={gamesData} onReadReview={setSelectedGame} />
      <TopRatedGames games={gamesData} />
      <CategoriesSection />
      <SearchFilter games={gamesData} onReadReview={setSelectedGame} />
      <AboutSection />
      <ContactSection />
      <GameFooter />
      <BackToTop />
      <ReviewModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
};

export default Index;
