import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

// 3D Card Component
const AnimatedCard = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateY = useTransform(mouseX, [0, 300], [5, -5]);
  const rotateX = useTransform(mouseY, [0, 300], [-5, 5]);
  const shadowX = useTransform(mouseX, [0, 300], [-10, 10]);
  const shadowY = useTransform(mouseY, [0, 300], [-10, 10]);
  
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };
  
  const shadow = useMotionTemplate`${shadowX}px ${shadowY}px 30px -10px rgba(0, 0, 0, 0.2)`;

  return (
    <motion.div
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="h-full"
    >
      <motion.div 
        style={{
          boxShadow: shadow,
        }}
        className={`h-full transition-all duration-300 ease-out ${className}`}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const achievements = [
   {
    id: 1,
    title: "Certificate of Appriciation",
    issuer: "Inclusive Vision For Democratic Ethiopia (IVDE)",
    date: "2026",
    description: "In recognition of outstanding contribution as a trainer for the 2026 workshop on \'AI fundamentals & Practical AI Tools For NGOs'.",
    tags: ["Trainer", "AI"],
    certificateUrl: "https://drive.google.com/file/d/1TCukK9wBcQDlqFY0YWOA1beATBay0N25/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Certificate in Full Modern React",
    issuer: "Online Learning Platform",
    date: "2025",
    description: "Completed comprehensive React.js course covering hooks, context API, and performance optimization.",
    tags: ["React", "JavaScript", "Frontend"],
    certificateUrl: "https://www.mindluster.com/student/certificate/bf8954b7"
  },
  {
    id: 3,
    title: "Certificate in Fundamental Data Analysis",
    issuer: "online Learning Platform",
    date: "2025",
    description: "Completed comprehensive data analysis course covering statistics, data visualization, and machine learning fundamentals.",
    tags: ["Pyton", "AI", "Excel"],
    certificateUrl: "https://www.udacity.com/certificate/e/a939602a-dc83-11ef-9c1d-c3575b0c5462"
  },
  {
    id: 4,
    title: "Certificate in Fundamental Front-End",
    issuer: "online Learning Platform",
    date: "2023",
    description: "Completed comprehensive front-end development course covering HTML, CSS, JavaScript, and modern frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "BootStrap", "Tailwind", "React"],
    certificateUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTMzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDE0NDYwNl8xNjc1NTg3MzY4LnBuZyIsInVzZXJuYW1lIjoiV29zc2VuIEJlcmhhbnUifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true"
  },
  {
    id: 5,
    title: "Certificate in MERN Stack App Development",
    issuer: "online Learning Platform",
    date: "2024",
    description: "Completed comprehensive MERN stack development course covering MongoDB, Express, React, and Node.js.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    certificateUrl: "https://www.mindluster.com/student/certificate/f0516471"
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mt-4">My Achievements</h1>
        <p className="text-muted-foreground">Certifications and accomplishments throughout my journey</p>
      </motion.div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                },
              },
            }}
            className="h-full"
          >
            <AnimatedCard>
              <Card className="h-full hover:cursor-pointer border-2 border-transparent hover:border-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="relative">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                  <div className="flex justify-between items-start pt-2">
                    <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {achievement.title}
                    </CardTitle>
                    <motion.span 
                      className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {achievement.date}
                    </motion.span>
                  </div>
                  <CardDescription className="text-foreground/80">
                    {achievement.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <motion.p 
                    className="mb-4 text-foreground/90"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ 
                      opacity: 1,
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {achievement.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag, index) => (
                      <motion.div
                        key={tag}
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        whileInView={{ 
                          scale: 1, 
                          opacity: 1,
                          transition: { 
                            delay: 0.5 + (index * 0.1),
                            type: 'spring',
                            stiffness: 300,
                            damping: 10,
                          }
                        }}
                        viewport={{ once: true }}
                        className="pointer-events-none"
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
              
                    ))}
                  </div>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="w-15 mt-5 hover:cursor-pointer transition-all duration-200 hover:scale-105"
                  >
                    <a href={achievement.certificateUrl}>
                      <Award className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedCard>
          </motion.div>
        ))}
      </motion.div>
      </div>
      <Footer />
    </div>
  );
}
