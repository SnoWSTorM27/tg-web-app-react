import { CSSProperties } from 'react';
import styles from './ProgressBar.module.css';
import Avatar from '../Avatar';

type ProgressBarProps = {
  current: number,
  total: number,
  style?: CSSProperties
};

export default function ProgressBar({ current, total, style }:ProgressBarProps) {
  
  const getWidthProgressValue = ( current: number , total: number) => {
    if (current < total) {
      return current / total * 100
    }
    return 100;
  }

  return (
    <div className={styles.ProgressBar} style={style}>
      <div className={styles.Avatar}>
        <Avatar color='green' />
      </div>
      <div className={styles.ProgressInfo}>
        <div className={styles.Wrapper}>
          <div className={styles.Name}>
            Peter Parker
            <div className={styles.Status}>
              Pro
            </div>
          </div>
          <div className={styles.Values}>
            {current} / {total}
          </div>
        </div>
        <div className={styles.Progress}>
          <div className={styles.ProgressValue} style={{ width: `${getWidthProgressValue(current, total)}%` }}></div>
        </div>
      </div>
    </div>
  )
}
