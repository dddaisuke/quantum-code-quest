import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, RotateCcw } from 'lucide-react';

interface QuantumControlsProps {
  onCollapse: () => void;
  onReset: () => void;
}

export const QuantumControls: React.FC<QuantumControlsProps> = ({
  onCollapse,
  onReset,
}) => {
  return (
    <div className="flex gap-4 justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onCollapse}
        className="px-6 py-3 bg-purple-600 rounded-lg flex items-center gap-2
          hover:bg-purple-500 transition-colors shadow-lg"
      >
        <RefreshCw className="w-5 h-5" />
        Collapse Wave Function
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-6 py-3 bg-red-600 rounded-lg flex items-center gap-2
          hover:bg-red-500 transition-colors shadow-lg"
      >
        <RotateCcw className="w-5 h-5" />
        Reset Game
      </motion.button>
    </div>
  );
};