import { Link } from 'react-router-dom';
//import { Code2, ServerCog, Palette, Layers } from 'lucide-react';
import { Code2, ServerCog, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import SkillBar from '../ui/SkillBar';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Code2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    description: 'Building responsive, accessible, and performant user interfaces using modern web technologies.',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'CSS/Tailwind', level: 80 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <ServerCog className="w-6 h-6 text-secondary-500 dark:text-secondary-400" />,
    description: 'Developing robust server-side applications, APIs, and database solutions.',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    icon: <Palette className="w-6 h-6 text-accent-400 dark:text-accent-300" />,
    description: 'Creating intuitive and visually appealing user experiences with a focus on usability.',
    skills: [
      { name: 'Figma', level: 70 },
      { name: 'User Research', level: 65 },
      { name: 'Prototyping', level: 75 }
    ]
  }
];

const SkillsOverview = () => {
  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="My technical toolkit and areas of expertise in software development and design."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 md:p-8"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {category.description}
              </p>
              
              <div className="mb-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.level}
                    color={index === 0 ? 'primary' : index === 1 ? 'secondary' : 'accent'}
                    delay={skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/skills" className="btn btn-outline">
            See All Skills
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;