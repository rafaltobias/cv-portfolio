import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  
  const categories = ['Wszystkie', 'Web Apps', 'Mobile', 'Machine Learning'];
  
  const projects = [
    {
      id: 1,
      title: 'Analytics Dashboard',
      description: 'Dashboard analityczny z interaktywnymi wykresami i real-time data visualization.',
      image: '/api/placeholder/400/250',
      category: 'Web Apps',
      technologies: ['React', 'Python', 'PostgreSQL'],
      featured: true
    },
    {
      id: 2,
      title: 'Analytics Dashboard v2',
      description: 'Nowoczesny dashboard analityczny stworzony z wykorzystaniem Node.js i interaktywnymi wykresami Plotly.js.',
      image: '/api/placeholder/400/250',
      category: 'Web Apps',
      technologies: ['Node.js', 'Express', 'HTML', 'Tailwind', 'Plotly.js'],
      featured: true
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'Aplikacja mobilna pokazująca pogodę z mapami interaktywnymi i powiadomieniami push.',
      image: '/api/placeholder/400/250',
      category: 'Mobile',
      technologies: ['Java', 'Android SDK', 'Weather API']
    },
    {
      id: 4,
      title: 'Newsletter App',
      description: 'Aplikacja do zarządzania newsletterami z panelem administracyjnym i systemem wysyłania emaili.',
      image: '/api/placeholder/400/250',
      category: 'Web Apps',
      technologies: ['React', 'Python', 'Flask', 'PostgreSQL'],
      featured: true
    },
    {
      id: 5,
      title: 'ML Predykcja Cen Giełdowych',
      description: 'System uczenia maszynowego do przewidywania cen akcji z wykorzystaniem analizy technicznej i sentiment analysis.',
      image: '/api/placeholder/400/250',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      featured: true
    }
  ];

  const filteredProjects = selectedCategory === 'Wszystkie' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Moje <span className="text-primary-600">Projekty</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Wybrane projekty, które najlepiej pokazują moje umiejętności i doświadczenie
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-slate-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  project.featured ? 'ring-2 ring-primary-200 dark:ring-primary-800' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary-300 dark:text-primary-700">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Zainteresowany współpracą?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Mam więcej projektów na GitHub i chętnie opowiem o swoich doświadczeniach.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                href="https://github.com/rafaltobias"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Github size={20} />
                <span>Zobacz wszystkie projekty</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                Skontaktuj się
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
