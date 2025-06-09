import { useState } from "react";
import { Github, ExternalLink, Search } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import aStainFlooringImg from "../assets/images/A-Stain Flooring.png";

// Project data
const projects = [
  {
    id: "1",
    title: "Ferrell Colony Manager Platform",
    description: "A full-featured online Ferrell Colony Manager App.",
    image:
      "https://i.etsystatic.com/16741186/r/il/93dea9/6370784152/il_600x600.6370784152_lhzx.jpg",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    //demoUrl: 'https://mikew194.github.io/ferrell-colony-manager/',
    //repoUrl: 'https://github.com/mikew194/ferrell-colony-manager',
    // startDate: new Date('2023-01-10'),
    // endDate: new Date('2023-05-20'),
    github: "https://github.com/mikew194/ferrell-colony-manager",
    live: "https://mikew194.github.io/ferrell-colony-manager/",
    featured: true,
  },
  // {
  //   id: 1,
  //   title: 'E-Commerce Platform',
  //   description: 'A full-featured online shopping platform with user authentication, product catalog, and payment processing.',
  //   image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  //   category: 'Full Stack',
  //   github: '#',
  //   live: '#',
  //   featured: true
  // },
  {
    id: "2",
    title: "Cat Management App",
    description: "This app collects information on an individual cat.",
    image:
      "https://suchcats.com/wp-content/uploads/2025/04/ylcenyfr2143057470-768x929.jpg",
    tags: ["React", "Firebase", "Material-UI"],
    category: "Full Stack",
    //demoUrl: 'https://mikew194.github.io/cat-manager/',
    //repoUrl: 'https://github.com/mikew194/cat-manager',
    //startDate: new Date('2022-08-15'),
    //endDate: new Date('2022-11-30')
    github: "https://github.com/mikew194/cat-manager",
    live: "https://mikew194.github.io/cat-manager/",
    featured: true,
  },
  // {
  //   id: 2,
  //   title: 'Task Management App',
  //   description: 'A productivity application that helps users organize tasks, set deadlines, and track progress on projects.',
  //   image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['React', 'Firebase', 'Tailwind CSS'],
  //   category: 'Frontend',
  //   github: '#',
  //   live: '#',
  //   featured: true
  // },
  {
    id: 3,
    title: "A-Stain Flooring",
    description:
      "A-Stain Flooring, specializes in Staining Wood Floors or Concreate Drives and Patio Flooring.",
    image: aStainFlooringImg,
    tags: ["Angular 19", "ghPages", "Javascript","Material"],
    category: "Full Stack",
    github: "https://github.com/mikew194/CustomerOrderApp",
    live: "https://mikew194.github.io/CustomerOrderApp/",
    featured: true,
  }, 
  { 
    id: 4,
    title: 'Developer Portfolio',
    description: 'My Portfolio which desplay someof my work.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'GH-Pages', 'TailWind'],
    category: 'Full Stack',
    
    featured: false
  },
  // {
  //   id: 5,
  //   title: 'Recipe Finder App',
  //   description: 'An application for discovering and saving recipes, with filtering options and nutritional information.',
  //   image: 'https://images.pexels.com/photos/4051818/pexels-photo-4051818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['React Native', 'Redux', 'Food API'],
  //   category: 'Mobile',
  //   github: '#',
  //   live: '#',
  //   featured: false
  // },
  // {
  //   id: 6,
  //   title: 'Finance Tracker',
  //   description: 'Personal finance management tool for tracking expenses, income, and savings goals with data visualization.',
  //   image: 'https://images.pexels.com/photos/6289027/pexels-photo-6289027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   tags: ['Vue.js', 'Express', 'D3.js'],
  //   category: 'Full Stack',
  //   github: '#',
  //   live: '#',
  //   featured: false
  // },
  {
    id: 7,
    title: 'Blazor with Fluent.UI',
    description: 'Ealuating Microsoft Fluent.UI tools for Blazor',
    image: 'https://images.pexels.com/photos/5957107/pexels-photo-5957107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Blazor', 'C#', 'Fluent-UI'],
    category: 'Frontend',
    github: '#',
    live: '#',
    featured: false
  },
  {
    id: 8,
    title: "Fitness Tracker API",
    description:
      "Backend service for fitness applications, providing user data, workout plans, and progress tracking.",
    image:
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    github: "#",
    live: "#",
    featured: false,
  },
];

// Categories for filtering
const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null); // <-- fix: was number | null, should be string | null

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeading
          title="My Projects"
          subtitle="A collection of my work showcasing my skills in web development, design, and problem-solving."
        />

        {/* Search and Filter Controls */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
                onMouseEnter={() => setHoveredId(project.id.toString())}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out border-2 border-black"
                    style={{
                      transform:
                        hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-gray-900/50 text-white rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-400 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No projects found matching your criteria. Try adjusting your
                search or filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
