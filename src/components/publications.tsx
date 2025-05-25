'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBook } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const publications = [
    {
        id: 1,
        title: "Customer Segmentation and Classification Using K-Modes Clustering with Ensemble Learning",
        conference: "Intelligent Systems and Data Science",
        year: "2024",
        image: '/images/isds.jpeg',
        link: "https://www.springerprofessional.de/en/customer-segmentation-and-classification-using-k-modes-clusterin/50187762"
    },
];

const Publications = () => {
    return (
        <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#0a1d30]">
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white"
                >
                    Publications
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
                    My academic contributions and research publications
                </motion.p>
            </div>

            <div className="space-y-6">
                {publications.map((pub, index) => (
                    <motion.div
                        key={pub.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-[#0a1d30]/80 p-6 rounded-lg border border-indigo-300/20 hover:border-indigo-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex items-start w-full sm:w-auto"
                            >
                                <div className="bg-indigo-900/30 p-3 rounded-full mr-4 hidden sm:block">
                                    <FaBook className="text-indigo-300 w-6 h-6" />
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="h-44 w-full sm:w-fit bg-[#0a1d30]/50 flex items-center justify-center text-gray-400 rounded-md overflow-hidden flex-shrink-0"
                                >
                                    {pub.image ? (
                                        <motion.img 
                                            src={pub.image} 
                                            alt={pub.title} 
                                            className="w-full h-full object-cover"
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    ) : (
                                        'Certificate Image'
                                    )}
                                </motion.div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="flex-1 flex flex-col justify-between w-full"
                            >
                                <div>
                                    <motion.h3 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="text-xl font-semibold text-white mb-1"
                                    >
                                        {pub.title}
                                    </motion.h3>
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.45 }}
                                        viewport={{ once: true }}
                                        className="text-gray-300 mb-2"
                                    >
                                        {pub.conference && `Presented at ${pub.conference}`}
                                    </motion.p>
                                </div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex justify-between items-center mt-2 sm:mt-0"
                                >
                                    <p className="text-gray-400 text-sm">{pub.year}</p>
                                    {pub.link && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link 
                                                href={pub.link} 
                                                target="_blank"
                                                className="text-indigo-300 hover:text-indigo-200 text-sm flex items-center"
                                            >
                                                Read Publication <FiExternalLink className="ml-1" />
                                            </Link>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Publications;