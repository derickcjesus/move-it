import styles from '../styles/components/CompletedChallenger.module.css';

export function CompletedChallenger(){
    return (
        <div className={styles.completedChallengerContainer}>
            <span>Desafios Completos</span> <span>5</span>
        </div>
    );
}