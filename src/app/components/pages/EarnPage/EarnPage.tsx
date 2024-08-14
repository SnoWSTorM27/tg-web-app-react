// import { useHistory } from 'react-router-dom';
import styles from './EarnPage.module.css';
import Navbar from '../../ui/Navbar';
import ExpLogo from "../../../assets/icons/XP_logo.svg?react";
import TaskCard from '../../ui/TaskCard';
import { taskItems as items } from '../../../utils/helpers';
import { Task } from '../../../interfaces/task.type';

export default function EarnPage() {
  return (
    <div className={styles.EarnPage}>
      <div className={styles.Header}>
        <div className={styles.Heading}>Earn more</div>
        <div className={styles.ExpLogo}>
          <ExpLogo />
        </div>
      </div>
      <div className={styles.Wrapper}>
        <h4>Everyday task</h4>
        <ul className={styles.List}>
          <TaskCard
            context='calendar'
            title='Get your daily reward'
            currency='exp'
            description='Take the reward'
            reward={'60K'}
          />
        </ul>
        <h4>Task list</h4>
        <ul className={styles.List}>
        {items.map((item: Task) => (
          <TaskCard
            key={item.id}
            title={item.title}
            description={item.description}
            currency={item.currency}
            reward={item.reward}
            context={item.context}
            leftColor={item?.leftColor}
            rightColor={item?.rightColor}
          />
        ))}
        </ul>
      </div>
      <Navbar />
    </div>
  )
}
