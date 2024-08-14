import { CSSProperties } from 'react';
import styles from './ShopButton.module.css';
import shop from "../../../assets/icons/Shop.svg";

type ShopButtonProps = {
  color?: string,
  style?: CSSProperties
};

export default function ShopButton({ color = '#EB4141', style, ...props }:ShopButtonProps) {

  return (
    <button className={styles.ShopButton} {...props}>
      <img src={shop} alt="shop icon" />
    </button>
  )
}
