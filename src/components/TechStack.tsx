import { 
  SiTypescript, 
  SiReact, 
  SiPostgresql, 
  SiLaravel, 
  SiDocker, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiGraphql 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { BarChart3 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const technologies = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React / Next.js', icon: SiReact, color: '#61DAFB' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Laravel', icon: SiLaravel, color: '#DC382D' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Grafana', icon: BarChart3, color: '#F46800' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
];

const TechCard = ({ tech, index }: { tech: typeof technologies[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.1,
        y: -10,
        rotateY: 10,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      }}
      className="relative flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? `0 0 40px ${tech.color}40` : '0 0 0px transparent',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          boxShadow: isHovered ? `inset 0 0 0 1px ${tech.color}` : 'inset 0 0 0 1px transparent',
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        animate={{
          color: isHovered ? tech.color : 'hsl(var(--muted-foreground))',
          rotateY: isHovered ? 360 : 0,
        }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <tech.icon className="w-8 h-8" />
      </motion.div>

      <motion.span
        className="text-sm text-center relative z-10"
        animate={{
          color: isHovered ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
        }}
      >
        {tech.name}
      </motion.span>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: tech.color }}
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 1 
              }}
              animate={{
                x: (Math.random() - 0.5) * 60,
                y: -40 - Math.random() * 20,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

const TechStack = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 cyber-grid"
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Technical <span className="text-gradient">Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            The tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Tech Grid with staggered animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Orbiting decoration */}
        <div className="relative h-0 flex justify-center">
          <motion.div
            className="absolute -top-96 w-[600px] h-[600px] border border-primary/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-primary/50 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
