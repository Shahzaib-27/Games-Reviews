import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <section id="home" 
    className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />

      <div className="relative z-10 sm:text-4x1 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-5x1 md:text-5xl font-bold mb-6 leading-tight "
        >
          Discover{" "}
          <span className="gradient-text">Honest</span>
          <br />
          Game Reviews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Your trusted source for in-depth, unbiased game reviews. No paid scores, just pure gaming passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => navigate("/morereviews")}
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-110 ml-5 mr-5 "
          >
            More Reviews
          </button>
          
          <button
            onClick={() => navigate("/topgamespage")}
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-110 ml-5 mr-5"
          >
            Top Rated Games

          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
