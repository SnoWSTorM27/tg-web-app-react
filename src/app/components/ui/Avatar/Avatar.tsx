import { CSSProperties } from 'react';
import styles from './Avatar.module.css';

type AvatarProps = {
  color?: string,
  style?: CSSProperties
};

export default function Avatar({ color = '#EB4141', style, ...props }:AvatarProps) {

  return (
    <svg className={styles.Avatar} {...props} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill={color}/>
      <path d="M10 19C10 13.4772 14.4772 9 20 9C25.5228 9 30 13.4772 30 19V30.4912L21.8182 34V26.9825L25.4545 25.2281V19.0877L21.8182 20.0797V22.5965L20 23.4737L18.1818 22.5965V20.0797L14.5455 19.0877V25.2281L18.1818 26.9825V34L10 30.4912V19Z" fill="white"/>
      <path d="M16.5973 5.57403L20.1713 2L23.7453 5.57403L21.9583 13.1688H18.3843L16.5973 5.57403Z" fill="#2E2E2E"/>
    </svg>
  )
}
