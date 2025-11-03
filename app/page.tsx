"use client";

import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="bg-gradient-animated grid-bg min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16">
        <div className="max-w-7xl w-full mx-auto">
          
          {/* Grid Layout - Left (Content) & Right (Laptop) */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side - Hero Content */}
            <div className="space-y-10">
              
              {/* Profile Image */}
              <div className="relative w-44 h-44 lg:w-52 lg:h-52">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-70 animate-pulse"></div>
                <Image
                  src="/Picsart_22-01-23_00-28-27-977.jpg"
                  alt="Youseef Bauomey"
                  width={208}
                  height={208}
                  className="relative rounded-3xl object-cover shadow-2xl ring-4 ring-white/10"
                  priority
                />
              </div>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card">
                <Sparkles className="w-4 h-4 text-indigo-400" strokeWidth={2.5} />
                <span className="text-sm font-medium text-gray-300">Available for new projects</span>
              </div>

              {/* Name & Title */}
              <div className="space-y-5">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                  Hi, I'm <span className="text-gradient">Youseef Bauomey</span>
                </h1>
                <p className="text-3xl lg:text-4xl text-gray-400 font-light tracking-wide">
                  Front-End Developer
                </p>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl">
                Front-End Web Developer specializing in building modern, responsive, and accessible websites. 
                Proficient in React, Next.js, TypeScript, Tailwind CSS, and clean code practices with REST API integration.
              </p>

              {/* CTA & Social Links */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* Get in Touch Button */}
                  <Link href="/contact" className="btn-glow flex items-center gap-3 group">
                    <span>Get in touch</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  </Link>
                  
                  {/* Download CV Button */}
                  <a 
                    href="/youseef_Frontend.pdf" 
                    download="Youseef_Bauomey_CV.pdf"
                    className="px-8 py-4 rounded-2xl glass-card flex items-center gap-3 font-semibold hover:bg-white/10 transition-all group border-2 border-white/10"
                  >
                    <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} />
                    <span>Download CV</span>
                  </a>
                </div>
                
                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/dashboard" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-white/10 transition-all group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={2} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/youseef-bauomey-104724219/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-white/10 transition-all group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={2} />
                  </a>
                  <a 
                    href="mailto:youseefbauomey@gmail.com"
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-white/10 transition-all group"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={2} />
                  </a>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-8 pt-6 max-w-lg">
                <div className="space-y-1">
                  <div className="text-4xl font-bold">2+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Years Exp</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Projects</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold">3</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Certificates</div>
                </div>
              </div>
            </div>

            {/* Right Side - Laptop Mockup with Code */}
            <div className="laptop-mockup">
              <div className="laptop-screen">
                
                {/* Browser Window Controls */}
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-lg"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-lg"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-lg"></div>
                  <div className="ml-auto flex items-center gap-2 text-gray-600 text-xs">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>portfolio.tsx</span>
                  </div>
                </div>

                {/* Code Display with Syntax Highlighting */}
                <div className="space-y-1">
                  <div className="code-line">
                    <span className="syntax-purple">const</span>{' '}
                    <span className="syntax-cyan">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-white">{'{'}</span>
                  </div>
                  
                  <div className="code-line pl-6">
                    <span className="syntax-blue">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="syntax-yellow">'Youseef Bauomey'</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="code-line pl-6">
                    <span className="syntax-blue">role</span>
                    <span className="text-white">:</span>{' '}
                    <span className="syntax-yellow">'Front-End Developer'</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="code-line pl-6">
                    <span className="syntax-blue">skills</span>
                    <span className="text-white">: [</span>
                  </div>
                  
                  <div className="code-line pl-12">
                    <span className="syntax-yellow">'React'</span>
                    <span className="text-white">,</span>{' '}
                    <span className="syntax-yellow">'Next.js'</span>
                    <span className="text-white">,</span>{' '}
                    <span className="syntax-yellow">'TypeScript'</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="code-line pl-12">
                    <span className="syntax-yellow">'Tailwind CSS'</span>
                    <span className="text-white">,</span>{' '}
                    <span className="syntax-yellow">'Node.js'</span>
                  </div>
                  
                  <div className="code-line pl-6">
                    <span className="text-white">],</span>
                  </div>
                  
                  <div className="code-line pl-6">
                    <span className="syntax-green">hireable</span>
                    <span className="text-white">:</span>{' '}
                    <span className="syntax-orange">true</span>
                    <span className="text-white">,</span>
                  </div>
                  
                  <div className="code-line">
                    <span className="text-white">{'}'}</span>
                    <span className="syntax-comment">;</span>
                    <span className="cursor-blink text-white ml-1">▊</span>
                  </div>
                </div>

                {/* Decorative Gradient Orbs */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-gradient-to-br from-pink-500/15 to-orange-500/15 blur-3xl"></div>
              </div>
              
              {/* Laptop Base */}
              <div className="laptop-base"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="fixed top-20 right-20 w-2 h-2 rounded-full bg-indigo-500 animate-pulse opacity-60"></div>
      <div className="fixed bottom-32 left-32 w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse opacity-40"></div>
      <div className="fixed top-1/2 right-1/4 w-1 h-1 rounded-full bg-pink-500 animate-pulse opacity-50"></div>
    </div>
  );
}
