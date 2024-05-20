import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Kyi Lwin Oo</h1>
      <p>Mobile Application Developer</p>
    </motion.header>
  );
};

export default Header;
