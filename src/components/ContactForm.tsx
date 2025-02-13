import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 px-4" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-500" />
                <a href="mailto:rakshithavasa035@gmail.com" className="hover:text-purple-500 transition-colors">
                  rakshithavasa035@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-500" />
                <a href="tel:6304612946" className="hover:text-purple-500 transition-colors">
                  +91 6304612946
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span>Andhra Pradesh, India</span>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};