import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap } from 'lucide-react';

interface ScoreBoardProps {
  score: number;
  level: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, level }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-purple-900/50 p-4 rounded-lg backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 text-purple-300 mb-2">
          <Trophy className="w-5 h-5" />
          <span>Score</span>
        </div>
        <div className="text-3xl font-bold">{score}</div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-blue-900/50 p-4 rounded-lg backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 text-blue-300 mb-2">
          <Zap className="w-5 h-5" />
          <span>Level</span>
        </div>
        <div className="text-3xl font-bold">{level}</div>
      </motion.div>
    </div>
  );
};