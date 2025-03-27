import { WinnerSequenceType, Symbol } from '../types/types';

export const computedWinner = (cells: Symbol[]): WinnerSequenceType => {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return line;
    }
  }

  return null;
};
