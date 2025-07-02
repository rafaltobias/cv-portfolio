import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Node.js z Express oraz Python z Flask do tworzenia solidnych API.'
    },
    {
      icon: Lightbulb,
      title: 'Frontend Development',
      description: 'React do budowania interaktywnych i responsywnych interfejsów użytkownika.'
    },
    {
      icon: Target,
      title: 'Bazy Danych',
      description: 'PostgreSQL i MongoDB - relacyjne i nierelacyjne systemy zarządzania danymi.'
    },
    {
      icon: Heart,
      title: 'Kontrola Wersji',
      description: 'Git do efektywnego zarządzania kodem i współpracy w zespole.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            O <span className="text-primary-600">mnie</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Jestem studentem informatyki na 3. roku, specjalizującym się w systemach 
                internetowych. Moja pasja to tworzenie nowoczesnych aplikacji webowych 
                z wykorzystaniem najnowszych technologii i najlepszych praktyk programowania.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Aktualnie rozwijam swoje umiejętności w pełnym stosie technologicznym - 
                frontend oparty na React, backend z Node.js i Express, oraz Python z Flask. 
                Pracuję z bazami danych PostgreSQL i MongoDB, a do kontroli wersji używam Git.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Każdy nowy projekt traktuję jako możliwość nauki i doskonalenia swoich 
                umiejętności. Interesuję się nowoczesnymi rozwiązaniami technologicznymi 
                i stale poszerzam swoją wiedzę poprzez realizację własnych projektów.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
                  Student III rok
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  Systemy Internetowe
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  Wrocław
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
