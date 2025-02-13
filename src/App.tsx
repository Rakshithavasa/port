import React, { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { MovingBackground } from './components/MovingBackground';
import { ContactForm } from './components/ContactForm';
import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <MovingBackground />
      
      <main className="container mx-auto px-4 py-16 relative">
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://i.imgur.com/YOUR_IMAGE_ID.jpg" // Replace with your hosted image URL
            alt="Vasa Rakshitha"
            className="w-32 h-32 rounded-full mb-8 object-cover border-4 border-purple-500 shadow-lg"
          />
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Vasa Rakshitha
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            B.Tech CSE Student & Aspiring Full Stack Developer
          </motion.p>
          
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-full flex items-center gap-2 shadow-lg hover:bg-purple-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-pink-600 text-white rounded-full flex items-center gap-2 shadow-lg hover:bg-pink-700 transition-colors cursor-pointer"
            >
              <Send className="w-5 h-5" />
              Contact Me
            </motion.a>
          </div>
        </section>

        <ContactForm />
      </main>
    </div>
  );
}

export default App;