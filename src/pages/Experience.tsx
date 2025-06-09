import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Award } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

// Experience data
const experiences = [
  {
    id: 1,
    title: 'Sr .NET Full Stack/AI Developer', 
    company: 'M12 Systems R&D.',
    location: 'Conroe TX',
    period: 'May 2023 - Present',
    description: 'Leading the frontend development team in creating responsive and accessible user interfaces for enterprise applications.',
    responsibilities: [
      'Researching AI Assisted Development',
      'Architected and implemented new features using Angular, React, TypeScript, Javascript and GraphQL',
      'Architected and implemented new database features using MongoDB CosmosDB MSSQL',
      'Developing Techniques too Mentor junior developers and conducted code reviews',
      'Collaborated with UX designers to create intuitive user experiences',
      'Researching CI/CD pipelines and testing strategies',
      'Currently Learning Python'
    ],
    technologies: ['React', 'TypeScript', 'CoPilot', 'Gemini', 'Tailwind'],
    type: 'work'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Hexaware Technologies.',
    location: 'S1105 Lakewood Pkwy, Alpharetta, GA 30009',
    period: 'July 2022 - May 2023',
    description: 'Developed full-stack web applications for Ernst&Young, from concept to deployment.',
    responsibilities: [
      'Developmment and support of Corporte App Reporting Hub',
      'Built RESTful APIs using WEBAPI and EntityFramework',
      'Developed frontend interfaces with Angular and Asp.NET',
      'Designed and maintained MongoDB and MSSQL databases',
      'Training on new skills: React Blazor and AI Asysted Development',
      'Collaborated with UX designers to create intuitive user experiences',
      'Implemented authentication and authorization systems'
    ],
    technologies: ['Angular', 'ASP.NET', 'EntityFramework', 'MongoDB', 'MSSQL'],
    type: 'work'
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'WebCraft Studios',
    location: 'Portland, OR',
    period: 'Jun 2017 - Feb 2019',
    description: 'Created responsive and interactive web applications for clients in the e-commerce and media industries.',
    responsibilities: [
      'Developed user interfaces using JavaScript, HTML, and CSS',
      'Implemented responsive designs for mobile and desktop',
      'Optimized applications for maximum performance',
      'Collaborated with back-end developers to integrate APIs'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
    type: 'work'
  },
  // {
  //   id: 4,
  //   title: 'Master of Science in Computer Science',
  //   company: 'Stanford University',
  //   location: 'Stanford, CA',
  //   period: '2015 - 2017',
  //   description: 'Focused on web technologies, algorithms, and human-computer interaction.',
  //   responsibilities: [
  //     'Thesis: "Optimizing User Interfaces for Improved Accessibility"',
  //     'Research assistant in the Human-Computer Interaction Lab',
  //     'Teaching assistant for Web Development and Algorithms courses'
  //   ],
  //   technologies: [],
  //   type: 'education'
  // },
  // {
  //   id: 5,
  //   title: 'Bachelor of Science in Software Engineering',
  //   company: 'University of Washington',
  //   location: 'Seattle, WA',
  //   period: '2011 - 2015',
  //   description: 'Comprehensive education in software development methodologies, programming languages, and system design.',
  //   responsibilities: [
  //     'Graduated with honors (3.8 GPA)',
  //     'President of the Web Development Club',
  //     'Completed internship at Microsoft'
  //   ],
  //   technologies: [],
  //   type: 'education'
  // },
  {
    id: 6,
    title: 'Best Frontend Solution',
    company: 'WebTech Awards',
    location: 'Virtual',
    period: '2021',
    description: 'Recognized for creating an innovative and accessible e-commerce interface.',
    responsibilities: [],
    technologies: ['React', 'TypeScript', 'Accessibility'],
    type: 'award'
  }
];

// Filter types
const filterTypes = [
  { value: 'all', label: 'All Experiences' },
  { value: 'work', label: 'Work Experience' },
  { value: 'education', label: 'Education' },
  { value: 'award', label: 'Awards' }
];

const Experience = () => {
  const [filter, setFilter] = useState('all');
  
  // Filter experiences based on selected type
  const filteredExperiences = experiences.filter(
    exp => filter === 'all' || exp.type === filter
  );
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'work':
        return <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />;
      case 'education':
        return <GraduationCap className="w-6 h-6 text-secondary-500 dark:text-secondary-400" />;
      case 'award':
        return <Award className="w-6 h-6 text-accent-400 dark:text-accent-300" />;
      default:
        return <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />;
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey, education, and notable achievements."
        />
        
        {/* Filter controls */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          {filterTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setFilter(type.value)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === type.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 items-center justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                    exp.type === 'work' 
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400' 
                      : exp.type === 'education'
                        ? 'bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400'
                        : 'bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400'
                  }`}>
                    {getIcon(exp.type)}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="card p-6 md:p-8">
                    <div className="flex md:hidden items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        exp.type === 'work' 
                          ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400' 
                          : exp.type === 'education'
                            ? 'bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400'
                            : 'bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400'
                      }`}>
                        {getIcon(exp.type)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                      <p className="text-lg text-primary-700 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                      <span className="text-gray-500 dark:text-gray-400">•</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.location}
                      </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    
                    {exp.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Responsibilities:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;