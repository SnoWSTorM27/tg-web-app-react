import { CSSProperties } from 'react';
import styles from './TapeList.module.css';
import { Nationality } from '../../../interfaces/nationality.type';

type TapeListProps = {
  heading?: string,
  items: Nationality[],
  active: string,
  onActive: (item: Nationality) => void,
  style?: CSSProperties
};

export default function TapeList({ heading, active, items, style, onActive }:TapeListProps) {
  
  return (
    <div className={styles.TapeList} style={style}>
      {heading && <h4>{heading}</h4>}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <button
              onClick={() => onActive(item)}
              className={`${styles.Btn} ${active === item.id ? styles.active : ""}`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
