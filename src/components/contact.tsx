"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-[#0a1d30]">
            <Toaster position="top-center" />
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white"
                >
                    Get In Touch
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
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </motion.p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-[#0a1d30]/50 border border-indigo-300/30 rounded-lg focus:ring-indigo-300 focus:border-indigo-300 text-white placeholder-gray-400"
                                placeholder="Your Name"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-[#0a1d30]/50 border border-indigo-300/30 rounded-lg focus:ring-indigo-300 focus:border-indigo-300 text-white placeholder-gray-400"
                                placeholder="your.email@example.com"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-[#0a1d30]/50 border border-indigo-300/30 rounded-lg focus:ring-indigo-300 focus:border-indigo-300 text-white placeholder-gray-400"
                                placeholder="Your message here..."
                            ></textarea>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition w-full flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <motion.span
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Send Message
                                    </motion.span>
                                )}
                            </button>
                        </motion.div>
                    </form>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#0a1d30]/60 p-8 rounded-lg border border-indigo-300/20 hover:border-indigo-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                        <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <motion.div 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex items-center"
                            >
                                <FaEnvelope className="text-indigo-300 w-5 h-5 mr-4" />
                                <span className="text-gray-300">shahrairniloy14@gmail.com</span>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="flex items-center"
                            >
                                <svg className="text-indigo-300 w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-gray-300">Dhaka, Bangladesh</span>
                            </motion.div>
                        </div>
                        <div className="mt-8">
                            <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="flex justify-start space-x-4"
                            >
                                {[
                                    { icon: <FaGithub className="w-6 h-6" />, href: "https://github.com/srniloy", label: "GitHub" },
                                    { icon: <FaLinkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/srniloy/", label: "LinkedIn" },
                                    { icon: <FaFacebook className="w-6 h-6" />, href: "https://www.facebook.com/sr.niloy.09/", label: "Facebook" },
                                    { icon: <SiCodeforces className="w-6 h-6" />, href: "https://codeforces.com/profile/shahriarniloy14", label: "Codeforces" },
                                    { icon: <SiLeetcode className="w-6 h-6 text-yellow-400 hover:text-yellow-300" />, href: "https://leetcode.com/u/Niloy19/", label: "LeetCode" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-indigo-300 transition-colors duration-300"
                                        aria-label={social.label}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;