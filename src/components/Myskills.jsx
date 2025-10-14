import React, { useState } from "react";
import { motion } from "framer-motion";

const knowledges = [
  // 🌐 Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
  { name: "React.js", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },

  // ⚙️ Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 80, category: "Backend" },

  // 🗄️ Database
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "MySQL", level: 75, category: "Database" },

  // 🧰 Tools & DevOps
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Vite", level: 85, category: "Tools" },

  // 🎨 Design & Misc
  { name: "Figma", level: 75, category: "Design" },
  { name: "Responsive Design", level: 90, category: "Design" },
  { name: "SEO Optimization", level: 70, category: "Other" },
];

function Myskills() {
  const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Design", "Other"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredSkills =
    activeCategory === "All"
      ? knowledges
      : knowledges.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background/60 border-border hover:bg-primary/20"
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
              key={index}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="bg-card/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-primary/30 p-4 border border-border hover:border-primary transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-sm text-primary font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-2 bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>

              <p className="text-xs mt-3 text-muted-foreground uppercase tracking-wide">
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
