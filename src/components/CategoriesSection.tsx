import { motion } from "framer-motion";
import { categories } from "@/data/gamesData";

const CategoriesSection = () => (
  <section id="categories" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Browse by <span className="gradient-text">Category</span>
        </h2>
        <p className="text-muted-foreground">Find your next favorite game</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card p-6 text-center cursor-pointer group"
          >
            <div className={`text-4xl mb-3 transition-transform duration-300 group-hover:scale-125`}>
              {cat.icon}
            </div>
            <span className="font-display text-sm font-semibold">{cat.name}</span>
            <div className={`h-0.5 w-0 group-hover:w-full mx-auto mt-3 rounded-full bg-gradient-to-r ${cat.color} transition-all duration-300`} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
