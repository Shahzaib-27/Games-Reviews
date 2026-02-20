import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          About <span className="gradient-text">GameReview</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
          GameReview is your trusted destination for honest, unbiased game reviews. Founded by passionate gamers, we believe every player deserves transparent insights before investing their time and money. No sponsored scores — just genuine opinions from people who love games.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          Our mission: to build the most trusted gaming community where reviews are written by gamers, for gamers.
        </p>
        <div className="flex justify-center gap-4">
          {["Twitter", "Discord", "YouTube", "Twitch"].map((social) => (
            <a
              key={social}
              href="#"
              className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            >
              {social}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
