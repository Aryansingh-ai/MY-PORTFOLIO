// components/DifficultyBar.tsx
'use client';

import { motion } from 'framer-motion';

interface DifficultyBarProps {
  label: string;
  value: number;
  color: string; // Tailwind color like "green-400"
  total: number;
}

const DifficultyBar = ({ label, value, color, total }: DifficultyBarProps) => {
  const percentage = total ? Math.round((value / total) * 100) : 0;

  return (
    <motion.div
      className="text-center p-4 glass rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`text-2xl font-bold text-${color} mb-1`}>{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <motion.div
          className={`h-2 bg-${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default DifficultyBar;
