import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Check } from 'lucide-react';

const Contact: React.FC = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rafaladamczyk333@gmail.com',
      href: 'mailto:rafaladamczyk333@gmail.com',
      copyAction: true
    },
    {
      icon: MapPin,
      title: 'Lokalizacja',
      value: 'Wrocław, Polska',
      href: '#',
      copyAction: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Skontaktuj się <span className="text-primary-600">ze mną</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Zainteresowany współpracą lub masz pytania? 
            Skontaktuj się ze mną przez email!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Informacje kontaktowe
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => info.copyAction ? copyEmail(info.value) : null}
                  className={`flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl transition-all duration-300 ${
                    info.copyAction ? 'cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-900/20' : 'cursor-default hover:bg-gray-100 dark:hover:bg-gray-600'
                  } relative`}
                >
                  {info.copyAction && emailCopied && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1"
                    >
                      <Check size={12} />
                      Skopiowano!
                    </motion.div>
                  )}
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="text-primary-600 dark:text-primary-400" size={28} />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-lg mb-2">
                    {info.title}
                    {info.copyAction && (
                      <span className="text-xs text-gray-500 block font-normal">
                        Kliknij aby skopiować
                      </span>
                    )}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl max-w-2xl mx-auto"
            >
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-xl">
                Dostępność
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">Najlepszy kontakt:</span> Email
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <span className="font-medium">Czas odpowiedzi:</span> Do 48 godzin
              </p>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Otwarty na nowe możliwości
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
