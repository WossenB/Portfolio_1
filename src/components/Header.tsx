import { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home', isAnchor: true },
  { name: 'Projects', href: '#projects', isAnchor: true },
  { name: 'About', href: '#about', isAnchor: true },
  { name: 'Skills', href: '#skills', isAnchor: true },
  { name: 'Achievements', href: '#achievements', isAnchor: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5' 
          : 'bg-background/50 backdrop-blur-md border-b border-border'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/#home"
            className="flex items-center gap-2 text-foreground font-semibold group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center relative overflow-hidden"
              whileHover={{ 
                boxShadow: '0 0 20px hsl(174 72% 46% / 0.5)',
                borderColor: 'hsl(174 72% 46%)'
              }}
            >
              <Terminal className="w-4 h-4 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <span className="group-hover:text-primary transition-colors">Wossen Berhanu</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group">
                {link.isAnchor ? (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors relative"
                  >
                    {link.name}
                    <div className="h-0.5 bg-foreground absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-300" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors relative"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <div className="h-0.5 bg-foreground absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-300" />
                  </Link>
                )}
              </div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="/cv.pdf" 
                download="Wossen_Berhanu_Resume.pdf" 
                className="no-underline"
              >
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden group w-full"
                >
                  <span className="relative z-10">Resume</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="flex flex-col gap-4 py-4">
                {navLinks.map((link, index) => (
                  <div key={link.name}>
                    {link.isAnchor ? (
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left w-full text-left"
                      >
                        {link.name}
                      </motion.button>
                    ) : (
                      <Link
                        to={link.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href="/cv.pdf" 
                    download="Wossen_Berhanu_Resume.pdf" 
                    className="no-underline w-full"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Resume
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
