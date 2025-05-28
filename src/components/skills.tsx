"use client";

import { motion } from 'framer-motion';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiMysql, SiTensorflow, SiExpress, SiScikitlearn, SiShadcnui } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="w-6 h-6 text-blue-400" />, level: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-600" />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />, level: 90 },
        { name: "Shadcn UI", icon: <SiShadcnui className="w-6 h-6 text-green-500"/>, level: 90 },
        { name: "React Native", icon: <TbBrandReactNative className="w-6 h-6 text-blue-400" />, level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-green-500" />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" />, level: 75 },
        { name: "REST APIs", icon: <div className="text-purple-400 font-bold text-lg">API</div>, level: 70 },
        { name: "Django", icon: <SiDjango className="w-6 h-6 text-green-500" />, level: 50 },
      ]
    },
    {
      title: "Data & ML",
      skills: [
          { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" />, level: 80 },
          { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-blue-500" />, level: 75 },
          { name: "Python", icon: <FaPython className="w-6 h-6 text-yellow-400" />, level: 70 },
          { name: "Scikit-learn", icon: <SiScikitlearn className="w-6 h-6 text-green-500" />, level: 70 },
        { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6 text-orange-500" />, level: 70 },
        { name: "Pandas", icon: <div className="text-red-400 font-bold text-lg">PD</div>, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#0a1d30]">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white"
        >
          Technical Expertise
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-indigo-400 mx-auto mt-4"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          My skills span across full-stack development with specializations in these areas
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#0a1d30]/70 rounded-xl border border-indigo-300/20 hover:border-indigo-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-indigo-300/20 flex items-center">
                <span className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-[#0a1d30]/50 rounded-lg border border-indigo-300/20 group-hover:border-indigo-300/40 transition">
                          {skill.icon}
                        </div>
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-indigo-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#0a1d30]/90 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tools & Technologies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-white text-center mb-8">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Git', 'VS Code','PyCharm', 'Jira', 'Figma', 'Postman', 'Jest', 'Vercel', 'Vite', 'InfinityFree', 'Render', 'pythonanywhere', 'Google Cloud Platform'].map((tool) => (
            <motion.div
              key={tool}
              whileHover={{ y: -3 }}
              className="px-5 py-2 bg-[#0a1d30]/60 text-gray-300 rounded-lg border border-indigo-300/20 hover:border-indigo-300/40 hover:text-white transition flex items-center"
            >
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
              {tool}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;