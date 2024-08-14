import { CSSProperties } from 'react';
import styles from './EnergyBar.module.css';
import LightingSVG from "../../../assets/icons/Lightning.svg?react";

type EnergyBarProps = {
  current: number,
  total: number,
  style?: CSSProperties
};

export default function EnergyBar({ current, total, style }:EnergyBarProps) {
  
  return (
    <div className={styles.EnergyBar} style={style}>
      <div className={styles.Wrapper}>
        <div className={styles.Energy}>
          <div className={styles.Silver}>
            <div className={styles.Amount}>
              {current} / {total}
            </div>
          </div>
          <div className={styles.Gold}>
            <div className={styles.LightningIcon}>
              <LightingSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
