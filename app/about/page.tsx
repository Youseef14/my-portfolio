"use client";

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Code2, Palette, Zap, Globe, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    { name: 'React & Next.js', level: 95, icon: Code2, color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', level: 90, icon: Code2, color: 'from-blue-500 to-indigo-500' },
    { name: 'Tailwind CSS', level: 95, icon: Palette, color: 'from-indigo-500 to-purple-500' },
    { name: 'JavaScript (ES6+)', level: 93, icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'UI/UX Design', level: 88, icon: Palette, color: 'from-pink-500 to-rose-500' },
    { name: 'Responsive Design', level: 96, icon: Globe, color: 'from-green-500 to-emerald-500' },
  ];

  const experience = [
    {
      title: 'Front-End Developer',
      company: 'Happytbooking.com',
      period: 'January 2025 - Present',
      description: 'Developing responsive hotel management web applications using Next.js, HTML, and Tailwind CSS. Building custom websites for multiple hotel branches as part of a comprehensive SaaS platform.',
    },
    {
      title: 'Front-End Intern',
      company: 'Jobzella',
      period: 'June 2024 - January 2025',
      description: 'Developed responsive user interfaces using HTML, CSS, and JavaScript. Collaborated with UI/UX designers to convert Figma designs into pixel-perfect web applications. Improved SEO and page speed performance.',
    },
    {
      title: 'Freelance Developer',
      company: 'Independent',
      period: '2023 - 2024',
      description: 'Built modern websites for clients including Sharp Floors TX and Prime Hotels Group using Next.js, TypeScript, and Tailwind CSS.',
    },
  ];

  return (
    <div className="bg-gradient-animated grid-bg min-h-screen relative overflow-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-32">
        <div className="max-w-6xl w-full mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6">
              <BookOpen className="w-4 h-4 text-indigo-400" strokeWidth={2.5} />
              <span className="text-sm font-medium text-gray-300">About Me</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Know More <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Front-End Web Developer with strong skills in building modern, responsive, and accessible websites using React, Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
                  <Image
                    src="/Picsart_22-01-23_00-28-27-977.jpg"
                    alt="Youseef Bauomey"
                    width={96}
                    height={96}
                    className="relative rounded-2xl object-cover shadow-xl ring-4 ring-white/10"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Youseef Bauomey</h2>
                  <p className="text-gray-400">Front-End Developer</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Front-End Web Developer proficient in clean code practices, component-based architecture, cross-browser compatibility, and integrating REST APIs. 
                I specialize in building modern, responsive websites using React, Next.js, TypeScript, and Tailwind CSS. Open to remote or on-site roles, seeking challenging opportunities in agile teams.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl">
                  <Award className="w-6 h-6 text-indigo-400 mb-2" />
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-sm text-gray-500">Years Exp</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <Award className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-indigo-400" strokeWidth={2} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Work Experience</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {experience.map((exp, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                  <p className="text-indigo-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-indigo-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Bachelor's Degree in Computer Science</h4>
                  <p className="text-gray-400 mb-1">2018 - 2022</p>
                  <p className="text-sm text-gray-500">Final Grade: Good</p>
                </div>
                <div className="glass-card p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                  <p className="text-sm font-semibold text-indigo-400 mb-1">Graduation Project</p>
                  <p className="text-white">University Portal System</p>
                  <p className="text-xs text-gray-400 mt-1">Grade: Excellent</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-purple-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-all">
                  <p className="font-semibold mb-1">Front-End Developer</p>
                  <p className="text-sm text-gray-400">Rout Academy</p>
                </div>
                <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-all">
                  <p className="font-semibold mb-1">UI/UX Design</p>
                  <p className="text-sm text-gray-400">Jobzella</p>
                </div>
                <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-all">
                  <p className="font-semibold mb-1">CCNA</p>
                  <p className="text-sm text-gray-400">Yat Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
