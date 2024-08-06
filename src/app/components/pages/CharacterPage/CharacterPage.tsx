import { useState } from 'react';
import styles from './CharacterPage.module.css';
import SwitchPanel from '../../ui/SwitchPanel';
import TapeList from '../../ui/TapeList';
import { nationalities } from '../../../utils/helpers';
import { Nationality } from '../../../interfaces/nationality.type';
import MainButton from '../../ui/MainButton';
import CharacterPicture from '../../ui/CharacterPicture';
import { useHistory } from 'react-router-dom';

export default function CharacterPage() {
  const history = useHistory();
  const [ gender, setGender ] = useState(true);
  const [ nationality, setNationality ] = useState("");
  
  const handleActivedNationality = (item: Nationality) => {
    setNationality(item.id);
  };

  return (
    <div className={styles.CharacterPage}>
      <div className={styles.Wrapper}>
        <div className={styles.wrap}>
          <h1>Welcome to MMA Fighters</h1>
          <div className={styles.Description} >Choose your character</div>
        </div>
        <div className={styles.Image}>
          <CharacterPicture
            color='red'
          />
        </div>
        <div className={styles.wrap}>
          <SwitchPanel
            heading='Gender'
            leftBtnTitle='Male'
            rightBtnTitle='Female'
            onSwitch={setGender}
            active={gender}
            style={{ marginBottom: "8px" }}
            />
          <TapeList
            heading='Nationality'
            items={nationalities}
            onActive={handleActivedNationality}
            active={nationality}
            />
        </div>
      </div>
      <MainButton
        heading='Continue'
        onTouch={() => history.push('/')}
      />
    </div>
  )
}
