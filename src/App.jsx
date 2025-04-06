import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors min-h-screen">
      <Navbar />
      <main className="pt-20"> {/* supaya kontennya tidak tertutup navbar */}
        <Hero />
      </main>
    </div>
  );
}

export default App;