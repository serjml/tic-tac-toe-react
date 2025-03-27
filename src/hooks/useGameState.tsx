import { useState } from 'react';
import { Symbol, WinnerSequenceType } from '../types/types';
import { INITIAL_CELLS } from '../constants/constants';
import { computedWinner } from '../utils/computedWinner';

export function useGameState() {
  const [currentStep, setCurrentStep] = useState<Symbol>(Symbol.x);
  const [cells, setSells] = useState<Symbol[]>(INITIAL_CELLS);
  const [winnerSequence, setWinnerSequence] = useState<WinnerSequenceType>(null);

  const makeMove = (index: number): void => {
    if (cells[index] || winnerSequence) {
      return;
    }

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computedWinner(cellsCopy);

    setCurrentStep(currentStep === Symbol.x ? Symbol.o : Symbol.x);
    setSells(cellsCopy);
    setWinnerSequence(winner);
  };

  const winnerSymbol: Symbol | null = winnerSequence ? cells[winnerSequence[0]] : null;
  const isDraw: boolean = cells.every((cell) => Boolean(cell)) && !winnerSequence;

  const clearGame = (): void => {
    setCurrentStep(Symbol.x);
    setSells(INITIAL_CELLS);
    setWinnerSequence(null);
  };

  return {
    cells,
    currentStep,
    winnerSequence,
    makeMove,
    clearGame,
    winnerSymbol,
    isDraw,
  };
}
