import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          franciscusadhi.com
        </div>

        {/* Hamburger Button (Only shows on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none text-2xl"
        >
          ☰
        </button>

        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Home</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">About</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Contact</a>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu (Only shows when isOpen=true) */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-4 pb-4 bg-white dark:bg-gray-900 shadow">
          <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Home</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">About</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Contact</a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;