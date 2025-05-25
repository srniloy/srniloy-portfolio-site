'use client'
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const awards = [
    {
        id: 1,
        title: "Award giving of Achievement for becoming 1st Runner Up in FYDP-I Category",
        issuer: "CSE Porject Show",
        year: "2024",
        image: '/images/fydp.jpeg'
    },
    {
        id: 2,
        title: "Award giving of Achievement for becoming 1st Runner Up in Microprocessors and Micro-controllers Lab Category",
        issuer: "CSE Porject Show",
        year: "2023",
        image: '/images/micro.jpeg'
    },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#0a1d30]">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white"
        >
          Awards & Honors
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
          Recognition for my achievements and contributions
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[#0a1d30]/60 p-6 rounded-lg border border-indigo-300/20 hover:border-indigo-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="flex items-start">
              <motion.div 
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-indigo-900/30 p-3 rounded-full mr-4"
              >
                <FaAward className="text-indigo-300 w-6 h-6" />
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-56 bg-[#0a1d30]/50 flex items-center justify-center text-gray-400 rounded-md overflow-hidden"
                >
                  {award.image ? (
                    <motion.img 
                      src={award.image} 
                      alt={award.title} 
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    'Award Image'
                  )}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-white mb-1 mt-4"
                >
                  {award.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  viewport={{ once: true }}
                  className="text-gray-300 mb-2"
                >
                  {award.issuer}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm"
                >
                  {award.year}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Awards;