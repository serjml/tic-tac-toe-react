import { GameInfoProps } from '../../types/types';
import { GameSymbol } from '../gameSymbol/GameSymbol';
import styles from './GameInfo.module.scss';

export const GameInfo: React.FC<GameInfoProps> = ({ isDraw, winnerSymbol, currentStep }) => {
  if (isDraw) {
    return <div className={styles.gameInfo}>Draw</div>;
  }
  if (winnerSymbol) {
    return (
      <div className={styles.gameInfo}>
        Winner: <GameSymbol symbol={winnerSymbol ?? currentStep} />
      </div>
    );
  }
  return (
    <div className={styles.gameInfo}>
      Move: <GameSymbol symbol={currentStep} />
    </div>
  );
};
