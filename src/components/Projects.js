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
        <h3>Tai Learner</h3>
        <p>A basic Tai language learning application developed for <a href='https://shaniit.org/'>SIIT</a> (NGO in Myanmar).</p>
        <p>Project is still under development</p>
        <a href='https://github.com/kyilwinoo97/tai_learner.git'>Tai Learner</a>
      </div>
      <div className="project">
        <h3>End To End Encryption Sample Project</h3>
        <p>A mobile app developed using Flutter that allows end-to-end encryption for messaging app.</p>
        <a href='https://github.com/kyilwinoo97/EndToEndSample.git'>EndToEndSample</a>
      </div>
      <div className="project">
        <h3>Lucky</h3>
        <p>A mobile app developed using Flutter that allows users to record their daily money transitions and payments.</p>
        <a href='https://github.com/kyilwinoo97/Lucky.git'>Lucky</a>
      </div>
      <div className="project">
        <h3>Bar Mega</h3>
        <p>A cross-platform mini restaurant management app with mini pos functionality and table management.</p>
        <a href='https://github.com/kyilwinoo97/bar_Mega.git'>Bar Mega</a>
      </div>

      <div className="project">
        <h3>LocationTracker</h3>
        <p>An android app with features of tracking user device location even app is <strong>force close</strong></p>
        <a href='https://github.com/kyilwinoo97/LocationTracker.git'>LocationTracker</a>
      </div>
    </motion.section>
  );
};

export default Projects;
