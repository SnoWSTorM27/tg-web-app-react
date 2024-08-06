import { CSSProperties } from 'react';
import styles from './MainButton.module.css';

type MainButtonProps = {
  heading: string,
  onTouch: () => void,
  style?: CSSProperties
};

export default function MainButton({ heading, onTouch, style, ...props }:MainButtonProps) {

  return (
    <button
      className={styles.MainButton}
      onClick={onTouch}
      style={style}
      {...props}
    >
      {heading}
    </button>
  )
}
