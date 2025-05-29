import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-lg md:text-xl font-medium text-primary-600 dark:text-primary-400 mb-4">
              Hello, I'm a 
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Full Stack <span className="text-primary-700 dark:text-primary-500">Developer</span> & UX <span className="text-accent-400">Designer</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              I build exceptional digital experiences with clean, efficient code and creative problem-solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-lg border-2 border-white dark:border-gray-800">JS</div>
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg border-2 border-white dark:border-gray-800">TS</div>
                <div className="w-12 h-12 rounded-full bg-accent-400 flex items-center justify-center text-white font-bold text-lg border-2 border-white dark:border-gray-800">R</div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Specializing in modern web technologies
              </p>
            </div>
          </motion.div>
          
          {/* Hero Image or Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-400"></div>
                <div className="h-full flex flex-col">
                  <div className="mb-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mb-4">
                        <code className="font-mono text-xl">{`</>`}</code>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">RC.dev</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">Front-end & Back-end Developer</p>
                      <div className="flex justify-center gap-3">
                        <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-400 rounded-full">React</span>
                        <span className="px-3 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-400 rounded-full">Node.js</span>
                        <span className="px-3 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-400 rounded-full">TypeScript</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-12 -right-8 w-16 h-16 bg-secondary-500 rounded-xl rotate-12 hidden md:block"></div>
            <div className="absolute top-12 -left-8 w-20 h-20 bg-accent-400/20 rounded-full hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;