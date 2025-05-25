"use client"; // Required for animations in Next.js

import { useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function AnimatedLogo() {
    const controls = useAnimation();
    const logoRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    window.addEventListener('resize', () => {
        const navbar = document.querySelector('.nav-container');
        // if (navbar && logoRef.current) {
        //     const navbarRect = navbar.getBoundingClientRect();
        //     const logoRect = logoRef.current.getBoundingClientRect();
        //     logoRef.current.style.left = `${50}px`
        //     console.log(logoRect.x);
        //     console.log(navbarRect.width);
        // }
    })

    useEffect(() => {
        const animateLogo = async () => {
            // 1. Initial centered animation
            await controls.start({
                scale: [0.8, 1.2, 1],
                rotate: [0, 10, -10, 0],
                opacity: [0, 1],
                transition: { duration: 1.2 }
            });

            // 2. Move to navbar position (only on homepage)
            
                const navbar = document.querySelector('nav');
                const navbarCon = document.querySelector('.nav-container');
                if (navbar && navbarCon && logoRef.current) {
                    const navbarRect = navbar.getBoundingClientRect();
                    const navbarConRect = navbar.getBoundingClientRect();
                    const logoRect = logoRef.current.getBoundingClientRect();

                    let x = navbarRect.left + (navbarRect.width * 0.1) - logoRect.left;
                    console.log(window.innerWidth);
                    
                    if (window.innerWidth > 1088+48){
                        x = - ((1088 / 2) + 20)
                    }else{
                        x = - ((window.innerWidth-48) / 2) - 5
                    }
                    
                    const y = navbarRect.top + (navbarRect.height / 2) - logoRect.top - (logoRect.height / 2) - 2;


                    await controls.start({
                        x,
                        y,
                        scale: 0.7,
                        transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            duration: 1.5
                        }
                    });
                }
            
        };

        animateLogo();
    }, [controls, pathname]);

    return (
        <AnimatePresence>
            <motion.div
                ref={logoRef}
                className="fixed z-50 logo-svg"
                initial={{
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    opacity: 0
                }}
                animate={controls}
            >
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Animated Hexagon */}
                    <motion.path
                        d="M51.2 5L87.5 25V75L50 95L12.5 75V25L52.2 5Z"
                        stroke="#4f46e5"
                        strokeWidth="6"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Animated Letter N */}
                    <motion.path
                        d="M35 30V70M35 30L65 70M65 30V70"
                        stroke="#4f46e5"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.8
                        }}
                    />
                </svg>
            </motion.div>
        </AnimatePresence>
    );
}