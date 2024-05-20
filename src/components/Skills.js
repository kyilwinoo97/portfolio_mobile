import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaAndroid, FaJava } from 'react-icons/fa';
import { SiFlutter ,SiKotlin,SiDart} from "react-icons/si";;

const Skills = () => {
  return (
    <motion.section id="skills" className="skills"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Skills</h2>
      <ul>
        <li><FaAndroid/>Android</li>
        <li><SiFlutter/> Flutter</li>
        <li><FaJava/>Java</li>
        <li><SiKotlin/>Kotlin</li>
        <li><SiDart /> Dart</li>
        <li><FaDatabase /> Firebase</li>
        <li><FaDatabase /> MySQL</li>
      
      </ul>
    </motion.section>
  );
};

export default Skills;
