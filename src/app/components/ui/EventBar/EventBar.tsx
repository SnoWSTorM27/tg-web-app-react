import React, { CSSProperties } from 'react';
import styles from './EventBar.module.css';

type EventBarProps = {
  isComleted: boolean,
  active: boolean,
  title: string,
  cooldown: number[],
  onActive: (title: string) => void,
  children?: React.ReactNode,
  style?: CSSProperties
};

const format = (vals: number[]) =>
  vals.map((v) => v.toString().padStart(2, '0')).join(':');

export default function EventBar({ children, active, onActive, title, isComleted, cooldown, style }:EventBarProps) {
  
  return (
    <div
      onClick={() => onActive(title)}
      className={`${styles.EventBar} ${active ? styles.active : ""}`}
      style={style}
    >
      <div className={styles.Thumbnail}>
        <div className={styles.Icon}>
          { children ?? <div className={styles.Empty}></div> }
        </div>
      </div>
      <div className={styles.Info}>
        <div className={styles.Title}>
          {title}
        </div>
        <div className={`${styles.Timer} ${isComleted ? styles.completed : ""}`} >
          {format(cooldown)}
        </div>
      </div>
      {isComleted && <div className={styles.Status}>
          Active
      </div>}
    </div>
  )
}
