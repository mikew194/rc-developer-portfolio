import { motion } from 'framer-motion';
import { Check, Coffee, Code, MessageSquare, Users, Zap } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background, approach to development, and what drives me."
        />
        
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Story
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate full-stack developer with over 20 years of experience building web applications. My journey in tech began during college when I built my first website for a local business. That experience sparked my love for creating digital solutions that solve real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              After graduating with a degree in Electrical Engineering, I worked at several tech companies where I honed my skills in frontend and backend development. I've had the privilege of working on diverse projects ranging from e-commerce platforms to data visualization tools.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I'm deeply committed to continuous learning and staying on top of emerging technologies. When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks and libraries.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="aspect-square max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Developer Portrait" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        {/* Values & Philosophy */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Development Philosophy
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in creating software that is not only functional but also intuitive, accessible, and maintainable. My approach combines technical excellence with user-centered design principles.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
                title: 'Clean Code',
                description: 'I write code that is readable, well-structured, and maintainable. This makes collaboration easier and reduces technical debt.'
              },
              {
                icon: <Users className="w-6 h-6 text-secondary-500 dark:text-secondary-400" />,
                title: 'User-Centered Design',
                description: 'I focus on creating experiences that meet user needs while being intuitive and accessible to everyone.'
              },
              {
                icon: <Zap className="w-6 h-6 text-accent-400 dark:text-accent-300" />,
                title: 'Performance Optimization',
                description: 'I build applications that are fast, responsive, and efficient, providing the best possible user experience.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Skills & Technologies */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Approach to Work
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm committed to delivering high-quality work through a combination of technical expertise, clear communication, and a collaborative mindset.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Coffee className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
                title: 'Problem Solver',
                description: 'I enjoy tackling complex challenges and finding elegant solutions. I approach problems methodically and persist until I find the right answer.'
              },
              {
                icon: <MessageSquare className="w-5 h-5 text-secondary-500 dark:text-secondary-400" />,
                title: 'Clear Communicator',
                description: 'I express technical concepts clearly to both technical and non-technical stakeholders, ensuring everyone is aligned and informed.'
              },
              {
                icon: <Users className="w-5 h-5 text-accent-400 dark:text-accent-300" />,
                title: 'Team Player',
                description: 'I thrive in collaborative environments where I can learn from others and contribute my skills to achieve shared goals.'
              },
              {
                icon: <Check className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
                title: 'Detail Oriented',
                description: 'I pay close attention to the details that make the difference between good and exceptional work, from code quality to user experience.'
              }
            ].map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    {trait.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {trait.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {trait.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Beyond Coding
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hiking in mountains" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white dark:bg-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Outdoor Adventures
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I love hiking and exploring nature, which helps me clear my mind and find inspiration.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Stack of books" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white dark:bg-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I'm always reading about new technologies and industry trends to stay current.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white dark:bg-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Community Involvement
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I participate in coding meetups and mentor aspiring developers in my free time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;