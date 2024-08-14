import { CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import styles from './DailyModal.module.css';

type DailyModalProps = {
  text?: string,
  label: string,
  content?: string,
  alt?: string,
  open: boolean,
  onClose: (active: boolean) => void,
  style?: CSSProperties
};

export default function DailyModal({ onClose, content, alt, open, label, text }:DailyModalProps ) {
  if (!open) {
    return null;
  }
  return createPortal(
    <>
      <div className={styles.DailyModal} >
        <div
          className={styles.Overlay}
          onClick={(e) => {
            e.stopPropagation();
            onClose(false);
          }}
        />
        <div className={styles.Wrapper}>
          {label && <h2 className={styles.Title}>{label}</h2>}
          {text && <div className={styles.Text}>{text}</div>}
          <img
            className={styles.Text}
            src={content}
            alt={alt}
            loading="eager"
          />
        </div>
        <button
          className={styles.DailyModalCloseBtn}
          onClick={(e) => {
            e.stopPropagation();
            onClose(false);
          }}
        >&times;</button>
      </div>
    </>,
    document.getElementById('daily') as HTMLElement);
}
