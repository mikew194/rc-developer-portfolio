import { Code, Database, Layout, Lock, Cpu, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import SkillBar from '../components/ui/SkillBar';

// Skill categories with their respective skills
const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Code className="w-6 h-6" />,
    color: 'primary',
    skills: [
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Angular.js', level: 90 },
      { name: 'Blazor', level: 75 },
      { name: 'ASP.NET MVC', level: 80 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <Database className="w-6 h-6" />,
    color: 'secondary',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MSSQL', level: 80 },
      { name: 'GraphQL', level: 55 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'CosmosDB', level: 70 }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    icon: <Layout className="w-6 h-6" />,
    color: 'accent',
    skills: [
      { name: 'Figma', level: 75 },
      { name: 'User Research', level: 65 },
      { name: 'Wireframing', level: 80 },
      { name: 'Prototyping', level: 75 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Accessibility', level: 80 }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    icon: <Cpu className="w-6 h-6" />,
    color: 'primary',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'Azure', level: 65 },
      { name: 'DevOps', level: 80 },
      { name: 'Other', level: 85 }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    icon: <Lock className="w-6 h-6" />,
    color: 'secondary',
    skills: [
      { name: 'Authentication', level: 80 },
      { name: 'Authorization', level: 75 },
      { name: 'OToken Based', level: 80 },
      { name: 'Data Protection', level: 75 }
    ]
  },
  {
    id: 'analytics',
    title: 'AI',
    icon: <LineChart className="w-6 h-6" />,
    color: 'accent',
    skills: [
      { name: 'Copilot', level: 75 },
      { name: 'RBlackbox', level: 70 },
      { name: 'Gemini', level: 75 },
      { name: 'SQL AI', level: 80 },
      { name: 'Testing AI', level: 75 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="An overview of my technical skills, tools, and areas of expertise in software development."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${category.color}-100 text-${category.color}-600 dark:bg-${category.color}-900/30 dark:text-${category.color}-400`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.level}
                    color={category.color as 'primary' | 'secondary' | 'accent'}
                    delay={skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Learning & Growth
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Technology is constantly evolving, and I'm committed to growing my skills. Currently, I'm expanding my knowledge in these areas:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Web3 & Blockchain</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Exploring decentralized applications and smart contract development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Integrating ML capabilities into web applications for enhanced user experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Serverless Architecture</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Building scalable applications using serverless functions and cloud services.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Development Philosophy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h4 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                Clean Code & Best Practices
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I believe in writing clean, maintainable code that follows industry best practices. This includes proper documentation, consistent naming conventions, and comprehensive testing to ensure reliability and scalability.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h4 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-4">
                User-Centered Approach
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Every project I work on puts the user first. I focus on creating intuitive interfaces, accessible designs, and smooth interactions that provide an exceptional user experience while meeting business objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;