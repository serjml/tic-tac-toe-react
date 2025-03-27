import { GameCell } from './components/gameCell/GameCell';
import { GameInfo } from './components/gameInfo/GameInfo';
import { useGameState } from './hooks/useGameState';
import styles from './App.module.scss';

function App() {
  const { cells, currentStep, winnerSequence, makeMove, clearGame, winnerSymbol, isDraw } =
    useGameState();

  return (
    <div className={styles.game}>
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
      <div className={styles.gameField}>
        {cells.map((symbol, index) => {
          return (
            <GameCell
              symbol={symbol}
              isWinner={winnerSequence?.includes(index)}
              index={index}
              onClick={() => makeMove(index)}
            />
          );
        })}
      </div>
      <button className={styles.gameReset} onClick={clearGame}>
        Clear Game
      </button>
    </div>
  );
}

export default App;
