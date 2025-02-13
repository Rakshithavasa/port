import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python',
  'AI Full Stack',
  'Data Structures',
  'React.js',
  'Tailwind CSS',
  'Web Development',
];

export const MovingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ x: '-100%', y: index * 100 }}
          animate={{
            x: '100%',
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 2,
            },
          }}
          className="whitespace-nowrap text-4xl font-bold absolute"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
};