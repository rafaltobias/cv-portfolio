import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Express', level: 80, color: 'bg-gray-600' },
        { name: 'Python Flask', level: 75, color: 'bg-yellow-500' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 80, color: 'bg-blue-500' }
      ]
    },
    {
      title: 'Bazy Danych & Narzędzia',
      skills: [
        { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 70, color: 'bg-green-700' },
        { name: 'Git', level: 85, color: 'bg-red-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Moje <span className="text-primary-600">Umiejętności</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Zestaw technologii i narzędzi, z którymi pracuję na co dzień
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full ${skill.color} relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{
                            x: ['0%', '100%', '0%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-8"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
