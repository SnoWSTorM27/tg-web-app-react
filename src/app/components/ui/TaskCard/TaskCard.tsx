import { CSSProperties, useState } from 'react';
import styles from './TaskCard.module.css';
import getPathAndAlt from '../../../utils/pictures';
import icons from '../../../utils/icons';
import XPsvg from "../../../assets/icons/XP.svg?react";
import { Task } from '../../../interfaces/task.type';
import DailyModal from '../DailyModal';

interface TaskCardProps extends Task  {
  style?: CSSProperties
};

export default function TaskCard({ title, context, reward, description, currency = 'exp', leftColor = '#2D3339', rightColor = '#6B859F80', style }:TaskCardProps) {
  const [show, setShow] = useState(false);
  const { src, alt } = getPathAndAlt(context);

  const stl = {
    ...style,
    background: `linear-gradient(90deg, ${leftColor} 0%, ${leftColor} 50%, ${rightColor} 100%)`
  };

  const handleOpenModal = () => {
    if (context === 'calendar') setShow(true);
  };
  
  return (
    <>
      <button
        onClick={handleOpenModal}
        className={styles.TaskCard}
        style={stl}
      >
        <div className={styles.Wrap}>
          <div className={styles.Title}>
            {title}
          </div>
          <div className={styles.Info}>
            <div className={`${styles.RewardIcon} ${currency === 'silver' ? styles.silver : ""} ${currency === 'gold' ? styles.gold : ""}`}>
              { currency === 'exp' ? <XPsvg />  : icons.earnIcon }
            </div>
            <div className={styles.Reward}>
              +{reward}
            </div>
            <div className={styles.Description}>
              {description}
            </div>
          </div>
        </div>
        <div className={styles.Icon}>
          <img src={src} alt={alt} />
        </div>
      </button>
      <DailyModal
        label='Get your daily reward'
        text='Get coins for daily login without skipping.One day of skipping and the counter starts counting again'
        content='../src/app/assets/icons/ExpCalendar.svg'
        alt='logo calendar'
        open={show}
        onClose={()=>setShow(false)}
      />
    </>
  )
}
