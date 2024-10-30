import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';

interface TutorialProps {
  onStart: () => void;
}

export const Tutorial: React.FC<TutorialProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Info className="w-6 h-6" />
        How to Play
      </h2>
      <div className="space-y-4 text-lg mb-8">
        <p>
          Welcome to Quantum Code Quest! This game simulates quantum computing
          concepts through an engaging puzzle mechanic.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Click on quantum bits (qubits) to flip their states</li>
          <li>
            Adjacent qubits will also flip due to quantum entanglement
          </li>
          <li>
            Make all qubits either 1 (|1⟩) or 0 (|0⟩) to complete each level
          </li>
          <li>
            Higher levels introduce more complex quantum patterns
          </li>
        </ul>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="w-full py-4 bg-purple-600 rounded-lg flex items-center
          justify-center gap-2 hover:bg-purple-500 transition-colors text-xl"
      >
        <Play className="w-6 h-6" />
        Start Quantum Journey
      </motion.button>
    </motion.div>
  );
};