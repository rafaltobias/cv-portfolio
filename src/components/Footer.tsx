import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Heart, ArrowUp, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rafaltobias', label: 'GitHub', isEmail: false },
    { icon: Mail, href: 'rafaladamczyk333@gmail.com', label: 'Email', isEmail: true }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Rafał</span> Adamczyk
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Student informatyki z pasją do tworzenia nowoczesnych aplikacji internetowych. 
              Specjalizuję się w React, Node.js, Python i systemach internetowych.
            </p>
            <div className="flex space-x-4 relative">
              {emailCopied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-12 left-0 bg-green-500 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1"
                >
                  <Check size={12} />
                  Skopiowano!
                </motion.div>
              )}
              {socialLinks.map((social) => (
                <motion.button
                  key={social.label}
                  onClick={() => social.isEmail ? copyEmail(social.href) : window.open(social.href, '_blank')}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.isEmail ? `Kopiuj ${social.label}` : social.label}
                  title={social.isEmail ? 'Kliknij aby skopiować email' : `Otwórz ${social.label}`}
                >
                  <social.icon size={20} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Szybkie linki</h4>
            <ul className="space-y-3">
              {[
                { name: 'O mnie', href: '#about' },
                { name: 'Umiejętności', href: '#skills' },
                { name: 'Projekty', href: '#projects' },
                { name: 'Kontakt', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span><br />
                rafaladamczyk333@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Lokalizacja:</span><br />
                Wrocław, Polska
              </p>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 font-medium">Otwarty na nowe możliwości</span>
              </div>
              <p className="text-gray-300 text-sm">
                Poszukuję możliwości nauki i rozwoju
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              © {currentYear} Rafał Adamczyk. Wykonane z{' '}
              <Heart className="text-red-500 mx-1" size={16} />{' '}
              w React & TypeScript
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="Przewiń do góry"
            >
              <span className="text-sm">Do góry</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600"></div>
    </footer>
  );
};

export default Footer;
