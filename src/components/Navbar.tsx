import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="items-center justify-center top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Nama */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          AdhiDev
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home
          </a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact
          </a>
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
