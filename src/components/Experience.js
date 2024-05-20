import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section id="experience" className="experience"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Experience</h2>
      <div className="job">
        <h3>Mobile Developer at XYZ Company</h3>
        <p>Developed and maintained several high-quality mobile applications using Flutter and Dart.</p>
      </div>
      <div className="job">
        <h3>Software Engineer at ABC Inc.</h3>
        <p>Worked on cross-platform mobile development and backend integration using Firebase.</p>
      </div>
    </motion.section>
  );
};

export default Experience;
