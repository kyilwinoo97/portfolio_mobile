import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section id="projects" className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>A mobile app developed using Flutter that allows users to track their fitness activities.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>A cross-platform e-commerce app with real-time chat functionality and payment integration.</p>
      </div>
    </motion.section>
  );
};

export default Projects;
