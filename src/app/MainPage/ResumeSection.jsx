import styles from './Resume.module.sass';
export default function ResumeSection(props) {
    return (
      <div className={styles['resume-section']}>
        <div className={styles['resume-section-content']}>
          {props.current && <span className={styles.tag}>Current Position</span>}
          <h4>{props.title}</h4>
          {props.location && <span className={styles.location}>{props.location}</span>}
          {props.location && props.time && <span>{' '}&mdash;{' '}</span>}
          {props.time && <span className={styles.time}>{props.time}</span>}
          {props.children}
        </div>
      </div>
    );
}
