import { CSSProperties } from 'react';
import styles from './MainHeader.module.css';
import icons from '../../../utils/icons';
import XPsvg from "../../../assets/icons/XP.svg?react";

type MainHeaderProps = {
  style?: CSSProperties
};

export default function MainHeader({ style }:MainHeaderProps) {
  
  return (
    <div className={styles.MainHeader} style={style}>
      <div className={styles.Profit}>
        <div className={styles.IconXP}>
          <XPsvg />
        </div>
        <div className={styles.Info}>
          <div className={styles.Title}>
            Profit per hour
          </div>
          <div className={styles.Wrap}>
            <div className={styles.Amount}>
              +123,7K
            </div>
            <div className={styles.InfoIcon}>
              {icons.infoIcon}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Wrapper}>
        <div className={styles.Coins}>
          <div className={styles.Silver}>
            <div className={styles.CoinIcon}>
              {icons.earnIcon}
            </div>
            <div className={styles.Amount}>
              200.1K
            </div>
          </div>
          <div className={styles.Gold}>
            <div className={styles.CoinIcon}>
              {icons.earnIcon}
            </div>
            <div className={styles.Amount}>
              770.3K
            </div>
          </div>
        </div>
        <div className={styles.Settings}>
          <div className={styles.SettingsIcon}>
            {icons.settingsIcon}
          </div>
        </div>
      </div>
    </div>
  )
}
