import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Zap, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'welcome', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'skills', icon: Zap, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 glass rounded-full px-6 py-3 neon-glow"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-6">
        {navItems.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`p-2 rounded-full transition-all duration-300 ${
              activeSection === id 
                ? 'bg-[#00FFCB] text-[#0D1117]' 
                : 'text-[#F5F5F5] hover:bg-[#00FFCB]/20'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={label}
          >
            <Icon size={20} />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;