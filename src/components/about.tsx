'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#0a1d30]">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-indigo-400 mx-auto mt-4"
        ></motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-64 h-64 mx-auto rounded-full bg-[#0a1d30]/50 overflow-hidden border border-indigo-300/50 hover:border-indigo-300/70 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full h-full flex items-center justify-center text-gray-400"
            >
              <Image 
                src={'/photo2.png'} 
                alt='My Photo' 
                height={256} 
                width={256} 
                className='w-full h-full object-cover'
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-4"
          >
            Who I Am
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-4"
          >
            I'm a passionate developer with expertise in React, Node.js and flask with machine learning (ML) knowledge. 
            In the 4 years of my university time, I've worked on projects ranging from 
            single page website to advanced multi functionality web app with ML.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-6"
          >
            My approach combines technical excellence with creative problem-solving to 
            deliver solutions that are both functional and user-friendly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#0a1d30]/60 p-4 rounded-lg border border-indigo-300/20 hover:border-indigo-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex-1 min-w-[200px]"
            >
              <h4 className="font-medium text-white mb-2">Education</h4>
              <p className="text-gray-300">Computer Science and Engineering</p>
              <p className="text-gray-400 text-sm">United International University</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;