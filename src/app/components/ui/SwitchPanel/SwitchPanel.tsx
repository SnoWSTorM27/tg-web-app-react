import { CSSProperties } from 'react';
import styles from './SwitchPanel.module.css';

type SwitchPanelProps = {
  heading?: string,
  leftBtnTitle: string,
  rightBtnTitle: string,
  active: boolean,
  onSwitch: (active: boolean) => void,
  style?: CSSProperties
};

export default function SwitchPanel({ heading, leftBtnTitle, rightBtnTitle, active, onSwitch, style }:SwitchPanelProps) {

  return (
    <div className={styles.SwitchPanel} style={style}>
      {heading && <h4>{heading}</h4>}
      <div className={styles.Background}>
        <button
          className={`${styles.Btn} ${active ? styles.active : ""}`}
          onClick={() => onSwitch(!active)}
        >
          {leftBtnTitle}
        </button>
        <button
          className={`${styles.Btn} ${!active ? styles.active : ""}`}
          onClick={() => onSwitch(!active)}
        >
          {rightBtnTitle}
        </button>
      </div>
    </div>
  )
}
