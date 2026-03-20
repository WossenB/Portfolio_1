import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import heroWaves from '@/assets/hero-waves.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';
import projectEcommerce from '@/assets/project-ecommerce.jpg';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroWaves, projectDashboard, projectEcommerce];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden cyber-grid"
    >
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{ left: `${particle.x}%`, bottom: '-10px' }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <p className="text-primary text-sm font-medium tracking-widest uppercase">
                Available for new opportunities
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Building the{' '}
              <motion.span
                className="text-gradient inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                future
              </motion.span>{' '}
              of the web.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-md"
            >
              Full-stack developer specializing in scalable, high-performance web applications with a focus on technical excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('#projects')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  variant="outline"
                  className="border-border hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                >
                  Let's Talk
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative perspective-1000"
          >
            <motion.div
              className="relative rounded-xl overflow-hidden border border-border glow"
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                scale: 1.02,
                boxShadow: '0 0 60px hsl(174 72% 46% / 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Window Controls */}
              <div className="bg-card p-2 flex items-center gap-2 border-b border-border relative z-10">
                <motion.button
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors border-none outline-none ${currentImageIndex === 0 ? 'bg-destructive' : 'bg-destructive/30'}`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentImageIndex(0)}
                  aria-label="Show image 1"
                />
                <motion.button
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors border-none outline-none ${currentImageIndex === 1 ? 'bg-primary' : 'bg-primary/30'}`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentImageIndex(1)}
                  aria-label="Show image 2"
                />
                <motion.button
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors border-none outline-none ${currentImageIndex === 2 ? 'bg-accent' : 'bg-accent/30'}`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentImageIndex(2)}
                  aria-label="Show image 3"
                />
              </div>
              {/* Image with scanlines effect */}
              <div className="relative scanlines overflow-hidden w-full h-80 sm:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]}
                    alt={`Hero showcase ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-card border border-primary/50 rounded-lg px-4 py-2 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ transform: 'translateZ(20px)' }}
              >
                <span className="text-xs text-primary font-mono">// Ready to code</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
