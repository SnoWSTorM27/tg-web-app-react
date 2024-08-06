import { useHistory } from 'react-router-dom';
import MainButton from '../../ui/MainButton';
import styles from './MainPage.module.css';

export default function MainPage() {
  const history = useHistory();
  return (
    <div className={styles.MainPage}>
      <h1>Main Page</h1>
      <MainButton
        heading='Выбор персонажа'
        onTouch={() => history.push('/character')}
      />
    </div>
  )
}
