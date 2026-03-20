import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AchievementsPreview from '@/components/AchievementsPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <AchievementsPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
