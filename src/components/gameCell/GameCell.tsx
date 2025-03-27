import { CellProps } from '../../types/types';
import { GameSymbol } from '../gameSymbol/GameSymbol';
import styles from './GameCell.module.scss';

export const GameCell: React.FC<CellProps> = ({ isWinner, onClick, symbol, index }) => {
  return (
    <button
      key={index}
      className={`${styles.cell} ${isWinner && styles.cellWin}`}
      onClick={onClick}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  );
};
