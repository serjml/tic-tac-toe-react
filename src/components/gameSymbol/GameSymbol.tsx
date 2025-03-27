import { JSX } from 'react';
import { Symbol } from '../../types/types';
import styles from './GameSymbol.module.scss';

export const GameSymbol = ({ symbol }: { symbol: Symbol }): JSX.Element => {
  const getSymbolClassName = (symbol: Symbol) => {
    return symbol === Symbol.x ? styles.symbolX : styles.symbolO;
  };
  return <span className={`${styles.symbol} ${getSymbolClassName(symbol)}`}>{symbol}</span>;
};
