import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-[var(--bg3)] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="text-xl font-bold text-white">
                  Shahriar Rahman Niloy
                </Link>
                <p className="mt-2">
                  Building digital experiences that matter.
                </p>
              </div>
              <div className="flex space-x-6">
                <Link href="#about" className="hover:text-white transition">
                  About
                </Link>
                <Link href="#projects" className="hover:text-white transition">
                  Projects
                </Link>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-indigo-300/20 text-center text-sm">
              <p>© {new Date().getFullYear()} Shahriar Rahman Niloy. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer