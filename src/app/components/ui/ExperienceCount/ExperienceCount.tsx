import { CSSProperties } from 'react';
import styles from './ExperienceCount.module.css';
import XPsvg from "../../../assets/icons/XP.svg?react";

type ExperienceCountProps = {
  count: number,
  style?: CSSProperties
};

export default function ExperienceCount({ count, style }:ExperienceCountProps) {
  
  return (
    <div className={styles.ExperienceCount} style={style}>
      <div className={styles.IconXP}>
        <XPsvg />
      </div>
      <div className={styles.Amount}>
        { count.toLocaleString() }
      </div>
    </div>
  )
}
