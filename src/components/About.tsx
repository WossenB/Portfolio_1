import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Building2, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const stats = [
  { number: 5, suffix: '+', label: 'Years of Experience' },
  { number: 40, suffix: '+', label: 'Projects Delivered' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <section id="about" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            <motion.div
              className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
              whileHover={{
                boxShadow: '0 0 60px hsl(174 72% 46% / 0.3)',
              }}
            >
              <motion.img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 border border-primary/30 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-12 h-12 bg-primary/20 rounded-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 45, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>

            {/* Decorative corner brackets */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            {/* Fancy Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide shadow-lg shadow-primary/10 relative overflow-hidden group cursor-default"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
              <Building2 className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Founder & CEO, Delta Technologies PLC</span>
              <Sparkles className="w-4 h-4 relative z-10 text-primary/70" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Engineering Solutions with{' '}
              <span className="text-gradient">Passion</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I'm Wossen Berhanu, a full-stack engineer who thrives on solving complex problems and building seamless digital experiences. With a background in distributed systems and UI design, I bridge the gap between back-end robustness and front-end elegance.
              </p>
              <p>
                My philosophy is simple: write clean, maintainable code that delivers real value. Whether it's architecting a microservices-based API or crafting an intuitive user flow, I focus on performance, security, and scalability.
              </p>
            </motion.div>

            {/* Stats with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-12 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-default"
                >
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
