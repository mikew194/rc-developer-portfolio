import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code size={24} className="text-primary-700 dark:text-primary-400" />
              <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
               M12 Systems R&D
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Building exceptional digital experiences with clean code and creative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Navigation column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                  michael.wassermann@m12systems.com
                </a>
              </li>
              <li>
                <NavLink to="/contact" className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 hover:underline">
                  Contact form <ExternalLink className="w-4 h-4" />
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Newsletter column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to receive updates on new projects and tech articles.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="input"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} M12 Systems R&D. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;