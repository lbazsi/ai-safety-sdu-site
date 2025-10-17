import { useState, useEffect } from 'react';
import { Menu, X, Shield, Users, Calendar, Mail, MessageCircle, Instagram } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'ai-safety', 'events', 'contacts', 'newsletter'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleNewsletterSubmit = () => {
    if (newsletterEmail) {
      alert('Thank you for subscribing to our newsletter!');
      setNewsletterEmail('');
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'ai-safety', label: 'What is AI Safety' },
    { id: 'events', label: 'Events' },
    { id: 'contacts', label: 'Contacts' },
    { id: 'newsletter', label: 'Newsletter' }
  ];

  const events = [
    {
      title: 'EU AI Act Hackathon',
      date: 'November 22, 2025',
      description: 'Open to all students (including European Studies and Business), full-day event (9:00–20:00)',
      type: 'Hackathon'
    },
    {
      title: 'Intro to AI Safety SDU',
      date: 'November 4, 2025',
      description: '2-hour introductory seminar about AI Safety and the organization',
      type: 'Seminar'
    },
    {
      title: 'Movie Night',
      date: 'November 5, 2025',
      description: 'Surprise film/series followed by an informative discussion (starts at 19:30)',
      type: 'Social'
    }
  ];

  const safetyTopics = [
    {
      icon: <div className="w-8 h-8 text-cyan-400">⚠️</div>,
      title: 'Alignment',
      description: 'Ensuring AI systems behave in accordance with human values and intentions'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Robustness',
      description: 'Building AI systems that are reliable, secure, and resistant to failures'
    },
    {
      icon: <div className="w-8 h-8 text-cyan-400">📖</div>,
      title: 'Interpretability',
      description: 'Understanding how AI systems make decisions and identifying potential risks'
    },
    {
      icon: <div className="w-8 h-8 text-cyan-400">🎯</div>,
      title: 'Governance',
      description: 'Developing policies and frameworks for responsible AI development'
    }
  ];

  const teamContacts = [
    {
      name: 'Balázs László',
      email: 'lbalas25@student.sdu.dk'
    },
    {
      name: 'Edna Guerreiro',
      email: 'edna25@student.sdu.dk'
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/logo.png" 
                alt="AI Safety SDU Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Safety SDU
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-cyan-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Building a safer AI future
            </span>
            <br />
            <span className="text-gray-100">— together.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            A student-led community at the University of Southern Denmark dedicated to understanding and advancing AI safety research
          </p>
          <button
            onClick={() => scrollToSection('newsletter')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Join Us</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                AI Safety SDU is a student-led initiative at the University of Southern Denmark, bringing together researchers, students, and AI enthusiasts who share a common goal: ensuring that artificial intelligence systems are developed safely and aligned with human values.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We organize reading groups, workshops, and collaborative research projects that explore the technical, ethical, and societal challenges of advanced AI systems. Our community spans multiple disciplines, from computer science to philosophy, creating a rich environment for interdisciplinary learning.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <Users className="w-10 h-10 text-cyan-400 mb-3" />
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-gray-400">Active Members</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <Calendar className="w-10 h-10 text-cyan-400 mb-3" />
                <h3 className="text-2xl font-bold mb-2">24+</h3>
                <p className="text-gray-400">Events Hosted</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-2xl font-bold mb-2">12+</h3>
                <p className="text-gray-400">Research Projects</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="text-2xl font-bold mb-2">∞</h3>
                <p className="text-gray-400">Ideas Shared</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI Safety Section */}
      <section id="ai-safety" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">What is AI Safety?</h2>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            AI Safety is a field focused on ensuring that artificial intelligence systems are reliable, beneficial, and aligned with human values as they become more capable and autonomous.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                <p className="text-gray-400">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                    {event.type}
                  </span>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-cyan-400 text-sm mb-3">{event.date}</p>
                <p className="text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
                  ></textarea>
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">aisafetysdu@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400">Denmark, Sønderborg</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-700">
                  <p className="font-medium mb-4">Team Contacts</p>
                  <div className="space-y-4">
                    {teamContacts.map((contact, index) => (
                      <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <p className="font-medium text-cyan-400 mb-1">{contact.name}</p>
                        <p className="text-sm text-gray-400">{contact.email}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <p className="font-medium mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://chat.whatsapp.com/HzLVb9SP7RR5YpU7oaV6V4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61582480313874" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/aisafetysdu/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-y border-cyan-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-400 mb-8">
            Subscribe to our newsletter for updates on events, research opportunities, and AI safety news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={handleNewsletterSubmit}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 AI Safety SDU. All rights reserved.</p>
          <a href="#" className="hover:text-cyan-400 transition-colors mt-2 sm:mt-0">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
