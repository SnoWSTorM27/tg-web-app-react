// import { useHistory } from 'react-router-dom';
import styles from './MainPage.module.css';
import Navbar from '../../ui/Navbar';
import MainHeader from '../../ui/MainHeader';
import EventBar from '../../ui/EventBar';
// import ComboSVG from "../../../assets/icons/Combo.svg?react";
import combo from "../../../assets/icons/Combo.svg";
import sparring from "../../../assets/icons/Sparring.svg";
import main from "../../../assets/icons/Main.svg";
import { useState } from 'react';
import ExperienceCount from '../../ui/ExperienceCount';
import EnergyBar from '../../ui/EnergyBar';
import ProgressBar from '../../ui/ProgressBar';
import ShopButton from '../../ui/ShopButton';

export default function MainPage() {
  // const history = useHistory();
  const [activeEvent, setActiveEvent] = useState("");
  return (
    <div className={styles.MainPage}>
      <MainHeader style={{ marginBottom: '16px' }}/>
      <div className={styles.Events}>
        <EventBar
          title='Daily combo'
          cooldown={[1, 20, 50]}
          isComleted={true}
          active={activeEvent === 'Daily combo'}
          onActive={setActiveEvent}
        >
          <img src={combo} alt="Daily combo" />
        </EventBar>
        <EventBar
          title='Sparring'
          cooldown={[20, 10, 4]}
          isComleted={true}
          active={activeEvent === 'Sparring'}
          onActive={setActiveEvent}
        >
          <img src={sparring} alt="Sparring" />
        </EventBar>
        <EventBar
          title='Tournament'
          cooldown={[22, 1, 33]}
          isComleted={false}
          active={activeEvent === 'Tournament'}
          onActive={setActiveEvent}
        />
      </div>
      <ExperienceCount
        count={70002314454654}
      /> 
      <div className={styles.Image}>
        <img src={main} alt="main picture" />
      </div>
      <ShopButton />
      <EnergyBar
        current={4560}
        total={6000}
        style={{ marginBottom: '20px' }}
      />
      <ProgressBar
        current={5}
        total={10}
        style={{ marginBottom: '16px' }}
      />
      <Navbar />
    </div>
  )
}
