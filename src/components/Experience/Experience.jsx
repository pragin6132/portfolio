import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "../../constants/data";
import Timeline from "../Timeline/Timeline";

export default function Experience() {
  // Convert structures to match timeline format
 const educationItems = EDUCATION.map(item => ({
  id: `edu-${item.id}`,
  title: item.degree,
  subtitle: item.institution,
  duration: item.duration,
  description: `Academic Grade: ${item.score}`,

  specialization: item.specialization,
  affiliation: item.affiliation,
  coursework: item.coursework
}));

  const experienceItems = EXPERIENCE.map(item => ({
    id: `exp-${item.id}`,
    title: item.role,
    subtitle: item.company,
    duration: item.duration,
    description: item.description,
    points: item.points
  }));

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-20 relative w-full overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-16 text-center select-none">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
          Journey & <span className="text-gradient-primary">Experience</span>
        </h2>
        <div className="section-header-underline mt-3" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Education Timeline */}
        <div className="flex flex-col gap-8 w-full">
          <h3 className="font-display font-extrabold text-xl md:text-2xl text-white pl-4 border-l-4 border-secondary select-none">
            Education
          </h3>
          <Timeline items={educationItems} />
        </div>

        {/* Experience Timeline */}
        <div className="flex flex-col gap-8 w-full">
          <h3 className="font-display font-extrabold text-xl md:text-2xl text-white pl-4 border-l-4 border-primary select-none">
            Experience
          </h3>
          <Timeline items={experienceItems} />
        </div>
      </div>
    </section>
  );
}
