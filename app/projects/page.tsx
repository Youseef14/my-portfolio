"use client";

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const [darkMode, setDarkMode] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const categories = ['All', 'Web Apps', 'Websites', 'UI/UX'];

  const projects = [
    {
      title: 'Sharp Floors TX',
      category: 'Websites',
      description: 'Professional flooring company website with modern design and service showcase',
      image: '/sharp.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/sharp-floors-tx',
      demo: 'https://www.sharpfloorstx.com/',
      featured: true,
    },
    {
      title: 'Prime Hotels Group',
      category: 'Websites',
      description: 'Luxury hotel booking platform with elegant design and seamless user experience',
      image: '/prime.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/prime-hotels-group',
      demo: 'https://primehotelsgroup.com',
      featured: true,
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      description: 'A full-featured e-commerce platform built with Next.js and Stripe integration',
      image: '/e-commerce.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com/yourusername/e-commerce-platform',
      demo: 'https://example.com',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      category: 'Websites',
      description: 'Modern portfolio website with dark mode and smooth animations',
      image: '/protfolio.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/portfolio-website',
      demo: 'https://example.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      category: 'Web Apps',
      description: 'Collaborative task management tool with real-time updates',
      image: '/task.png',
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/yourusername/task-management-app',
      demo: 'https://example.com',
      featured: false,
    },
    {
      title: 'Restaurant Website',
      category: 'Websites',
      description: 'Beautiful restaurant website with online reservation system',
      image: '/restaurant.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/restaurant-website',
      demo: 'https://example.com',
      featured: false,
    },
    {
      title: 'Admin Dashboard',
      category: 'UI/UX',
      description: 'Modern admin dashboard with data visualization components',
      image: '/admin.png',
      technologies: ['Figma', 'React', 'Chart.js'],
      github: 'https://github.com/yourusername/admin-dashboard',
      demo: 'https://example.com',
      featured: false,
    },
    {
      title: 'Social Media App',
      category: 'Web Apps',
      description: 'Social networking platform with real-time chat and posts',
      image: '/social.png',
      technologies: ['Next.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/yourusername/social-media-app',
      demo: 'https://example.com',
      featured: true,
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-gradient-animated grid-bg min-h-screen relative overflow-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="relative z-10 px-6 py-32">
        <div className="max-w-7xl w-full mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6">
              <FolderGit2 className="w-4 h-4 text-indigo-400" strokeWidth={2.5} />
              <span className="text-sm font-medium text-gray-300">My Work</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              A collection of projects I've worked on, showcasing my skills in front-end development
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`
                    px-6 py-2.5 rounded-xl font-medium transition-all
                    ${filter === category
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                      : 'glass-card hover:bg-white/10 text-gray-300'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold z-10">
                      Featured
                    </div>
                  )}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-white/5 text-xs text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card hover:bg-white/10 transition-all flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" strokeWidth={2} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg transition-all flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" strokeWidth={2} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
