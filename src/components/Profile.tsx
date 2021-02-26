import { Profiler } from "inspector";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/derickcjesus.png" alt="derick" />
      <div>
        <strong>Derick de Jesus</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
