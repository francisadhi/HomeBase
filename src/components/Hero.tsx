import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Adhi</span> 👋
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        A dedicated Software Developer with 5+ years of experience building efficient, scalable web & mobile apps with technologies like
        <span className="font-semibold"> .NET, React, Node.js, and React Native</span>.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all"
        >
          Contact Me
        </a>
        <a
          href="/CV-Adhi.pdf"
          className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
          download
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
