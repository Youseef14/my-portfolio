"use client";

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'youseefbauomey@gmail.com',
      link: 'mailto:youseefbauomey@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '01116445418',
      link: 'tel:01116445418',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cairo, Egypt',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/dashboard',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/youseef-bauomey-104724219/',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <div className="bg-gradient-animated grid-bg min-h-screen relative overflow-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="relative z-10 px-6 py-32">
        <div className="max-w-6xl w-full mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6">
              <Mail className="w-4 h-4 text-indigo-400" strokeWidth={2.5} />
              <span className="text-sm font-medium text-gray-300">Get In Touch</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Send me a message and let's discuss!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-400 break-all">{info.value}</p>
                  </div>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}

              {/* Social Links */}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:scale-110 transition-all ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 rounded-3xl">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-indigo-500 focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-indigo-500 focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-indigo-500 focus:outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-indigo-500 focus:outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-glow flex items-center justify-center gap-3 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
