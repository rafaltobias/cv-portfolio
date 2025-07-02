import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Warszawa, Polska',
      period: '2022 - Obecnie',
      description: 'Prowadzę zespół 5 developerów, architekt rozwiązań dla aplikacji e-commerce obsługujących ponad 100k użytkowników dziennie.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      achievements: [
        'Zwiększenie wydajności aplikacji o 40%',
        'Implementacja CI/CD pipeline',
        'Mentoring junior developerów'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      location: 'Kraków, Polska',
      period: '2020 - 2022',
      description: 'Rozwój aplikacji SaaS dla sektora finansowego, integracja z systemami bankowymi i płatnościowymi.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Redis'],
      achievements: [
        'Rozwój modułu płatności online',
        'Integracja z 15+ dostawcami płatności',
        'Optymalizacja zapytań bazodanowych'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupHub',
      location: 'Gdańsk, Polska',
      period: '2019 - 2020',
      description: 'Tworzenie responsywnych interfejsów użytkownika dla aplikacji mobilnych i webowych.',
      technologies: ['React', 'TypeScript', 'Styled Components', 'Jest'],
      achievements: [
        'Przeprojektowanie UX/UI aplikacji mobilnej',
        'Implementacja design system',
        'Zwiększenie conversion rate o 25%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Moje <span className="text-primary-600">Doświadczenie</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Przebieg mojej kariery zawodowej w branży IT
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <Building2 className="text-primary-600 mr-2" size={20} />
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {experience.company}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {experience.title}
                    </h3>

                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{experience.period}</span>
                      <MapPin size={16} className="mr-2" />
                      <span>{experience.location}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Kluczowe osiągnięcia:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Gotowy na nowe wyzwania
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Szukam okazji do dalszego rozwoju w dynamicznym zespole, 
              gdzie mogę wykorzystać swoje doświadczenie i poznać nowe technologie.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Zobacz moje projekty
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
