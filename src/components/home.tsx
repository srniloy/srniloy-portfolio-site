"use client";
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaAward, FaBook } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { PortfolioLogo } from './icons/portfolio-logo';
import Projects from './projects';
// import Navbar from './navbar';
import Footer from './footer';
import Skills from './skills';
import Awards from './awards';
import Publications from './publications';
import Contact from './contact';
import About from './about';
import { Navbar } from './navbar';


export default function Home() {

    const [showNav, setShowNav] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const controls = useAnimation();
  // Sample data - replace with your actual content
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "Web application that generates images using Stable Diffusion API",
      tags: ["Next.js", "TypeScript", "AI"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity application with real-time collaboration features",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#"
    }
  ];




    useEffect(() => {
      const sequence = async () => {
        // 1. Initial logo animation (centered)
        await controls.start({
            scale: [0.8, 1.2, 1],
            opacity: [0, 1],
            transition: { duration: 1.2 }
        });

        // 2. Move to navbar position
        await controls.start({
        x: -180, // Adjust based on your layout
        y: -200, // Adjust based on your layout
        scale: 0.7,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 1.5
        }
        });
  
        // 3. Show other content
        setShowNav(true)
        setTimeout(() => {
            
            setShowContent(true);
        }, 1000);
      };
  
      sequence();
    }, []);





  return (
    <div className="relative h-screen w-full bg-[#0a1d30]">
      {/* <AnimatedLogo/> */}
  {/* Navigation */}
  <AnimatePresence>
    {showNav && (
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Navbar/>
        </motion.nav>
    )}
  </AnimatePresence>

  <AnimatePresence>
    {showContent && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mx-auto h-full"
      >
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hi, I'm <span className="text-indigo-600">Shahriar Rahman Niloy</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
              {"Full Stack Web Developer"}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I build innovative solutions that solve real-world problems through technology.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">
                Contact Me
              </Link>
              <Link href="#projects" className="px-6 py-3 border border-indigo-300 text-indigo-300 rounded-lg hover:bg-[#0a1d30]/50 transition">
                View Projects
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About/>

        <Skills/>
        <Projects/>

        {/* Awards Section */}
        <Awards/>

        {/* Publications Section */}
        <Publications/>

        {/* Contact Section */}
        <Contact/>

        {/* Footer */}
        <Footer/>
      </motion.div>
    )}
  </AnimatePresence>
</div>
  );
}