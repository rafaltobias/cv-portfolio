import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };
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
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-lg font-medium">
              Student Informatyki
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 text-yellow-800 dark:text-yellow-200 rounded-full text-lg font-medium border border-yellow-200 dark:border-yellow-700">
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
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 69, 19, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Skontaktuj się</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12 relative"
          >
            {emailCopied && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1"
              >
                <Check size={14} />
                Email skopiowany!
              </motion.div>
            )}
            {[
              { icon: Github, href: 'https://github.com/rafaltobias', label: 'GitHub', isEmail: false },
              { icon: Mail, href: 'rafaladamczyk333@gmail.com', label: 'Email', isEmail: true }
            ].map((social) => (
              <motion.button
                key={social.label}
                onClick={() => social.isEmail ? copyEmail(social.href) : window.open(`https://${social.href.startsWith('http') ? social.href : social.href}`, '_blank')}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-slate-100 dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label={social.isEmail ? `Kopiuj ${social.label}` : social.label}
                title={social.isEmail ? 'Kliknij aby skopiować email' : `Otwórz ${social.label}`}
              >
                <social.icon size={24} />
              </motion.button>
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
