import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Binary, BrainCircuit, Maximize2, Minimize2 } from 'lucide-react';
import { GameBoard } from './components/GameBoard';
import { QuantumControls } from './components/QuantumControls';
import { ScoreBoard } from './components/ScoreBoard';
import { Tutorial } from './components/Tutorial';

function App() {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [quantumStates, setQuantumStates] = useState<boolean[][]>(
    Array(4).fill(Array(4).fill(false))
  );

  const startGame = () => {
    setGameStarted(true);
    setShowTutorial(false);
    setScore(0);
    setCurrentLevel(1);
    initializeQuantumStates();
  };

  const initializeQuantumStates = () => {
    const newStates = Array(4)
      .fill(null)
      .map(() =>
        Array(4)
          .fill(null)
          .map(() => Math.random() > 0.5)
      );
    setQuantumStates(newStates);
  };

  const handleCellClick = (row: number, col: number) => {
    if (!gameStarted) return;

    const newStates = quantumStates.map((r, i) =>
      r.map((cell, j) => {
        if (i === row && j === col) {
          return !cell;
        }
        if (
          (Math.abs(i - row) === 1 && j === col) ||
          (i === row && Math.abs(j - col) === 1)
        ) {
          return !cell;
        }
        return cell;
      })
    );

    setQuantumStates(newStates);
    checkWinCondition(newStates);
  };

  const checkWinCondition = (states: boolean[][]) => {
    const allTrue = states.every((row) => row.every((cell) => cell));
    const allFalse = states.every((row) => row.every((cell) => !cell));

    if (allTrue || allFalse) {
      setScore((prev) => prev + currentLevel * 100);
      setCurrentLevel((prev) => prev + 1);
      setTimeout(initializeQuantumStates, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <Atom className="w-8 h-8" />
            Quantum Code Quest
            <BrainCircuit className="w-8 h-8" />
          </h1>
          <p className="text-xl text-purple-200">
            Master the quantum realm through parallel computing puzzles
          </p>
        </motion.div>

        {showTutorial ? (
          <Tutorial onStart={startGame} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ScoreBoard score={score} level={currentLevel} />
              <QuantumControls
                onCollapse={() => initializeQuantumStates()}
                onReset={() => setGameStarted(false)}
              />
            </div>
            <GameBoard
              states={quantumStates}
              onCellClick={handleCellClick}
              gameStarted={gameStarted}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;