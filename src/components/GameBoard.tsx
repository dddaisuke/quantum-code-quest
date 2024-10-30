import React from 'react';
import { motion } from 'framer-motion';

interface GameBoardProps {
  states: boolean[][];
  onCellClick: (row: number, col: number) => void;
  gameStarted: boolean;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  states,
  onCellClick,
  gameStarted,
}) => {
  return (
    <div className="grid gap-2 p-4 bg-black/30 rounded-lg backdrop-blur-sm">
      {states.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((cell, j) => (
            <motion.button
              key={`${i}-${j}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                backgroundColor: cell
                  ? 'rgb(139, 92, 246)'
                  : 'rgb(30, 41, 59)',
                rotate: cell ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
              onClick={() => gameStarted && onCellClick(i, j)}
              className={`w-20 h-20 rounded-lg flex items-center justify-center
                text-2xl font-bold shadow-lg transform transition-all
                ${
                  gameStarted
                    ? 'cursor-pointer hover:shadow-purple-500/50'
                    : 'cursor-not-allowed'
                }`}
            >
              {cell ? '1' : '0'}
            </motion.button>
          ))}
        </div>
      ))}
    </div>
  );
};