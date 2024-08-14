import { CSSProperties } from 'react';
import styles from './Navbar.module.css';
import { navItems as items } from '../../../utils/helpers';
import { useHistory, useLocation } from 'react-router-dom';

type NavbarProps = {
  style?: CSSProperties
};



export default function Navbar({ style }:NavbarProps) {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <nav className={styles.Navbar} style={style}>
      <ul>
        {items.map(item => {
          if (item.path === '/') {
            return (
              <li key={item.id}>
                <button
                  onClick={() => history.push(item.path)}
                  // onClick={() => onActive(item)}
                  // className={`${styles.MainBtn} ${pathname === item.path ? styles.active : ""}`}
                  className={styles.MainBtn}
                >
                  <div className={styles.Icon}>
                    {item.icon}
                  </div>
                  {item.title && <div className={styles.Title}>
                    {item.title}
                  </div>}
                </button>
              </li>
            );
          }
          return (
            <li key={item.id}>
              <button
                onClick={() => history.push(item.path)}
                className={`${styles.Btn} ${pathname === item.path ? styles.active : ""}`}
              >
                <div className={styles.Icon}>
                  {item.icon}
                </div>
                {item.title && <div className={styles.Title}>
                  {item.title}
                </div>}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
