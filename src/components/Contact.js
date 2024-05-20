import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section id="contact" className="contact"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact</h2>
      <p>Email: khant.bmruby@gmail.com</p>
      <p>LinkedIn: https://www.linkedin.com/in/kokyi</p>
      <p>GitHub: https://github.com/kyilwinoo97</p>
    </motion.section>
  );
};

export default Contact;
