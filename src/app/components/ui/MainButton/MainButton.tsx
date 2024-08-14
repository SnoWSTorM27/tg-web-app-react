import React, { CSSProperties } from 'react';
import styles from './MainButton.module.css';

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  heading: string,
  onTouch: () => void,
  style?: CSSProperties
};

const MainButton: React.FC<MainButtonProps> = ({ heading, onTouch, style, ...props }) => {

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

export default MainButton;
