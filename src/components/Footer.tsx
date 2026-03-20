import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'GitHub', href: 'https://github.com/WossenB' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wossen-berhanu-04930a261/' },
  ];

  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      {/* Animated gradient line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center md:text-left flex items-center gap-1"
          >
            © {currentYear} Wossen Berhanu. Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary inline" fill="currentColor" />
            </motion.span>{' '}
            and precision.
          </motion.p>

          <div className="flex items-center gap-6">
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, color: 'hsl(var(--primary))' }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                boxShadow: '0 5px 20px hsl(174 72% 46% / 0.4)',
              }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
