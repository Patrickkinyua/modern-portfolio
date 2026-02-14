import React, { useState } from "react";
import { motion } from "framer-motion";

const knowledges = [
  // 🌐 Frontend
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },

  // ⚙️ Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 82, category: "Backend" },

  // 🗄️ Database
  { name: "MongoDB", level: 80, category: "Database" },

  // 🎨 Design & UI
  { name: "Responsive Design", level: 90, category: "Design" },

  // 🧰 Core Tools
  { name: "Git & GitHub", level: 90, category: "Tools" },
];

function Myskills() {
  const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? knowledges
      : knowledges.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary italic">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my expertise and the technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${activeCategory === category
                ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                : "glass-card border-border hover:bg-primary/10 text-muted-foreground hover:text-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 transition-all duration-300 border-white/5 hover:border-primary/30"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <span className="text-sm text-primary font-mono font-bold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-primary/5 rounded-full h-2 overflow-hidden border border-white/5">
                <motion.div
                  className="h-2 bg-gradient-to-r from-primary to-indigo-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>

              <p className="text-[10px] mt-4 text-primary/60 uppercase font-black tracking-widest">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Myskills;
