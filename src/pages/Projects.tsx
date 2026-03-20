import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import IDNET from '@/assets/IDNET.jpg';
import Rehaevents from '@/assets/Reha events.jpg';
import POS from '@/assets/POS.png';
import Portf from '@/assets/Portf.png';
import Delta from '@/assets/Delta.png';
import Healthy from '@/assets/hero-waves.jpg';
import HRMS from '@/assets/HRMS.png';

const projects = [
  {
    title: 'Delta Technologies PLC',
    description: 'Delta Technologies PLC is a software development company that provides software development services to businesses. I am the founder, CEO and software engineer at Delta Technologies PLC.',
    image: Delta,
    tags: ['React native', 'Nexxt.js'],
  },
  {
    title: 'ID NET',
    description: 'ID net is an ongoing project focused in insurance provider agents, The platform helps the agents to understand the insurance policies, and benefits and start earnig profits by selling insurance policies to their clients. ',
    image: IDNET,
    tags: ['React native', 'Nexxt.js'],
  },
  {
    title: 'Reha events',
    description: 'A real time event and ticket booking platform.',
    image: Rehaevents,
    tags: ['React', 'Node.js', 'vite', 'supabase', 'stripe'],
    liveUrl: 'https://rehaevent.vercel.app/',
    githubUrl: 'https://github.com/WossenB/Reha-events.git',
  },
  {
    title: 'POS System',
    description: 'A comprehencive Inventory managment system with branch staff management and all important elements. the Username\'superadmin@admin.com\'and the password\'password\'',
    image: POS,
    tags: ['Laravel', 'Vue.js', 'vite', 'SQL', 'stripe'],
  },
  {
    title: 'Professional Portfolio',
    description: 'A professional portfolio for a friend of mine who is a software engineer.',
    image: Portf,
    tags: ['React', 'vite', 'Tailwind CSS'],
    liveUrl: 'https://portfolio-2818c.web.app/',
  },
  {
    title: 'Healthy',
    description: 'A comprehencive Hospital managment system with branch staff management and all important elements. the Username\'superadmin@admin.com\'and the password\'password\'',
    image: Healthy,
    tags: ['React native', 'Nexxt.js'],
  },
  {
    title: 'Human Resource Management System (HRMS)',
    description: 'A comprehensive HRMS that manages employee information, payroll, leave, and performance.',
    image: HRMS,
    tags: ['Laravel', 'vite', 'Node.js', 'SQL'],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.1s ease-out',
      }}
      className="group bg-card rounded-xl border border-border overflow-hidden relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, hsl(174 72% 46% / 0.15), transparent 40%)`,
        }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, hsl(174 72% 46% / 0.3), transparent, hsl(174 72% 46% / 0.3))',
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
        }}
      />

      <div className="aspect-video overflow-hidden bg-secondary relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6 relative z-10">
        <motion.div
          className="flex gap-2 mb-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.3 }}
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.h3
          className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

        <div className="flex gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 cyber-grid opacity-50" />

      <div className="container mx-auto px-6 relative z-10 py-24">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground text-lg">
              Explore my complete collection of projects and engineering challenges.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground">No projects available yet. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
