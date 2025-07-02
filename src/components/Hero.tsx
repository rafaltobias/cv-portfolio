import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                RA
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6"
          >
            Rafał <span className="text-primary-600">Adamczyk</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-6"
          >
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-lg font-medium">
              Student Informatyki
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-lg font-medium">
              Python developer
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-lg font-medium">
              Wrocław
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Student informatyki na 3. roku, specjalizujący się w systemach internetowych. 
            Pasjonuję się tworzeniem nowoczesnych aplikacji web z wykorzystaniem React, Node.js i Python.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Skontaktuj się</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: 'https://github.com/rafaltobias', label: 'GitHub' },
              { icon: Mail, href: 'mailto:rafaladamczyk333@gmail.com', label: 'Email' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-slate-100 dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="animate-bounce"
          >
            <a
              href="#about"
              className="inline-block text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Przewiń w dół"
            >
              <ChevronDown size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
