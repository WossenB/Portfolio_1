import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Share2, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Error",
        description: "Email service is not configured properly. Please try again later.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'wosyemar@gmail.com',
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/WossenB', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/wossen-berhanu-04930a261/', label: 'LinkedIn' },
    { icon: Share2, href: '#', label: 'Share' },
  ];

  return (
    <section id="contact" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 80%, hsl(174 72% 46% / 0.1) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Ready to start a <span className="text-gradient">project</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground"
            >
              I'm currently available for freelance work and full-time positions. Let's build something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <motion.div
                className="flex items-center gap-3 text-muted-foreground group cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2 rounded-lg bg-primary/10"
                >
                  <Mail className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="group-hover:text-foreground transition-colors">wosyemar@gmail.com</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-muted-foreground group cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2 rounded-lg bg-primary/10"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="group-hover:text-foreground transition-colors">Addis Ababa, ET</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-muted-foreground group cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2 rounded-lg bg-primary/10"
                >
                  <Phone className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="group-hover:text-foreground transition-colors">+251 939 153 543</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: '0 10px 30px hsl(174 72% 46% / 0.3)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 relative"
          >
            {/* Form glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="grid sm:grid-cols-2 gap-4 relative">
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <label className="text-sm text-muted-foreground">NAME</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 transition-all"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <label className="text-sm text-muted-foreground">EMAIL</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              className="space-y-2 relative"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <label className="text-sm text-muted-foreground">MESSAGE</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows={5}
                required
                className="bg-background border-border resize-none focus:border-primary focus:ring-primary/20 transition-all"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-2"
                  animate={isSubmitting ? { opacity: 0.5 } : { opacity: 1 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.span>

                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
