export enum Symbol {
  x = 'X',
  o = 'O',
}

export type WinnerSequenceType = number[] | null;

export type GameInfoProps = {
  isDraw: boolean;
  winnerSymbol: Symbol | null;
  currentStep: Symbol;
};

export type CellProps = {
  isWinner: boolean | undefined;
  onClick: () => void;
  symbol: Symbol;
  index: number;
};
