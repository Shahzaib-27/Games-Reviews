
import { motion } from "framer-motion";

type Decalred = {
      id:number;
      label:string;
      href:string;
};

const FollowLinks:Decalred[] = [
      { id:1, label: "Instragram", href: "https://www.instagram.com/" },
      { id:2, label: "YouTube",    href: "https://www.youtube.com/" },
      { id:3, label: "Discord",    href:"https://discord.com/" },
      { id:4, label: "Twitter",    href:"https://x.com/" },
];

const AboutSection = () => (


<section  className="py-20 px-4">
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

        <div className="flex justify-center gap-3  lg:flex-row sm:flex-col w-full">
          {FollowLinks.map((social,index) => (
            <a
              key={index}
              target="_blank"
              href={social.href}
              className="p-2 rounded-lg border border-border text-sm sm:text-[20px] text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 flex-col flex
              "
            >
              <h5 className="text-sm lg:text-[20px] lg:p-1 ">{social.label}</h5>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
