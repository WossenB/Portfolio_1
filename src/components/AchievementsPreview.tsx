import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievements = [
  {
    id: 1,
    title: "Certificate of Appriciation",
    issuer: "Inclusive Vision For Democratic Ethiopia (IVDE)",
    year: "2026",
    description: "In recognition of outstanding contribution as a trainer for the 2026 workshop on \'AI fundamentals & Practical AI Tools For NGOs'.",

  },
  {
    id: 2,
    title: "React Certification",
    issuer: "React Training",
    year: "2025",
    description: "Advanced React patterns and performance optimization techniques.",
  }
];

export default function AchievementsPreview() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognitions and certifications that showcase my expertise and dedication to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{achievement.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <Button 
            asChild 
            variant="outline" 
            className="group"
          >
            <a href="/achievements">
              View All Achievements
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
