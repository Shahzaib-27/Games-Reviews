import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" 
    className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
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
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Your trusted source for in-depth, unbiased game reviews. No paid scores, just pure gaming passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("reviews")}
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-110"
          >
            Browse Reviews
          </button>
          
          <button
            onClick={() => scrollTo("top-games")}
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-110"
          >
            Top Rated Games
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
