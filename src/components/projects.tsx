'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
    {
      id: 1,
      title: "Roots2Goods",
      description: "An agro-product supply chain management system that help users to manage their business and monitored by admin. Visit github to know more.",
      category: ["react"],
      tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Google Map API", "Tailwind CSS", "Chart.js", "JWT"],
      github: "https://github.com/srniloy/Roots2Goods-v2",
      link: "https://roots2goods.vercel.app/",
      image: "/images/roots2goods.png"
    },
    {
      id: 2,
      title: "SymToDoc",
      description: "SymToDoc is a React Native mobile application designed to empower users with fast, accessible, and intelligent health insights. Visit github to know more.",
      category: ["react-native", "Flask", "ml"],
      tags: ["React Native", "Flask", "Scikit-learn", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript", "Python"],
      github: "https://github.com/srniloy/SymToDoc",
      link: "https://expo.dev/accounts/srniloy/projects/sym-to-doc/builds/82c0d854-03f3-4ce2-8252-d22f6a0283d8",
      image: "/images/symtodoc.png"
    },
    {
      id: 3,
      title: "UIU_PSP",
      description: "UIU_PSP is a collaborative educational web app designed to help students improve academic performance by engaging in peer-to-peer learning, question sharing, and interactive problem solving.",
      category: ["php", "mysql"],
      tags: ["PHP", "HTML", "CSS", "Bootstrap", "JS", "MySQL", "InfinityFree"],
      github: "https://github.com/srniloy/UIU_PSP",
      link: "https://uiu-psp.wuaze.com/",
      image: "/images/uiupsp.png"
    },
    {
      id: 4,
      title: "IBOL",
      description: "IBOL (Intelligent Bioinformatics and Omics Laboratory) is a modern and informative website built to represent a cutting-edge research hub in the field of computational biology and multi-omics analysis.",
      category: ["react"],
      tags: ["Next.js", "HTML", "CSS", "Tailwind CSS", "Vercel"],
      github: "https://github.com/srniloy/IBOL",
      link: "https://ibol.vercel.app",
      image: "/images/ibol.png"
    },
    {
      id: 5,
      title: "Quickee",
      description: "Quickee is a simple, clean frontend web application for a restaurant, built using React. It was developed as a learning project to practice foundational concepts of modern frontend development.",
      category: ["react"],
      tags: ["React", "HTML", "CSS", "JS"],
      github: "https://github.com/srniloy/quickiee",
      link: "https://quickiee.netlify.app/",
      image: "/images/quickee.png"
    },
    {
      id: 6,
      title: "Accident Detection",
      description: "This project is an intelligent, real-time accident detection and alert system that leverages CCTV traffic camera feeds, YOLOv11-based deep learning, and edge computing to identify road accidents and immediately notify emergency services.",
      category: ["ml"],
      tags: ["Python", "YOLO V11", "MQTT", "Socket.io"],
      github: "https://github.com/srniloy/accident-detection",
      link: "https://github.com/srniloy/accident-detection",
      image: "/images/accident-detection.png"
    },
]

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState(['all']);

    const filteredProjects = new Set(activeFilter).has('all') 
    ? projects 
    : projects.filter(project => project.category.some(item => new Set(activeFilter).has(item)));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#0a1d30]">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white"
        >
          My Projects
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
          A collection of my recent work across different technologies
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(['all'])} 
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${new Set(activeFilter).has('all')  ? 'bg-indigo-600 text-white' : 'bg-[#0a1d30]/60 text-gray-300 hover:bg-[#0a1d30]/80'}`}
        >
          All Projects
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(['react'])} 
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${new Set(activeFilter).has('react') ? 'bg-indigo-600 text-white' : 'bg-[#0a1d30]/60 text-gray-300 hover:bg-[#0a1d30]/80'}`}
        >
          React
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(['react-native'])} 
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${new Set(activeFilter).has('react-native') ? 'bg-indigo-600 text-white' : 'bg-[#0a1d30]/60 text-gray-300 hover:bg-[#0a1d30]/80'}`}
        >
          React Native
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(['php'])} 
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${new Set(activeFilter).has('php') ? 'bg-indigo-600 text-white' : 'bg-[#0a1d30]/60 text-gray-300 hover:bg-[#0a1d30]/80'}`}
        >
          PHP
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(['ml'])} 
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${new Set(activeFilter).has('ml') ? 'bg-indigo-600 text-white' : 'bg-[#0a1d30]/60 text-gray-300 hover:bg-[#0a1d30]/80'}`}
        >
          Machine Learning
        </motion.button>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[#0a1d30]/80 rounded-lg overflow-hidden border border-indigo-300/20 hover:border-indigo-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="h-56 bg-[#0a1d30]/50 flex items-center justify-center text-gray-400 overflow-hidden">
              {project.image ? (
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                'Project Image'
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tagIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + tagIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-2 py-1 bg-[#0a1d30]/60 text-indigo-300 border-[1px] border-indigo-300/20 hover:border-indigo-300/40 text-xs rounded"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-3">
                {project.github && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link target='_blank' href={project.github} className="text-gray-300 hover:text-indigo-300 transition">
                      <FaGithub className="w-5 h-5" />
                    </Link>
                  </motion.div>
                )}
                {project.link && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link target='_blank' href={project.link} className="text-gray-300 hover:text-indigo-300 transition flex items-center">
                      <FiExternalLink className="w-5 h-5" />
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects;