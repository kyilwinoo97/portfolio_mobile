import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section id="about" className="about"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>
        I am a Mobile developer with a passion for building beautiful and functional mobile applications. With a strong foundation in both front-end and back-end development, I am dedicated to creating seamless user experiences.
      </p>
    </motion.section>
  );
};

export default About;

